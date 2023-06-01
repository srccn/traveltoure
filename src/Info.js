import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Info() {
    return(
        <div>
            <Header className="InfoNav"/>
            <div className="Bottom">
                <Outlet />
            </div>
        </div>
    );
}

export default Info;