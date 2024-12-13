const MainSec = () => {
  return (
    <>
      <div className="h-screen m-2 mt-10 text-gray-700">
        <div className="details flex md:flex-row flex-col justify-around items-center">
            
            <h1 className="text-9xl font-bold">20°C</h1>
            <div className="sided flex-col flex gap-2">
                <p className="flex gap-1"><span className="material-symbols-outlined">air</span> 10km/hr</p>
                <p><span className="material-symbols-outlined">water_drop</span>20%</p>
            </div>

        </div>
      </div>
    </>
  )
}

export default MainSec
