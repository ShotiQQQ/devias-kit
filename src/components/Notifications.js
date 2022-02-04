import React from 'react';

const Notifications = () => {
    return (
        <div className="notifications">
            <div className="notifications__top">
                <h3 className="notifications__title">Notifications</h3>
                <span className="notifications__annotation">Mange the notifications emailing</span>
            </div>
            <form method="POST">
            <div className="notifications__main">
                <div className="notifications__main-left">
                <h3 className="notifications__title">Notifications</h3>
                    <label><input className="notifications__input" type="checkbox"></input>Email</label>
                    <label><input className="notifications__input" type="checkbox"></input>Push notifications</label>
                    <label><input className="notifications__input" type="checkbox"></input>Text Messages</label>
                    <label><input className="notifications__input" type="checkbox"></input>Phone Calls</label>
                </div>
                <div className="notifications__main-right">
                <h3 className="notifications__title">Messages</h3>
                    <label><input className="notifications__input" type="checkbox"></input>Email</label>
                    <label><input className="notifications__input" type="checkbox"></input>Push notifications</label>
                    <label><input className="notifications__input" type="checkbox"></input>Phone Calls</label>
                </div>
            </div>
            <div className="notifications__bottom">
                <button className="notifications__btn btn-reset" type="submit">save</button>
            </div>
            </form>
        </div>
    )
}

export default Notifications;