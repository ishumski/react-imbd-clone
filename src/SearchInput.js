import React, { useState } from 'react';
import './App.css';
import AsyncSelect from 'react-select/async';

function SearchInput() {

  const [inputValue, setInputValue] = useState('');

  const loadOptions = (inputValue) => {
    if (inputValue.length < 3) {
      return;
    }

    return fetch(
      `https://www.omdbapi.com/?s=${inputValue}&apikey=656f5a25&page=1`
    )
      .then((res) => res.json())
      .then((res) => console.log(res.Search));
  };

  const handleInputChange = (value) => {
    setInputValue(value);

  }

  return (
    <div className="SearchInput">
      <AsyncSelect
        loadOptions={loadOptions}
        getOptionLabel={(e) => `${e.Title} ${e.Year}`}
        getOptionValue={(e) => e.imbdID}
        onInputChange={handleInputChange}
        inputValue={inputValue}
       
        isClearable
      />
    </div>
  );
}
export default SearchInput;
 /*метод, который будет делать запрос с нашим id */
        // onChange={() => { }}
        // onClick={(value)=>{console.log(setInputValue(value))}}