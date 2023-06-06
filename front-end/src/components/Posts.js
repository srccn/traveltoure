import React, { useEffect } from 'react';
import SinglePost from './SinglePost';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function Posts(props) {
    const [localData, setLocalData] = useState([]);
    const {id} = props;    

    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        const result = fetch("http://localhost:3001/",{
            method: "GET"
        });

        result
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLocalData(data[id] !== undefined ? data[id] : []);
                console.log(data);
            })
    }, [id]);


    function handleSubmit() {
        var postReference = {
            content : content,
            rating : rating,
            name : name,
            date : date,
        };

        var addPackage = {
            key : id,
            list: postReference,
            delete: false,
        };
        try {
            const send = fetch("http://localhost:3001/", {
                method: "POST",
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(addPackage),
            })

            send
            .then((response) => {
                console.log("success");
                console.log(response);
                return response.json();
            })
            .then((data) => {
                setLocalData(data[id] !== undefined ? data[id] : []);
                console.log(localData);
                console.log(data);
            })
        }
        catch(error) {
            console.log(error.message);
        }
        
        setContent("");
        setRating(0);
        setName("");
        setDate("");
    }

    function handleDelete(place, index) {
        try {
            const result = fetch("http://localhost:3001/delete", {
                method: "POST",
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({key: index, location: place}),
            });

            result
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    setLocalData(data[id]);
                })
        }
        catch(error) {
            console.log(error.message);
        }
    }

    var keyCounter = -1;
    return (
        <div>
            <div className="AddPost">
                <button className="AddText" onClick={() => handleSubmit()}><FaPlus /> <div className="PostText">Add Post</div></button>
            </div>
            <SinglePost content = {content} setContent={setContent} rating={rating}
            setRating={setRating} name={name} setName={setName} date={date} setDate={setDate}
            add={true}/>
            {localData.map((item) => {
                return <SinglePost content = {item.content} setContent={setContent} rating={item.rating}
                setRating={setRating} name={item.name !== "" ? item.name : "Anonymous User"} setName={setName} 
                date={item.date !== "" ? item.date : "Unknown Date"} setDate={setDate}
                deletePost={handleDelete} add={false} index={++keyCounter} place={id} key={++keyCounter}/>
            })}
        </div>
    );
}

export default Posts;