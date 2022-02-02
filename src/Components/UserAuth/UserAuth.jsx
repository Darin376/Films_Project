import React from "react";
import "./UserAuthStyle.scss";
import { useDispatch } from 'react-redux';
import Spinner from "../../Spinner/Spinner";
import LogoutIcon from '@mui/icons-material/Logout';
import { userLogin } from '../../Redux/user/userActions';
import { userLogout } from '../../Redux/user/userActions';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { useAuthState } from "react-firebase-hooks/auth";

export const UserAuth = () => {
    const auth = firebase.auth();
    const [user, loading, error] = useAuthState(auth);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userLogin());
    };
    const handleSubmitOut = (event) => {
        event.preventDefault();
        dispatch(userLogout());
    };
    return (loading ? <Spinner /> :
        <div>
            {user ? (
                <div className="UserAuth">
                    <div className="UserAuthName">
                        <img src={user.photoURL} alt="imgLogin" />
                        <p>{user.displayName} </p>
                    </div>
                    <div>
                        <LogoutIcon className="headerLogout" onClick={handleSubmitOut} />
                    </div>
                </div>
            ) : (
                <button className='UserGoogleButton' onClick={handleSubmit} >
                    log in Google
                </button>
            )}
        </div>
    )
}