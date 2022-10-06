import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile from '../assests/images/profile.jpg'


const UserInfo = () => {
    
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("userName", "");
        navigate("/login");
    }

    return (
        <div className='login-wrapper'>
            <div className="login-container">
                <div className="login-user-info">
                    <div className='image-container'>
                        <img src={profile} alt="" className="user-avatar" />
                    </div>
                    <div>
                        <b>{localStorage.getItem("userName")}</b>
                    </div>
                    <div>
                        <button className='btn btn-danger' onClick={logout}>
                            Log out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;