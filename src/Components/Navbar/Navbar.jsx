import React, { useState, useRef } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const menuRef = useRef();

    const openMenu = () => setIsMobileMenuOpen(true);
    const closeMenu = () => setIsMobileMenuOpen(false);

    return (
        <div className="navbar">
        <img className="navbar-logo-img" src={logo} alt="Logo" />
        <img src={menu_open} onClick={openMenu} alt="Open menu" className='nav-mob-open' />
        
        <ul 
            ref={menuRef} 
            className={`nav-menu ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}
        >
            <img src={menu_close} onClick={closeMenu} alt="Close menu" className="nav-mob-close" />
            
            {['home', 'about', 'services', 'work', 'contact'].map((item) => (
            <li key={item}>
                <AnchorLink className='anchor-link' offset={50} href={`#${item}`}>
                <p onClick={() => { setMenu(item); closeMenu(); }}>
                    {item === 'home' ? 'Home' :
                    item === 'about' ? 'About Me' :
                    item === 'services' ? 'My Skill Sets' :
                    item === 'work' ? 'Portfolio' : 'Contact'}
                </p>
                </AnchorLink>
                {menu === item ? <img src={underline} alt='' /> : null}
            </li>
            ))}
        </ul>

        <div className='nav-connect'>
            <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
        </div>
        </div>
    );
};

export default Navbar;
