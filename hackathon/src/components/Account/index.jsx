import React, { Fragment } from 'react'

const Account = () => {
    return (
        <Fragment>
            <div className="account-container">
                <div className="account">
                    <div className="left">
                        <div className="image-container">
                            <img src="./images/lebron.png" alt="Profile" />
                        </div>
                        <div className="desc">
                            <div className="title">
                                Yujaw Manandhar
                            </div>
                            <div className="cont">
                                <input type="text" name='age' placeholder='Age' />
                                <input type="text" name='type' placeholder='Pet Type' />
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="post-container">
                            <div className="post">
                                <div className="image-container">
                                    <img src="./images/rajiv.png" alt="post-image" />
                                </div>
                                <div className="captions">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, ut?
                                </div>
                            </div>
                            <div className="post">
                                <div className="image-container">
                                    <img src="./images/rajiv.png" alt="post-image" />
                                </div>
                                <div className="captions">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, ut?
                                </div>
                            </div>
                            <div className="post">
                                <div className="image-container">
                                    <img src="./images/rajiv.png" alt="post-image" />
                                </div>
                                <div className="captions">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, ut?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Account