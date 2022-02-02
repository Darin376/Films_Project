import React from "react";
import "./HomePageMoviesStyle.scss";

const HomePageMovies = ({ notSearch }) => {

  return (
    <div className="HomePageMoviesWrapper">
      {!notSearch ?
        <div className="HomePageMoviesWrapperHome">

          <div className="HomePageMoviesImgWrapper">
            <h2> <span>Nothing found...</span> try another name</h2>
            <img src="https://thumbs.dreamstime.com/z/no-found-symbol-unsuccessful-search-vecotr-upset-magnifying-glass-cute-not-zoom-icon-suitable-results-oops-page-failure-122786031.jpg" />
          </div>
        </div> :
        <div className="HomePageMoviesWrapperHome">
          <h3>The Best Movies Catalog</h3>
          <span>Search for your movie</span>
        </div>}
    </div>
  )
};
export default HomePageMovies;
