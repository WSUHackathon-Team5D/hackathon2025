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
                            <Link to={'/login'} className="btn_primary">Login</Link>
                            <Link to={'/signup'} className="btn_secondary">Signup</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation