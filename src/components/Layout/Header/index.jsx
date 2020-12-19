import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './header.scss';

const Header = () => {
    return (
        <header id="header">
            <div className="banner">
                <NavLink to="/">
                    <div className="site-name">
                        <span>Pacôme</span>
                        <span>Gabrillagues</span>
                    </div>
                </NavLink>
            </div>
            <nav>
                <ul id="nav" className="nav">
                    <li><NavLink to="/motion" activeClassName="active">Motion</NavLink></li>
                    <li><NavLink to="/compo" activeClassName="active">Compo</NavLink></li>
                    <li><NavLink to="/stereo" activeClassName="active">Stereo</NavLink></li>
                    <li><NavLink to="/clip" activeClassName="active">Clip</NavLink></li>
                    <li><Link to="/?#about">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
