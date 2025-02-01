import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation-container">
                <div className="navigation">
                    <div className="logo-container">
                        <div className="logo">Holo</div>
                    </div>
                    <div className="links-container">
                        <div className="links">
                            <Link to="#" className="link">Home</Link>
                            <Link to="#" className="link">Chat</Link>
                            <Link to="#" className="link">Contact</Link>
                            <Link to="#" className="link">Page</Link>
                        </div>
                    </div>
                    <div className="btn-container">
                        <div className="btn">
                            <button className="btn_primary"><div className="span">Login</div></button>
                            <button className="btn_secondary">Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation