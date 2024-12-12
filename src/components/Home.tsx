import { useState } from "react"
import Temp from "./Temp"

const Home = () => {
const [temp, setTemp] =useState()

    fetch("http://api.weatherapi.com/v1/current.json?key=58d83b5261004fb49d4103806241112&q=Ranchi&aqi=no")
    .then((response)=>response.json())
    .then((data)=> setTemp(data)
    )


  return (
    <div className="text-white">
        <Temp/>
    </div>
  )
}

export default Home
