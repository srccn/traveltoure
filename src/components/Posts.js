import React from 'react';
import SinglePost from './SinglePost';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';


function Posts() {
    const [content, setContent] = useState("");
    const [rating, setRating] = useState({ items: [] });
    const [name, setName] = useState("");
    const [town, setTown] = useState("");

    const [postsList, setPostList] = useState([]);

    function handleSubmit() {
        var postReference = {
            currentContent : content,
            currentRating : rating,
            currentName : name,
            currentTown : town,
            key : postsList.length
        }

        setPostList([postReference, ...postsList]);
        console.log(postsList);
    }
    return (
        <div>
            <div className="AddPost">
                <FaPlus />
                <button className="AddText" onClick={()=> handleSubmit()}>Add Post</button>
            </div>
            <SinglePost content = {content} setContent={setContent} rating={rating}
            setRating={setRating} name={name} setName={setName} town={town} setTown={setTown}
            add={true}/>
            {postsList.map(item=> {
                return <SinglePost content = {item.currentContent} setContent={setContent} rating={item.currentRating}
                setRating={setRating} name={item.currentName} setName={setName} town={item.currentTown} setTown={setTown}
                add={false} key={item.key}/>
            })}
        </div>
    );
}

export default Posts;