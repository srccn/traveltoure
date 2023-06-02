import React from 'react';

function Content(props) {

    const {content, setContent, add} = props

    function handlePress(event) {
        setContent(event.target.value);
    }

    return(
        <div>
            {add ? <textarea className="ReviewContent" onChange={handlePress} placeholder="Enter your Review"></textarea>
            : <div className="ReviewContent">{content}</div>}
        </div>
    );
}


export default Content;