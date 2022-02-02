import React from "react";
import Spinner from "../../../Spinner/Spinner";
import "./SitecontentMoviesStyle.scss";

const SitecontentMovies = ({ moviesInfo }) => {
    if (!moviesInfo) return <Spinner />
    return (
        <div className="productsWrapper">
            <div className='productsWrapperSpan'>
                {moviesInfo.Title}
            </div>
            <div className='productsImgWrapper'>
                <img className='productsImg' src={moviesInfo.Poster === 'N/A' ? 'https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png' : moviesInfo.Poster} />
            </div>
            <div>
                Type: {moviesInfo.Type}
            </div>
            <div>
                Year: {moviesInfo.Year}
            </div>
            <div>
                imdbID: {moviesInfo.imdbID}
            </div>
        </div>
    );
};
export default SitecontentMovies;