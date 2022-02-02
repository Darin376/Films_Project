import React from "react";
import SitecontentMovies from "../SitecontentMovies/SitecontentMovies";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPages } from "../../../Redux/actions";
import { createPages } from "../../../Data/createPages";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import "./MoviePagesStyle.scss";
import Spinner from "../../../Spinner/Spinner";

const MoviePages = ({ AllMovies }) => {
    const [pages, setPages] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(addPages(pages))
    }, [pages])

    useEffect(() => {
        setPages(1)
    }, [AllMovies.search])
    
    let quantityPages = [];
    let pageCount = !AllMovies.movies.totalResults ? null : Math.ceil(AllMovies.movies.totalResults / 10);
    createPages(quantityPages, pageCount, pages);

    if (!AllMovies.movies.Search.length) return <Spinner />
    return (
        <div className="SiteContentcontainer">
            <div>
                <h3>You search for: {AllMovies.search} {AllMovies.movies.totalResults}</h3>
                <div className="SiteContentMoviesWrapper">
                    {AllMovies.movies.Search.map((item, index) => (
                        <div key={index} className="SiteContentMovies">
                            <SitecontentMovies moviesInfo={item} />
                        </div>
                    ))}
                </div>
                <div className="CategoriesPagesWrapper">
                    <ArrowBackIosNewIcon style={{ cursor: 'pointer', paddingRight: 10 }} onClick={() => { setPages(quantityPages[0]) }} />
                    {quantityPages.map((p, index) => {
                        return <div key={index} >
                            <div className={pages === p ? "CategoriesPagesActiv" : "CategoriesPages"} onClick={() => { setPages(p) }}>{p}</div>
                        </div>
                    })}
                    <ArrowForwardIosIcon style={{ cursor: 'pointer' }} onClick={() => { setPages(quantityPages[quantityPages.length - 1]) }} />
                </div>
            </div>
        </div>
    );
};
export default MoviePages;