import React from 'react';

const ProfileCard = () => {
    return (
        <div className="profile__card">
            <div className="profile__card-top">
                <div className="profile__card-top--left">
                    <h2 className="profile__card-name">Adrian Stefan</h2>
                    <span className="profile__card-adress">Rm. Valcea, Romania</span>
                    <br></br>
                    <span className="profile__card-time">4:32PM (GMT-4)</span>
                </div>
                <div className="profile__card-top--right">
                    <img className="profile__card-photo" src="img/main__avatar.png"></img>
                </div>
            </div>
            <div className="profile__card-bottom">
                <button className="profile__card-button profile__card-button--download btn-reset">upload picture</button>
                <button className="profile__card-button btn-reset">remove picture</button>
            </div>
        </div>
    )
}

export default ProfileCard;