import React from 'react';
import Header from './Header';
import { useState, useEffect } from 'react';
import SinglePost from './SinglePost';
import SearchBar from './SearchBar';
import Cookies from 'js-cookie';

function MyPosts() {
    const dev = process.env.NODE_ENV === "development";
    const username = Cookies.get("name");
    
    const [localData, setLocalData] = useState([]);
    const [editing, setEditing] = useState(false);
   
    const [editContent, setEditContent] = useState("");
    const [editRating, setEditRating] = useState(0);
    const [editName, setEditName] = useState("");
    const [editDate, setEditDate] = useState("");


    //gets all the posts with given name
    useEffect(() => {
        let server_url = window.location.protocol+"//"+window.location.host+"/api"
        const result = fetch(server_url +"/getList", {
        //const result = fetch(dev ? "http://localhost:3001/api/getList" : "https://travel-tour.onrender.com/api/getList", {
            method: "GET",
        });

        result
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLocalData(Object.entries(data));
            })

    }, [dev]);

    //modifies editing to true for edited post
    //retrieves post that is being edited and sets relevant post data
    function startEdit(place, index) {
        try {
            let server_url = window.location.protocol+"//"+window.location.host+"/api"
            const result = fetch(server_url +"/edit", {
            // const result = fetch(dev ? "http://localhost:3001/api/edit" : "https://travel-tour.onrender.com/api/edit", {
                method: "PUT",
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
                    const item = data[place][index];
                    setEditContent(item.content);
                    setEditDate(item.date);
                    setEditRating(item.rating);
                    setEditName(item.name);
                    setLocalData(Object.entries(data));
                })
        }
        catch(error) {
            console.log(error.message);
        }
        setEditing(true);
    }

    //puts edited data into database and changes existing values
    function handleEdit(content, rating, name, date, place, index) {
        let server_url = window.location.protocol+"//"+window.location.host+"/api"
        const result = fetch(server_url +"/finishEdit", {
        //const result = fetch(dev ? "http://localhost:3001/api/finishEdit" : "https://travel-tour.onrender.com/api/finishEdit", {
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
                setLocalData(Object.entries(data));
            })
        setEditing(false);
    }

     //deletes post
     function handleDelete(place, index) {
        try {
            let server_url = window.location.protocol+"//"+window.location.host+"/api"
            const result = fetch(server_url +"/delete", {
                
            //const result = fetch(dev ? "http://localhost:3001/api/delete" : "https://travel-tour.onrender.com/api/delete", {
                method: "DELETE",
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
                    setLocalData(Object.entries(data));
                })
        }
        catch(error) {
            console.log(error.message);
        }
     }

    return (
        <div>
            <Header />
            <div className="FirstLine">
                <div className="SearchInfo">
                    <SearchBar/>
                </div>
            </div>
            <div className="NameKey">
                Your Posts:
            </div>
            <div className="PostsContainer">
                {
                    localData.map((placeAndPosts) => {
                        let index = -1; 
                        const place = placeAndPosts[0];
                        const posts = placeAndPosts[1].filter((post) => {
                            index += 1;
                            post.index = index;
                            //temporarily and then set first post to true right after
                            post.firstPost = false;
                            return post.username === username;
                        });

                        if (posts.length > 0) {
                            posts[0].firstPost = true;
                        }

                        return posts.map((post) => {
                            //currently editing post
                            if (post.editing) {
                                return <SinglePost content = {editContent} setContent={setEditContent} rating={editRating}
                                setRating={setEditRating} name={editName} setName={setEditName} 
                                date={editDate} setDate={setEditDate} add={true} deletePost={handleDelete} first={false} 
                                editing={editing} startEdit={startEdit} handleEdit={handleEdit} index={post.index} place={place} 
                                key={post.index} firstUserPost={post.firstPost} userName={post.username} />
                            }
                            return <SinglePost content={post.content} setContent={setEditContent} rating={post.rating}
                            setRating={setEditRating} name={post.name} setName={setEditName}  date={post.date} setDate={setEditDate}
                            add={false} deletePost={handleDelete} first={false} editing={editing} startEdit={startEdit} handleEdit={handleEdit}
                            index = {post.index} place={place} key={post.index} firstUserPost={post.firstPost} userName={post.username}/>
                        })
                    })
                }
        </div>
    </div>
    );
}


export default MyPosts;