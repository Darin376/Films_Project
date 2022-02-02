import React from "react";
import { useSelector } from "react-redux";
import "./SitecontentStyle.scss";
import HomePageMovies from "./HomePageMovies/HomePageMovies";
import MoviePages from "./MoviePages/MoviePages";
import Spinner from "../../Spinner/Spinner";


const Sitecontent = () => {
  const AllMovies = useSelector((state) => {
    const { MoviesReducer } = state;
    return MoviesReducer
  });
  let notSearch = AllMovies.movies.Response == 'False' ? false : true;
  
  if (!AllMovies) return <Spinner />
  return (
    <div className='MuviWrapper'>
      {!AllMovies.movies.Search ? <HomePageMovies notSearch={notSearch} /> : <MoviePages AllMovies={AllMovies} />}
    </div>
  );
};
export default Sitecontent;