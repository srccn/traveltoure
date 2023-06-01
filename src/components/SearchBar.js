import React from 'react';
import { useState } from 'react';
import cities from 'toppop-cities';
import { FaSearch } from 'react-icons/fa';
import { Navigate } from "react-router-dom";


function SearchBar() {

    const [value, setValue] = useState("");
    const [entered, setEnter] = useState(false);
    const [selectedKey, setSelectedKey] = useState("");


    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleClick(item) {
        setEnter(true);
        setSelectedKey(item);
        setValue("");
    }

    function handleEnter({ key }) {
        if (entered) {
            setEnter(false);
        }
        if (key === "Enter" && value !== "") {
            setSelectedKey(value[0].toUpperCase() + value.substring(1, value.length));
            setEnter(true);
            setValue("");
        }
    }

    return (
        <div className="SearchWrapper">
            <div className="SearchBar">
                <FaSearch className="SearchIcon"/>
                <input className="SearchBox" placeholder='Enter a city' value={value} onChange={handleChange} onKeyDown={(e) => {handleEnter(e)}}/>
                {entered && <Navigate to={"/info/"+selectedKey} />}
            </div>  
            <div className="Dropdown">
                {cities.filter((item) => {
                    const searchItem = item.name.toLowerCase();
                    const actualName = value.toLowerCase();
                    return value && searchItem.startsWith(actualName);
                }).map((item) => {
                    return (
                        <div key={item.name} className="Dropdown-option" onClick={() => handleClick(item.name)}>
                            {entered && selectedKey === item.name && <Navigate to={"/info/"+item.name} />}
                            {item.name}
                        </div>
                    );
                })}
            </div>
        </div>  
    );
}

export default SearchBar;