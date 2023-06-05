import React from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import Tab from './Tab';
import Posts from './Posts';
import Header from './Header';

function Place() {
    const { key } = useParams();

    return(
        <>
            <Header className="InfoNav"/>
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
                    <Posts id={key}/>
                </div>
            </div>
        </>
    );
}

export default Place;