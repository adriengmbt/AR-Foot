import React from 'react';
import { Fade } from "react-awesome-reveal";
import { NavbarList } from './NavbarList';



export function NavBar ({ isOpened, toggleNav }) {
    return (
        <nav className={isOpened ? "navbar" : "navbar__close"}>

            <Fade top >
            <div className="navbar__container">
                <div className="navbar__button" onClick={toggleNav}>
                    X
                </div>
                <NavbarList />

            </div>
            </Fade>
            
           

        </nav>
    );
}