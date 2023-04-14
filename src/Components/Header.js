import React from 'react';
import '../Styles/Header.css';
import {Link} from "react-router-dom";


const Header = (props) => {

    return (
        <div>
            <div id="box">
                <h2>Twitter</h2>
                <p>{props.profileName}</p>
                <Link to="/Trending">Trending</Link>
                <p>3/19/2023</p>
            </div>
        </div>
    )
}

export default Header;