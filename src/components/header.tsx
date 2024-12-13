import './styles/header.css'
const Header = () => {
  return (
    <>
      <div className="navbar flex flex-row justify-around p-3 bg-stone-300 rounded-bl-2xl shadow-md md:text-2xl text-sm items-center">
        <div className="Location flex items-center justify-center gap-1">
        <span className="material-symbols-outlined">location_on</span>
          <h2 className=''>Ranchi</h2>
        </div>
        <div className="search-bar text-base">
          <form action="" className='flex gap-1 items-center '>
            <input type="text" placeholder='Enter City Name' className='p-1 rounded-lg focus:outline-none'/>
            <button><span className="material-symbols-outlined p-1  ">search</span></button>
          </form>
        </div>
        <span className="material-symbols-outlined cursor-pointer">menu</span>
      </div>
    </>
  )
}

export default Header
