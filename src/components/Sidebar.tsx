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
}

const Sidebar = (props: Great) => {
  return (
    <>
      <div className="mt-5 flex flex-col gap-4  justify-center">
        <h2 className="text-3xl font-bold">Good Morning</h2>
        <h3 className="text-2xl font-medium flex items-center"><span className="material-symbols-outlined">device_thermostat</span>{props.temp_c !== null ? `${props.temp_c}°C` : '--'}</h3>
        <p>Feels like : <b>{props.feelslike_c !== null ? `${props.feelslike_c}°C` : '--'}</b></p>
        <p>Wind : <b>{props.wind_kph !== null ? `${props.wind_kph} km/hr` : '--'}</b></p>
        <p>Wind Direction : <b>{props.wind_dir !== null ? `${props.wind_dir}` : '--'}</b></p>
        <p>Humidity : <b>{props.humidity !== null ? `${props.humidity}` : '--'}%</b></p>
        <p> Cloud Cover: <b>{props.cloud !== null ? `${props.cloud}` : '--'}%</b></p>
        <p>UV index : <b>{props.uv !== null ? `${props.uv}` : '--'}</b></p>
        <p>Visibility : <b>{props.vis_km !== null ? `${props.vis_km}` : '--'}km</b></p>
        <p>Region :<b> {props.region !== null ? `${props.region}` : '--'}</b></p>
        <p>Country :<b> {props.country !== null ? `${props.country}` : '--'} </b></p>

      </div>
    </>
  )
}

export default Sidebar
