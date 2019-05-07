import React from 'react';
import Avatar from "./Avatar";

function ContactItem({login,name, department}) {

    return (
        <li className="item">
            <Avatar login={login}/>
            <div className="content">
                <h4 className="header">{name}</h4>
                <div className="description">{department}</div>
            </div>
        </li>
    )
}

export default ContactItem;