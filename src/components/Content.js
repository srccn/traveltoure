import React from 'react';

function Content(props) {

    function handlePress(e) {
        props.setContent(e.key);
    }

    return(
        <textarea className="ReviewContent" onKeyDown={(e)=>handlePress(e)} placeholder="Enter your Review">
        </textarea>
    );
}


export default Content;