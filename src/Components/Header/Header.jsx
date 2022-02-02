  import { searchMoviess } from "../../Redux/actions";
import Spinner from "../../Spinner/Spinner";
import React from "react";
import { useSelector } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import "./HeaderStyle.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import {userLogin} from '../../Redux/user/userActions';
import {userLogout} from '../../Redux/user/userActions';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { useAuthState } from "react-firebase-hooks/auth";
 
export const Header = () => {

    const auth = firebase.auth();
    const [user, loading, error] = useAuthState(auth);
    const [inputText, setInputText] = useState('');
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const pages = useSelector((state) => {
        const { MoviesReducer } = state;
        return MoviesReducer.pages
    });
   
    useEffect(() => {
        dispatch(searchMoviess(search, pages))
    }, [search, pages])
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userLogin());
      };
      const handleSubmitOut = (event) => {
        event.preventDefault();
        dispatch(userLogout());
      };

      const googleUser = (loading?<Spinner/>:
        <div>
            {user? (
                <div className="UserAuth">
                     <div className="UserAuthName">
                     <img src={user.photoURL} alt="imgLogin" />
                     <p>{user.displayName} </p>
                     </div>
                    <div>
                    <LogoutIcon  className="headerLogout"   onClick={handleSubmitOut}/>
                    </div>
                </div>
            ) : (
                <button className='UserGoogleButton'  onClick={handleSubmit} >
                  Вход Google
                </button>
            )}
        </div>
    )

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
                        <Search style={{ fontSize: '30', cursor: 'pointer', paddingLeft: 8 }}
                            onClick={() => { setSearch(inputText) }} />
                    </div>
                    <div className="headerCenter">
                        <div className="headerRight">
                            {googleUser}
                            <div className="headerMenuItem">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};