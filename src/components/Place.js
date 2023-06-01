import React from 'react';
import { useParams } from 'react-router-dom';
import SearchBar from './SearchBar';
import Tab from './Tab';
import { FaPlus } from 'react-icons/fa';
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
            <div className="ContentFirstLine">
                <div className="AddPost">
                    <FaPlus />
                    <div className="AddText">Add Post</div>
                </div>
                <div className="Sort">
                    Sort by: Most Recent
                </div>
            </div>
            <div className="Posts">
                <Posts /> 
            </div>
        </div>
    );
}

export default Place;