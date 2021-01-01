import React, { useState } from 'react';
import './Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from '@material-ui/core';
import { Link } from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon style={{fill: "white"}} />
                <Link to={`/`}>
                <img
                    className="header__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" 
                    alt="" 
                />
                </Link>
            </div>

            <div className="header__input">
                <input 
                value={inputSearch} 
                onChange={e => setInputSearch(e.target.value)} 
                type="text" 
                placeholder="Search"/>

                <Link to={`/search/${inputSearch}`} >
                <SearchIcon className="header__inputButton" />
                </Link>

            </div>

            <div className="header__right">
                <VideoCallIcon className="header__icon" style={{fill: "white"}} />
                <AppsIcon className="header__icon" style={{fill: "white"}} />
                <NotificationsIcon className="header__icon" style={{fill: "white"}} />
                <Avatar
                    alt="Jan Rebek"
                    src="https://media-exp1.licdn.com/dms/image/C5603AQFG2--5uLST5Q/profile-displayphoto-shrink_400_400/0/1532868178509?e=1614816000&v=beta&t=OLJDqpfFwI7RhK8XD9eCTPzD-K7Ledh0ZJdEzj2Ar5g"
                />
            </div>
        </div>
    )
}

export default Header
