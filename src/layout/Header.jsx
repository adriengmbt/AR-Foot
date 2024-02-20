import { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import Logo from "../../public/Img/icon/logo.png";
import Menu from "../../public/Img/icon/menu.png";

import { Slide } from 'react-reveal';
import { NavbarList } from "../components/NavbarList";


export function Header() {
    const [isOpened, setIsOpened] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024); 

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024); 
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleNav = () => {
        setIsOpened(!isOpened);
    };

    console.log("header"+ isOpened);
    return (
        <header className="header">
            <div className="header__logo">
                <img className="header__img" src={Logo} alt="Logo" />
                <h1 className="header__title"> AR Football</h1>
            </div>

            {isDesktop ? (
                < NavbarList />
            ) : (
                <div className="header__menu">
                    <img className="header__menu-img" src={Menu} alt="Menu" onClick={toggleNav} />
                    {isOpened && <NavBar isOpened={isOpened} toggleNav={toggleNav} />}
                </div>
            )}
        </header>
    );
    }