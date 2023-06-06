import React from 'react';
import Rating from './Rating';
import Content from './Content';
import { AiFillDelete } from 'react-icons/ai';


function SinglePost(props) {
    const {content, setContent, rating, setRating, name, setName,
        date, setDate, add, deletePost, first, editing,
        startEdit, handleEdit, index, place} = props;


    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleDateChange(event) {
        setDate(event.target.value);
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
                            {add ? <input id="NameInput" className="NameContainer" placeholder='Name' onChange={handleNameChange} value={name}/>
                            : <div className="OutputName">{name}</div>}
                        </div>
                        <div className="Time">
                            {add && <input id="DateInput" placeholder='Date (MM/DD/YYYY)' onChange={handleDateChange} value={date}/>}
                            {!add && <div className="OutputDate">{date}</div>}
                        </div>
                    </div>
                    <div className="EditWrapper">
                        {!add && <button className="Edit" onClick={() => !editing && startEdit(place, index)}>Edit</button>}
                        {add && !first && <button className="Edit" onClick={() => handleEdit(content, rating, name, date, place, index)}>Finished Edit</button>}
                    </div>
                    <div className="RemoveIconWrapper">
                        {!first && <AiFillDelete size={"1.5rem"} cursor={"pointer"} onClick={() => {deletePost(place, index)}}/>}
                    </div>
                </div>
                <Rating rating={rating} setRating={setRating} add={add}/>
                <Content content={content} setContent={setContent} add={add}/>
            </div>
        </div>
    );
}

export default SinglePost;