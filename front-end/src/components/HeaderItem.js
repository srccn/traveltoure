import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function HeaderItem({ value }) {

    function handleReset(value) {
        Cookies.remove("name");
        Cookies.remove("cookieMonster");
    }
    return (
        <>
            {value === "Logout" && <Link className="HeaderItem" onClick={() => handleReset(value)} reloadDocument to="/">{value}</Link>}
            {value === "TravelTour" && <Link className="First" to="/"> {value} </Link>}
            {(value === "Home") && <Link className="HeaderItem" to="/"> {value} </Link>}
            {(value === "My posts") && <Link className="HeaderItem" to="/myPosts">{value}</Link>}
            {value !== "Home" && value !== "TravelTour" && value !== "My posts" && value !== "Logout" && <Link className="HeaderItem" to={"/"+value.toLowerCase()}>{value} </Link>}
        </>
    );
}

export default HeaderItem;