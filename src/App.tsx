import Header from "./components/header"
import Home from "./components/Home"
import "./App.css"
import Sidebar from "./components/Sidebar"
import { useEffect, useState } from "react"
import { ApiResponse, fetchData} from "./utils/api"
const App = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const[searchInput, setSearchInput] = useState("")
  const[apiUrl, setApiUrl] = useState(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=goa&aqi=no`)
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  const handleSearch = () => {
    if (searchInput) {
      setApiUrl(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchInput}&aqi=no`);
      console.log(searchInput);
      
    }
  };
  const [weatherData, setWeatherData] = useState<{
      temp_c: number | null;
      feelslike_c: number | null;
      wind_kph: number | null;
      humidity: number | null;
      cloud: number | null;
      vis_km: number | null;
      uv: number | null;
      wind_dir: string | null;
      icon: string | undefined;
      text: string | null;
      region: string | null;
      name: string | null;
      sunrise: string | null;
      sunset: string | null;
      country: string | null;
      is_day: number| null;
      maxtemp_c: number|null;
      mintemp_c: number|null;
      t_hour: object|null
    }>({
      temp_c: null,
      feelslike_c: null,
      wind_kph: null,
      wind_dir: null,
      icon: undefined,
      cloud: null,
      vis_km: null,
      uv: null,
      humidity: null,
      text: null,
      region: null,
      name: null,
      country: null,
      is_day: null,
      maxtemp_c: null,
      mintemp_c: null,  
      sunrise:  null,
      sunset:  null,
      t_hour:  null,
    });
            
  useEffect(() => {
          // const apiUrl = ``; 
  
      const loadWeatherData = async () => {
        try {
          const data: ApiResponse = await fetchData(apiUrl);
          
          
          setWeatherData({
            temp_c: data.current.temp_c,
            feelslike_c: data.current.feelslike_c,
            wind_kph:data.current.wind_kph,
            humidity:data.current.humidity,
            wind_dir:data.current.wind_dir,
            is_day:data.current.is_day,
            uv:data.current.uv,
            vis_km:data.current.vis_km,
            cloud:data.current.cloud,
            text:data.current.condition.text,
            icon:data.current.condition.icon,
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
            maxtemp_c: data.forecast.forecastday[0].day.maxtemp_c,
            mintemp_c: data.forecast.forecastday[0].day.mintemp_c,
            sunrise: data.forecast.forecastday[0].astro.sunrise,
            sunset: data.forecast.forecastday[0].astro.sunset,
            t_hour: data.forecast.forecastday[0].hour
          });
        } catch (error) {
          console.error('Error loading weather data:', error);
        }
      };
  
      loadWeatherData();
      },[apiUrl]);
  console.log(weatherData);
  // console.log(sunset);
  
  
  

  return (
    <div className="scr bg-stone-100">
      <Header name={weatherData.name} searchInput={searchInput} setSearchInput={setSearchInput} handleSearch={handleSearch} toggleSidebar={toggleSidebar}/>
      <div className=" flex justify-around">
        <Home
          humidity={weatherData.humidity}
          temp_c={weatherData.temp_c}
          wind_kph={weatherData.wind_kph}
          icon={weatherData.icon}
          text={weatherData.text}
          sunrise={weatherData.sunrise}
          sunset={weatherData.sunset}
          t_hour={weatherData.t_hour}
          name={weatherData.name}
        />
        {isSidebarVisible? <Sidebar 
        temp_c={weatherData.temp_c} 
        maxtemp_c={weatherData.maxtemp_c}
        mintemp_c={weatherData.mintemp_c}
        greet={weatherData.is_day}
        cloud={weatherData.cloud}
        country={weatherData.country}
        feelslike_c={weatherData.feelslike_c}
        humidity={weatherData.humidity}
        region={weatherData.region}
        text={weatherData.text}
        uv={weatherData.uv}
        vis_km={weatherData.vis_km}
        wind_dir={weatherData.wind_dir}
        wind_kph={weatherData.wind_kph}
        isVisible={isSidebarVisible}
        />:null}
        <div className="md:block hidden">
        <Sidebar 
        temp_c={weatherData.temp_c} 
        maxtemp_c={weatherData.maxtemp_c}
        mintemp_c={weatherData.mintemp_c}
        greet={weatherData.is_day}
        cloud={weatherData.cloud}
        country={weatherData.country}
        feelslike_c={weatherData.feelslike_c}
        humidity={weatherData.humidity}
        region={weatherData.region}
        text={weatherData.text}
        uv={weatherData.uv}
        vis_km={weatherData.vis_km}
        wind_dir={weatherData.wind_dir}
        wind_kph={weatherData.wind_kph}
        isVisible={isSidebarVisible}
        />
        </div>
      
      </div>
      
    </div>
  )
}

export default App
