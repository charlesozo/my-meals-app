import React, { useState } from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
  const [text, setText] = useState(" ");
  const {setSearchTerm,fetchRandomMeals} = useGlobalContext()
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text)
   
    }
  };
  const handleRandomMeal = () => {
    setSearchTerm("")
    
    fetchRandomMeals()
  }
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type favorite meal"
          value={text}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="btn">
          search
        </button>
        <button type="button" className="btn btn-hipster" onClick={handleRandomMeal}>
          Surprise me!
        </button>
      </form>
    </header>
  );
};

export default Search;
