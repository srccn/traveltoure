import React from 'react';
import SinglePost from './SinglePost';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { useEffect } from 'react';


function Posts(props) {
    const [localData, setLocalData] = useState([]);
    const {id} = props;

    useEffect(() => {
        const result = fetch("http://localhost:3001/", {method: "GET"});

        result
            .then((response) => {
                return response.json();
            })
            .then((data)=> {
                setLocalData(data[id] !== undefined ? data[id] : []);
                console.log(data[id]);
                console.log(localData);
            })
    }, [id]);

    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    function handleSubmit() {
        var postReference = {
            currentContent : content,
            currentRating : rating,
            currentName : name,
            currentDate : date,
        }
        
        setContent("");
        setRating(0);
        setName("");
        setDate("");
    }
    return (
        <div>
            <div className="AddPost">
                <button className="AddText" onClick={()=> handleSubmit()}><FaPlus /> <div className="PostText">Add Post</div></button>
            </div>
            <SinglePost content = {content} setContent={setContent} rating={rating}
            setRating={setRating} name={name} setName={setName} date={date} setDate={setDate}
            add={true}/>
            {localData.map((item) => {
                return <SinglePost content = {item.content} setContent={setContent} rating={item.rating}
                setRating={setRating} name={item.name !== "" ? item.name : "Anonymous User"} setName={setName} 
                date={item.date !== "" ? item.date : "Unknown Date"} setDate={setDate}
                add={false} key={item.name}/>
            })}
        </div>
    );
}

export default Posts;