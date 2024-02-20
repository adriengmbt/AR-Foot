import React from 'react';
import { Slide } from 'react-reveal';
import { NavbarList } from './NavbarList';



export function NavBar ({ isOpened, toggleNav }) {
    return (
        <nav className={isOpened ? "navbar" : "navbar__close"}>

            <Slide top >
            <div className="navbar__container">
                <div className="navbar__button" onClick={toggleNav}>
                    X
                </div>
                <NavbarList />

            </div>
            </Slide>
            
           

        </nav>
    );
}