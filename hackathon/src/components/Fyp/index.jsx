import React, { Fragment, useState } from 'react'


const Fyp = () => {
    const [counter, setCounter] = useState(0)
    const [counter1, setCounter1] = useState(0)

    return (
        <Fragment>
            <div className="fyp-container">
                <div className="fyp">
                    <div className="left"></div>
                    <div className="right">
                        <div className="post-container">
                            <div className="post">
                                <div className="image-container">
                                    <img src="./images/cat-1.jpg" alt="post-images" />
                                </div>
                                <div className="controls">
                                    <button className="down" onClick={() => setCounter(counter - 1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                        </svg>
                                    </button>
                                    <div className="cont">
                                        {counter}
                                    </div>
                                    <button className="up" onClick={() => setCounter(counter + 1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="post">
                                <div className="image-container">
                                    <img src="./images/cat-2.jpg" alt="post-images" />
                                </div>
                                <div className="controls">
                                    <button className="down" onClick={() => setCounter1(counter1 - 1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                        </svg>
                                    </button>
                                    <div className="cont">
                                        {counter1}
                                    </div>
                                    <button className="up" onClick={() => setCounter1(counter1 + 1)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Fyp