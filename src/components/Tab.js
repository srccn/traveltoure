import React from 'react';
import { useState } from 'react';


function Tab() {
    const [leftSelect, setLeftSelect] = useState(true);

    function changeState() {
        if (leftSelect) {
            document.getElementsByClassName("LeftTabItem")[0].style.background = "lightgrey"
            document.getElementsByClassName("RightTabItem")[0].style.background = "#7796CB";
            setLeftSelect(false);
        }
        else {
            document.getElementsByClassName("LeftTabItem")[0].style.background = "#7796CB"
            document.getElementsByClassName("RightTabItem")[0].style.background = "lightgrey";
            setLeftSelect(true);
        }
    }

    return (
        <div className="TabWrapper">
            <div className="LeftTabItem" onClick={() => changeState()}>
                User Reviews
            </div>
            <div className="RightTabItem" onClick={() => changeState()}>
                Places of Interest
            </div>
        </div>
    )
}

export default Tab;