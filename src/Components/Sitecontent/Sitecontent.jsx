import React from "react";
import { useSelector } from "react-redux";
import "./SitecontentStyle.scss";
import HomePageMovies from "./HomePageMovies/HomePageMovies";
import MoviePages from "./MoviePages/MoviePages";


const Sitecontent = () => {
  const AllMovies = useSelector((state) => {
    const { MoviesReducer } = state;
    return MoviesReducer.movies
  });
  
  return (
    <div className='MuviWrapper'>
      {!AllMovies.Search ? <HomePageMovies/> : <MoviePages AllMovies ={AllMovies}/>}
    </div>
  );
};
export default Sitecontent;