import React from 'react'

import './Cookie.css'

export const Cookie = (props) => {

    return (
        <>
            <nav style={{backgroundColor: props.backgroundColor}}>
                <div className="cookie-container">
                    <p className="cookie-text"style={{color: props.textColor}}>{props.text}</p>
                    <i className="icon-container">
                        <img src="./icons/close-icon.svg"></img>
                    </i>
                </div>
            </nav>

        </>
    )

} 