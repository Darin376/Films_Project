import React from "react";
import { searchMoviess } from "../../Redux/actions";
import { useSelector } from 'react-redux';
import { Search } from "@material-ui/icons";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import "./HeaderStyle.scss";
import { UserAuth } from "../UserAuth/UserAuth";

export const Header = () => {
    const [inputText, setInputText] = useState('');
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const pages = useSelector((state) => {
        const { MoviesReducer } = state;
        return MoviesReducer.pages
    });

    const sendText = ()=> {
        let textSearch = inputText.trim()
        if(!textSearch) {
            alert('Введите  Название для поиска')
        } else {
            setSearch(inputText)  
        }
    }

    useEffect(() => {
        dispatch(searchMoviess(search, pages))
    }, [search, pages])
     
    return (
        <div className="headerContainer">
            <div className="headerWrapper">
                <div className="headerLeft">
                    <div className="headerLogoWrapper" onClick={() => { setSearch('') }} >
                        <h3 className="headerLogo">The Best <span style={{ color: 'green' }} >Movies</span> Catalog</h3>
                    </div>
                </div>
                <div className="headerRightWrapper">
                    <div className="headerSearchContainer">
                        <input className="headerInput"
                            placeholder="Search Movies"
                            type='text'
                            value={inputText}
                            onChange={((e) => setInputText(e.target.value))}
                        />
                        <Search style={{ fontSize: '30', cursor: 'pointer', paddingLeft: 8 }} onClick={sendText}/>
                    </div>
                    <div className="headerCenter">
                        <div className="headerRight">
                            <UserAuth />
                            <div className="headerMenuItem">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};