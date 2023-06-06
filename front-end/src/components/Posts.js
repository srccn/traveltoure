import React, { useEffect } from 'react';
import SinglePost from './SinglePost';
import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function Posts(props) {
    const [localData, setLocalData] = useState([]);
    const {id} = props;    

    //make post states
    const [content, setContent] = useState("");
    const [rating, setRating] = useState(0);
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    //editing post states
    const [editContent, setEditContent] = useState("");
    const [editRating, setEditRating] = useState(0);
    const [editName, setEditName] = useState("");
    const [editDate, setEditDate] = useState("");

    const [editing, setEditing] = useState(false);



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
            delete: false,
            editing: false,
        };

        var addPackage = {
            key : id,
            list: postReference,
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

    //retrieves post that is being edited and sets relevant post data
    function startEdit(place, index) {
        try {
            const result = fetch("http://localhost:3001/edit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({place: place, index: index}),
            })
    
            result
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    const item = data[id][index];
                    console.log(item);
                    setEditContent(item.content);
                    setEditDate(item.date);
                    setEditRating(item.rating);
                    setEditName(item.name);
                    setLocalData(data[id]);
                })
        }
        catch(error) {
            console.log(error.message);
        }
        setEditing(true);
    }

    //puts edited data into database
    function handleEdit(content, rating, name, date, place, index) {
        const result = fetch("http://localhost:3001/finishEdit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: content,
                rating: rating,
                name: name,
                date: date,
                place: place,
                index: index,
            }),
        });

        result
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setLocalData(data[id]);
            })


        setEditing(false);
    }

    //add one to index in the beginning of "localData.map..." to start a zero index
    var index = -1;
    return (
        <div>
            <div className="AddPost">
                <button className="AddText" onClick={() => handleSubmit()}><FaPlus /> <div className="PostText">Add Post</div></button>
            </div>
            <SinglePost content = {content} setContent={setContent} rating={rating}
            setRating={setRating} name={name} setName={setName} date={date} setDate={setDate}
            add={true} first={true}/>
            {localData.map((item) => {
                index += 1;
                if (item.editing) {
                    return <SinglePost content = {editContent} setContent={setEditContent} rating={editRating}
                    setRating={setEditRating} name={editName !== "" ? editName : "Anonymous User"} setName={setEditName} 
                    date={editDate !== "" ? editDate : "Unknown Date"} setDate={setEditDate}
                    add={true} deletePost={handleDelete} first={false} editing={editing} startEdit={startEdit} 
                    handleEdit={handleEdit} index={index} place={id} key={index} />
                }
                return <SinglePost content = {item.content} setContent={setContent} rating={item.rating}
                    setRating={setRating} name={item.name !== "" ? item.name : "Anonymous User"} setName={setName} 
                    date={item.date !== "" ? item.date : "Unknown Date"} setDate={setDate}
                    add={false} deletePost={handleDelete} first={false} editing={editing} startEdit={startEdit}
                    handleEdit={handleEdit} index={index} place={id} key={index} />
            })}
        </div>
    );
}

export default Posts;