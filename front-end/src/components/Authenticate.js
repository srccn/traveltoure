import React from 'react';
import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
import Header from './Header';


function Authenticate(props) {
    const name = Cookies.get("name");
    console.log(name);
    if (name !== undefined) {
        return(
            <div>
                {props.children}
            </div>
        );
    }
    return(
        <div>
            <Header />
            <Navigate to="/login" />
        </div>
    );
}

export default Authenticate;