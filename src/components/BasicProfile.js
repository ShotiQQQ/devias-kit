import React from 'react';

const BasicProfile = () => {
    return (
        <div className="basic">
            <div className="basic__top">
                <h3 className="basic__title">Basic Profile</h3>
                <span className="basic__annotation">The information can be edited from yuor profile page</span>
            </div>
            <form method="POST">
            <div className="basic__main">
                <input className="basic__input" required placeholder="First Name" type="text" id="firstName"></input>
                <input className="basic__input" required placeholder="Last Name" type="text" id="lastName"></input>
                <input className="basic__input" required placeholder="Email" type="email" id="email"></input>
                <input className="basic__input" required placeholder="Telephone" type="tel" id="tel"></input>
                <input className="basic__input" required placeholder="Country" type="text" id="country"></input>
                <input className="basic__input" required placeholder="City" type="text" id="city"></input>
            </div>
            <div className="basic__bottom">
                <button className="basic__btn btn-reset" type="submit">save settings</button>
            </div>
            </form>
        </div>
    )
}

export default BasicProfile;