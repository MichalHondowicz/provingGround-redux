import React from 'react';
import '../App.css';

function FirstComponent({title = "Title", content = "Content"}) {
    return (
        <div>
            <dialog open>
                <h1>{title}</h1>
                <p>{content}</p>
            </dialog>
        </div>
    )
}

export default FirstComponent;