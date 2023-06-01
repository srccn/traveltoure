import React from 'react';
import HeaderItem from './HeaderItem';
import "./style.css";

function Header() {
    return (
        <>
            <div className="Header">
                <div className="First">
                    <HeaderItem value="TravelTour"/>
                </div>
                <div className="Rest">
                    <HeaderItem value="Home" />
                    <HeaderItem value="About" />
                    <HeaderItem value="View Map" />
                </div>
            </div>
        </>
    );
}

export default Header;



