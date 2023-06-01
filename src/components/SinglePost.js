import React from 'react';


function SinglePost() {
    return (
        <div className="OutsideBorder">
            <div className="PostWrapper">
                <div className="UpperHalf">
                    <div className="ProfileIcon">
                        <img className="ProfileImage" src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png" alt="profile-icon"></img>
                    </div>
                    <div className="NameLocationContainer">
                        <div className="UserName">
                            Anonymous User
                        </div>
                        <div className="Location">
                            Boston, MA
                        </div>
                    </div>
                </div>
                <div className="Rating">
                </div>
            </div>
        </div>
    );
}

export default SinglePost;