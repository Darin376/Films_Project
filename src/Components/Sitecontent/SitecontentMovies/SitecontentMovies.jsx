import React from "react";
import Spinner from "../../../Spinner/Spinner";
import "./SitecontentMoviesStyle.scss";

const SitecontentMovies = ({ moviesInfo }) => {
    if (!moviesInfo) return <Spinner />
    return (
        <div >
            <div>
                {moviesInfo.Title}
            </div>
            <div>
                <img src={moviesInfo.Poster} />
            </div>
            <div>
                {moviesInfo.Type}
            </div>
            <div>
                {moviesInfo.Year}
            </div>
            <div>
                {moviesInfo.imdbID}
            </div>
        </div>
    );
};
export default SitecontentMovies;