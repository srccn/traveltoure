import React from 'react';
import Header from './components/Header';


function About() {
    return (
        <div>
            <Header />
            <div className="About">
                About This Website
            </div>
            <div className="Summary">
                <p className="SummaryText">
                    I created this website to provide a platform for people to be able to find their
                    next travel destination! Users can write their own reviews of cities they have
                    visited by giving it a rating and writing up their experiences. From these reviews,
                    other users can more accurately get a sense of other peoples' thoughts about that
                    specific location. Additionally, users can also login to see their past posts under
                    the "My Posts" section where they can find all of their posts from all the different
                    locations that they have posted in.
                </p>
            </div>
        </div>
    );
}

export default About;