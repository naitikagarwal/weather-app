type data = {
    temp_c: number | null;
    wind_kph: number | null;
    humidity: number | null;
    icon: string | undefined;
    text: string | null;
}
const MainSec = (props : data) => {
  return (
    <>
      <div className=" m-2 mt-10 text-gray-700 flex flex-col ">
        <div className="details flex md:flex-row flex-col justify-around items-center gap-4">

            <h1 className="md:text-9xl text-7xl font-bold">{props.temp_c !== null ? `${props.temp_c}°C` : '--'}</h1>
            
            <div className="sided flex-col flex gap-2">
                <p className="flex gap-1"><span className="material-symbols-outlined">air</span> {props.wind_kph !== null ? `${props.wind_kph}` : '--'}km/hr</p>
                <p className="flex gap-1"><span className="material-symbols-outlined">water_drop</span>{props.humidity !== null ? `${props.humidity}` : '--'}%</p>
            </div>

        </div>
        <h3 className="text-center text-4xl mt-4 flex justify-center items-center"> <img src={props.icon} alt="" />{props.text}</h3>
      </div>
    </>
  )
}

export default MainSec
