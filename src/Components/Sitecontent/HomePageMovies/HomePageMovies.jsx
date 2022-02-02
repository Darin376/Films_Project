import React from "react";
import "./HomePageMoviesStyle.scss";

const HomePageMovies = ({ notSearch }) => {
  return (
    <div className="HomePageMoviesWrapper">
      {!notSearch ?
        <div className="HomePageMoviesContainer">
          <div className="HomePageMoviesImgWrapper">
            <h2> <span>Nothing found...</span> try another name</h2>
            <div className="HomePageMoviesImg"></div>
          </div>
        </div> :
        <div className="HomePageMoviesContainer">
          <h3>The Best Movies Catalog</h3>
          <span>Search for your movie</span>
        </div>}
    </div>
  )
};
export default HomePageMovies;