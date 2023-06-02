import React from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import Tab from './Tab';
import Posts from './Posts';

function Place() {
    const { key } = useParams();
    return(
        <div className="AllPlace">
            <div className="FirstLine">
                <div className="SearchInfo">
                    <SearchBar/>
                </div>
                <Tab />
            </div>
            <div className="PlaceTitle">
                {key}
            </div>
            <div className="Posts">
                <Posts /> 
            </div>
        </div>
    );
}

export default Place;