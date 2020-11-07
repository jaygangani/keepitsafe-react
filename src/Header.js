import { SiFSecure } from 'react-icons/si';
import { CgProfile } from 'react-icons/cg';
import { React } from "react";

function Header() {

    
    return (
        <>
        <div className="header">
                <h2 id="name">KeepItSafe</h2>
                <span id="logo"><SiFSecure /></span>
                <a id="profile" href="https://www.instagram.com/jay83._" rel='noreferrer' target="_blank"><CgProfile /></a>
        </div>
        </>
    );
}

export default Header;