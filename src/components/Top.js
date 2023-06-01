import Hero from './Hero';
import SearchBar from './SearchBar';

function Top() {
    return (
        <div className="Top-container">
            <div className="LeftSide">
                <div className="Top">
                    FIND YOUR ESCAPE.
                </div>
                <div className="Description">
                    Learn more about traveling hotspots or post your own review!
                </div>
                <SearchBar />
            </div>
            <Hero />
        </div>
    );
}


export default Top;