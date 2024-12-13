import { useEffect, useState } from 'react';
import { ApiResponse, fetchData } from '../utils/api';



const Sidebar = () => {

        const [weatherData, setWeatherData] = useState<{
            temp_c: number | null;
            feelslike_c: number | null;
            wind_kph: number | null;
            humidity: number | null;
            cloud: number | null;
            vis_km: number | null;
            uv: number | null;
            wind_dir: string | null;
            icon: URL | null;
            text: string | null;
            region: string | null;
            country: string | null;
          }>({
            temp_c: null,
            feelslike_c: null,
            wind_kph: null,
            wind_dir: null,
            icon: null,
            cloud: null,
            vis_km: null,
            uv: null,
            humidity: null,
            text: null,
            region: null,
            country: null,
          });
          useEffect(() => {
                  const apiKey = import.meta.env.VITE_API_KEY;
                  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Ranchi&aqi=no`; 
          
              const loadWeatherData = async () => {
                try {
                  const data: ApiResponse = await fetchData(apiUrl);
                  setWeatherData({
                    temp_c: data.current.temp_c,
                    feelslike_c: data.current.feelslike_c,
                    wind_kph:data.current.wind_kph,
                    humidity:data.current.humidity,
                    wind_dir:data.current.wind_dir,
                    uv:data.current.uv,
                    vis_km:data.current.vis_km,
                    cloud:data.current.cloud,
                    text:data.current.condition.text,
                    icon:data.current.condition.icon,
                    region: data.location.region,
                    country: data.location.country,
                  });
                } catch (error) {
                  console.error('Error loading weather data:', error);
                }
              };
          
              loadWeatherData();
              },[]);
console.log(weatherData);


  return (
    <>
      <div className="mt-5 flex flex-col gap-4  justify-center">
        <h2 className="text-3xl font-bold">Good Morning</h2>
        <h3 className="text-2xl font-medium">{weatherData.temp_c !== null ? `${weatherData.temp_c}°C` : '--'}</h3>
        <p>Feels like : <b>{weatherData.feelslike_c !== null ? `${weatherData.feelslike_c}°C` : '--'}</b></p>
        <p>Wind : <b>{weatherData.wind_kph !== null ? `${weatherData.wind_kph} km/hr` : '--'}</b></p>
        <p>Wind Direction : <b>{weatherData.wind_dir !== null ? `${weatherData.wind_dir}` : '--'}</b></p>
        <p>Humidity : <b>{weatherData.humidity !== null ? `${weatherData.humidity}` : '--'}%</b></p>
        <p> Cloud Cover: <b>{weatherData.cloud !== null ? `${weatherData.cloud}` : '--'}%</b></p>
        <p>UV index : <b>{weatherData.uv !== null ? `${weatherData.uv}` : '--'}</b></p>
        <p>Visibility : <b>{weatherData.vis_km !== null ? `${weatherData.vis_km}` : '--'}km</b></p>
        <p>Region :<b> {weatherData.region !== null ? `${weatherData.region}` : '--'}</b></p>
        <p>Country :<b> {weatherData.country !== null ? `${weatherData.country}` : '--'} </b></p>

      </div>
    </>
  )
}

export default Sidebar
