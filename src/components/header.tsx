import './styles/header.css'
const Header = () => {
  return (
    <>
      <div className="header flex flex-row justify-around py-3">
        <h2 className="text-2xl text-white">Weather <span className="material-symbols-outlined">search</span></h2>
        <div className="rounded-lg bg-white pr-4 pl-4 flex">
            <input className="m-0 focus:outline-none" type="text"  placeholder="Enter City name"/>
        </div>
      </div>
    </>
  )
}

export default Header
