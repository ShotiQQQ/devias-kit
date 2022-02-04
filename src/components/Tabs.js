import React from 'react';

const Tabs = () => {
    return (
    <ul className="content__tabs list-reset">
        <li className="content__tabs-item content__tabs-item--active">
            <button className="content__item-btn btn-reset">Profile</button>
        </li>
        <li className="content__tabs-item">
            <button className="content__item-btn btn-reset">Account</button>
        </li>
        <li className="content__tabs-item">
            <button className="content__item-btn btn-reset">Price Plans</button>
        </li>
        <li className="content__tabs-burger content__tabs-burger--active">
            <button className="burger btn-reset">
                <div className="burger__line burger__line--1"></div>
                <div className="burger__line burger__line--2"></div>
                <div className="burger__line burger__line--3"></div>
            </button>
        </li>
    </ul>
)       
}

export default Tabs;