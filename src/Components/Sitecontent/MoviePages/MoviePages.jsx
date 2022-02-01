import React from "react";
import SitecontentMovies from "../SitecontentMovies/SitecontentMovies";
import { useState, useEffect } from 'react';
import "./MoviePagesStyle.scss";
import { useDispatch } from 'react-redux';
import { addPages } from "../../../Redux/actions";
import { createPages } from "../../../Data/createPages";

const MoviePages = ({ AllMovies }) => {
    const [pages, setPages] = useState(1);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(addPages(pages))
    }, [pages])

    let quantityPages = [];
    let pageCount = !AllMovies.totalResults ? null : Math.ceil(AllMovies.totalResults / AllMovies.Search.length);
    createPages(quantityPages, pageCount, pages);


    return (
        <div className="SiteContentcontainer">
            <div>
                {AllMovies.Search.map((item, index) => (
                    <div key={index}>
                        <SitecontentMovies moviesInfo={item} />
                    </div>
                ))}
            </div>
            <div className="CategoriesPagesWrapper">
                <span onClick={() => { setPages(quantityPages[0]) }}>влево</span>
                {quantityPages.map((p, index) => {
                    return <div key={index} >
                        <span className={pages === p ? "CategoriesPagesActiv" : "CategoriesPages"} onClick={() => { setPages(p) }}>{p}</span>
                    </div>
                })}
                <span onClick={() => { setPages(quantityPages[quantityPages.length - 1]) }}>вправо</span>
            </div>
        </div>
    );
};
export default MoviePages;