import React from 'react';


const Header = () => {
    return (
    <header className="header">
        <div className="header__container">
            <div className="header__logo">
                <a className="header__link-logo" href="index.html"><img className="header__logo-svg" src="img/header__logo.svg" alt="Логотип Devias Kit" /><span className="header__name">Devias Kit</span></a>
            </div>
            <span className="header__advertisment">See our PRO version for more design components & coded in React follow this link: <a className="header__link" href="#">https://devias.io/products/devias-kit-pro</a></span>
            <ul className="header__control list-reset">
                <li className="header__control-item"><button className="header__button btn-reset header__button--notifications"></button></li>
                <li className="header__control-item"><button className="header__button btn-reset header__button--exit"></button></li>
            </ul>
        </div>
    </header>
)       
}

export default Header;