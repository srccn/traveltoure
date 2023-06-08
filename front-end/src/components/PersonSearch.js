import React from 'react';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Navigate } from 'react-router-dom';



function PersonSearch() {

    const [entered, setEntered] = useState(false);
    const [value, setValue] = useState("");
    
    function handleChange(event) {
        setValue(event.target.value)
    }

    function handleEnter(e) {
        if (entered) {
            setEntered(false);
        }
        if (e.key === "Enter" && value !== '') {
            setEntered(true);
        }
    }

    return (
        <div>
            <div className="PersonSearch">
                <div className="SearchBar">
                    <FaSearch className="SearchIcon"/>
                    <input className="SearchBox" placeholder='Enter your name from posts' value={value} onChange={handleChange} onKeyDown={(e) => {handleEnter(e)}}/>
                    {entered && <Navigate to={"/person/"+value} />}
                </div>
            </div>
        </div>
    );
}

export default PersonSearch;