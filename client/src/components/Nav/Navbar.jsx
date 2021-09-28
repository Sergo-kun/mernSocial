import React from 'react';

const Navbar = (props) => {
    return (
        <nav>
            <div className="nav-wrapper blue-grey darken-1">
                <a href="#" className="brand-logo">Hi-вет</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="/">Реестрация</a></li>
                    <li><a href="/">Войти</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;