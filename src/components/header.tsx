import React, { useState } from 'react';
import './styles/header.css';
type Location = {
  id?: number;
  name: string;
  region: string;
  country: string;
};
const Header = ({ searchInput, setSearchInput, handleSearch,name }: {
  name: string|null;
  searchInput: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: () => void;
}) => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [suggestions, setSuggestions] = useState<Location[]>([]); 
  const [loading, setLoading] = useState<boolean>(false);

  const fetchSuggestions = async (query: string) => {
    try {
      setLoading(true); // Start loading
      const response = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${query}`
      );
      const data = await response.json();
      setSuggestions(data); // Update suggestions
    } catch (error) {
      console.error("Error fetching data:", error);
      setSuggestions([]); // Clear suggestions on error
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    handleSearch();
  };
  const handleOptionClick = (location: Location) => {
    setSearchInput(location.name); // Update input with selected location
    setSuggestions([]); // Clear suggestions
  };
  const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchInput(e.target.value);
    if (e.target.value.trim() === "") {
      setSuggestions([]);
      return;
    }
    fetchSuggestions(e.target.value);
  };
console.log(suggestions);

  return (
    <>
      <div className="navbar flex flex-row justify-around p-3 bg-stone-300 rounded-bl-2xl shadow-md md:text-2xl text-sm items-center">
        <div className="Location flex items-center justify-center gap-1">
        <span className="material-symbols-outlined">location_on</span>
          <h2 className=''>{name}</h2>
        </div>
        <div className="search-bar text-base">
          <form action="" className='flex gap-1 items-center ' onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Enter City Name' className='p-1 rounded-lg focus:outline-none' value={searchInput}
        onChange={handleInputChange} />
        {loading && <p style={{ marginTop: "8px" }}>Loading...</p>}
      {suggestions.length > 0 && (
        <ul style={{listStyle: "none",
            padding: 0,
            margin: "8px 0 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "white",
            position: "absolute",
            top:"35px",
            zIndex: 1,
          }}>
          {suggestions.map((location, index) => (
            <li key={index} onClick={() => handleOptionClick(location)} className="p-2 cursor-pointer border-b">
              {location.name}, {location.region}, {location.country}
            </li>
          ))}
        </ul>)}
            <button type='submit'><span className="material-symbols-outlined p-1  ">search</span></button>
          </form>
        </div>
        {/* <span className="material-symbols-outlined cursor-pointer">menu</span> */}
      </div>
    </>
  )
}

export default Header
