import React from 'react';
import "./style.css";
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function HeaderItem({ value }) {
    const [otherClicked, setOtherClicked] = useState(false);
    const [homeClick, setHomeClick] = useState(false);

    function handleClick() {
        value === "Home" || value === "TravelTour" ? setHomeClick(true) : setOtherClicked(true);
    }

    return (
        <div className="HeaderItem" onClick={handleClick}>
            {homeClick && <Navigate to="/"/>}
            {otherClicked && <Navigate to={"/"+value.toLowerCase()}/>}
            {value}
        </div>
    );
}

export default HeaderItem;