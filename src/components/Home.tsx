// import Temp from "./Temp"
import Forecast from './Forecast'
import MainSec from './MainSec'

const Home = () => {

  return (
    <div className="flex flex-col gap-3">
      <MainSec/>
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
