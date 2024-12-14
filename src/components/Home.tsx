// import Temp from "./Temp"
import Forecast from './Forecast'
import MainSec from './MainSec'
type data = {
  temp_c: number | null;
  wind_kph: number | null;
  humidity: number | null;
  icon: string | undefined;
  text: string | null;
}
const Home = (props : data) => {

  return (
    <div className="flex flex-col gap-3">
      <MainSec 
        humidity={props.humidity} 
        temp_c={props.temp_c}
        wind_kph={props.wind_kph}
        icon={props.icon}
        text={props.text}
      />
      <div className="flex flex-wrap justify-center">
        <Forecast/>
        <Forecast/>
        <Forecast/>
        <Forecast/>
        <Forecast/>
      </div>
      
    </div>
  )
}

export default Home
