import React from 'react';
import Rating from './Rating';
import Content from './Content';
import { useState } from 'react';


function SinglePost() {

    const [content, setContent] = useState("");
    const [rating, setRating] = useState({ items: [] });
    const [name, setName] = useState("");
    const [town, setTown] = useState("");

    function handleNameChange(e) {
        setName(name + e.key);
    }

    function handleTownChange(e) {
        setTown(town + e.key);
    }

    return (
        <div className="OutsideBorder">
            <div className="PostWrapper">
                <div className="UpperHalf">
                    <div className="ProfileIcon">
                        <img className="ProfileImage" src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png" alt="profile-icon"></img>
                    </div>
                    <div className="NameLocationContainer">
                        <div className="UserName">
                            <input className="NameContainer" placeholder='Name' onKeyDown={(e)=> handleNameChange(e)}/>
                        </div>
                        <div className="Location">
                            <input className="NameContainer" placeholder='Hometown' onKeyDown={(e)=> handleTownChange(e)}/>
                        </div>
                    </div>
                </div>
                <Rating rating={rating} setRating={setRating}/>
                <Content content={content} setContent={setContent}/>
            </div>
        </div>
    );
}

export default SinglePost;