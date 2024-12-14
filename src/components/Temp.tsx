import { useEffect, useState } from 'react';
import './styles/Temp.css'
import { ApiResponse, fetchData } from '../utils/api';
  
const Temp = () => {

    const [weatherData, setWeatherData] = useState<{
        temp_c: number | null;
        feelslike_c: number | null;
        wind_kph: number | null;
        humidity: number | null;
        cloud: number | null;
        vis_km: number | null;
        uv: number | null;
        wind_dir: string | null;
        icon: string | null;
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

  return (
    <div className="flex min-w-full justify-around">
        <div className="temp border-2 rounded-lg px-5 my-4 pb-2">
            <img src={weatherData.icon !== null ? `${weatherData.icon}` : ''} alt="icon"  />
            <p className='font-bold text-3xl text-center'>{weatherData.temp_c !== null ? `${weatherData.temp_c}°C` : '--'}</p>
            <p className="text-center">Feels like {weatherData.feelslike_c !== null ? `${weatherData.feelslike_c}°C` : '--'}</p>
            <p className="text-center">{weatherData.text !== null ? `${weatherData.text}` : '--'}</p>
        </div>
        <div className="other-info border-2 rounded-lg px-5 my-4 py-2">
            <p>Wind : {weatherData.wind_kph !== null ? `${weatherData.wind_kph} km/hr` : '--'}</p>
            <p>Wind Direction : {weatherData.wind_dir !== null ? `${weatherData.wind_dir}` : '--'}</p>
            <p>Humidity : {weatherData.humidity !== null ? `${weatherData.humidity}` : '--'}%</p>
            <p> Cloud Cover: {weatherData.cloud !== null ? `${weatherData.cloud}` : '--'}%</p>
            <p>UV index : {weatherData.uv !== null ? `${weatherData.uv}` : '--'}</p>
            <p>Visibility : {weatherData.vis_km !== null ? `${weatherData.vis_km}` : '--'}km</p>
        </div>
    </div>
  )
}

export default Temp
