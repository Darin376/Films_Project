import React from "react";
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import "./HeaderStyle.scss";
import { addedMovies } from "../../Redux/actions";
import { useSelector } from "react-redux";
import axios from "axios";

export const Header = () => {
    const [inputText, setInputText] = useState('');
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const pages = useSelector((state) => {
        const { MoviesReducer} = state;
        return  MoviesReducer.pages
      });
    const fetchData = (value) => {
        axios
            .get(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&s=${value}&page=${pages}`)
            .then(res => {
                dispatch(addedMovies(res.data))
            })    
    }


    useEffect(() => {
        fetchData(search)
    }, [search,pages])

    return (
        <div>
            <div className="headerLeft">
                <div className="headerSearchContainer">
                    <input className="headerInput"
                        placeholder="Search Movies"
                        type='text'
                        value={inputText}
                        onChange={((e) => setInputText(e.target.value))}
                    />
                </div>
                <div>
                    <button onClick={() => {
                        setSearch(inputText)
                    }}>
                        Поиск
                    </button>
                </div>
            </div>
        </div>
    );
};