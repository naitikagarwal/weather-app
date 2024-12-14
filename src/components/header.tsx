import './styles/header.css'
const Header = ({ searchInput, setSearchInput, handleSearch,name }: {
  name: string|null;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}) => {
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page refresh
    handleSearch();
  };
  return (
    <>
      <div className="navbar flex flex-row justify-around p-3 bg-stone-300 rounded-bl-2xl shadow-md md:text-2xl text-sm items-center">
        <div className="Location flex items-center justify-center gap-1">
        <span className="material-symbols-outlined">location_on</span>
          <h2 className=''>{name}</h2>
        </div>
        <div className="search-bar text-base">
          <form action="" className='flex gap-1 items-center ' onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Enter City Name' className='p-1 rounded-lg focus:outline-none' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
            <button type='submit'><span className="material-symbols-outlined p-1  ">search</span></button>
          </form>
        </div>
        <span className="material-symbols-outlined cursor-pointer">menu</span>
      </div>
    </>
  )
}

export default Header
