type Great = {
    temp_c: number | null;
    feelslike_c: number | null;
    wind_kph: number | null;
    humidity: number | null;
    cloud: number | null;
    vis_km: number | null;
    uv: number | null;
    wind_dir: string | null;
    text: string | null;
    region: string | null;
    country: string | null;
    greet: number| null;
    maxtemp_c: number|null;
    mintemp_c: number|null;
    isVisible: boolean;
}
//md:mt-5 hidden md:flex-col md:gap-4  md:justify-center md:flex 
const Sidebar = (props: Great) => {
  return (
    <>
      <div className=" h-auto md:relative absolute mt-5 md:mt-10  sidebar flex flex-col gap-4 justify-center items-center" style={{
        background: 'rgb(245, 245, 244 )', 
        color: '#333', 
        width: props.isVisible? '100vw':'288px',
        padding: '10px',
        
      }}>
        <h2 className="text-3xl font-bold">Good {props.greet !== 0 ? 'Morning' : 'Evening'}</h2>
        <h3 className="text-2xl font-medium flex items-center"><span className="material-symbols-outlined">device_thermostat</span>{props.temp_c !== null ? `${props.temp_c}°C` : '--'}</h3>
        <p>Feels like : <b>{props.feelslike_c !== null ? `${props.feelslike_c}°C` : '--'}</b></p>
        <p>Wind : <b>{props.wind_kph !== null ? `${props.wind_kph} km/hr` : '--'}</b></p>
        <p>Wind Direction : <b>{props.wind_dir !== null ? `${props.wind_dir}` : '--'}</b></p>
        <p>Humidity : <b>{props.humidity !== null ? `${props.humidity}` : '--'}%</b></p>
        <p> Cloud Cover: <b>{props.cloud !== null ? `${props.cloud}` : '--'}%</b></p>
        <p>UV index : <b>{props.uv !== null ? `${props.uv}` : '--'}</b></p>
        <p>Visibility : <b>{props.vis_km !== null ? `${props.vis_km}` : '--'}km</b></p>
        <p>Max temp. :<b> {props.maxtemp_c !== null ? `${props.maxtemp_c}°C` : '--'} </b></p>
        <p>Min temp. :<b> {props.mintemp_c !== null ? `${props.mintemp_c}°C` : '--'} </b></p>
        <p>Region :<b> {props.region !== null ? `${props.region}` : '--'}</b></p>
        <p>Country :<b> {props.country !== null ? `${props.country}` : '--'} </b></p>
      </div>
    </>
  )
}

export default Sidebar
