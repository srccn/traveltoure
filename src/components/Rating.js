import React from 'react';
import { FaStar } from 'react-icons/fa'

function Rating(props) {

    const {rating, setRating, add} = props;

    function colorIn(key) {
        add && !rating.items.includes(key) && setRating({items: [key]});
    } 


    return(
        <div className="RatingSection">
            <FaStar fill= "blue" size="30px" onClick={()=> colorIn(0)}/>
            <FaStar fill={rating.items.includes(1)
                || rating.items.includes(2)
                || rating.items.includes(3)
                || rating.items.includes(4) ? "blue" : "white"} size="30px" onClick={()=> colorIn(1)}/>
            <FaStar fill={rating.items.includes(2)
                || rating.items.includes(3)
                || rating.items.includes(4) ? "blue" : "white"} size="30px" onClick={()=> colorIn(2)}/>
            <FaStar fill={rating.items.includes(3)
                || rating.items.includes(4) ? "blue" : "white"} size="30px" onClick={()=> colorIn(3)}/>
            <FaStar fill={rating.items.includes(4) ? "blue" : "white"} size="30px" onClick={()=> colorIn(4)}/>
        </div>
    );
}

export default Rating;