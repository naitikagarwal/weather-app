// import { useEffect, useState } from "react"
// import {getCurrentData} from  '../utils'
import Temp from "./Temp"

const Home = () => {
// const [data, setCurrentData] =useState({})
// const [err, setErr] = useState(null)


// const fetchData = () =>{
//     getCurrentData
// }

// useEffect(()=>{
//     fetch('http://api.weatherapi.com/v1/current.json?key=58d83b5261004fb49d4103806241112&q=Ranchi&aqi=no')
//     .then((res)=>{
//         if(!res.ok){
//             throw new Error('Network response was not ok')
//         }
//         return res.json();
//     })
//     .then((data)=>{setTemp(data)})
//     .catch((err)=>{
//         setErr(err)
//     });
// },[])

// var obj;
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then(res => res.json())
//   .then(data => {
//     obj = data;
//    })

// async function getData() {
//     const url = 'http://api.weatherapi.com/v1/current.json?key=58d83b5261004fb49d4103806241112&q=Ranchi&aqi=no';
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`Response status: ${response.status}`);
//       }
//       const json = await response.json();
//       ;
//     } catch (error) {
//       console.error(error);
//     }
//   }
  
//   getData();

// console.log(temp);



  return (
    <div className="text-white">
        <Temp/>
    </div>
  )
}

export default Home
