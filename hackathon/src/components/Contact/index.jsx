import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <Fragment>
            <section className="contact">
                <div className="left">
                    <div className="title-container">
                        <div className="title">
                            Team5D
                        </div>
                    </div>
                    <div className="desc">
                    Team 5D is a passionate and dedicated group working tirelessly to develop PetBook, an innovative app designed for pet owners. With a shared love for animals and technology, the team is enthusiastically putting in long hours to create a platform that connects pet lovers, helps manage pet care, and builds a supportive community. Their hard work, creativity, and commitment drive them to overcome challenges, ensuring that PetBook becomes the ultimate go-to app for pet owners everywhere.
                    </div>
                    <div className="btn-container">
                        <Link to={''} className="btn">Join Us</Link>
                    </div>
                    <div className="social-links">
                <a href="https://github.com/WSUHackathon-Team5D" target="_blank" rel="noopener noreferrer">
              < span className="icon">🔗</span> Our Github</a>
                </div>
                </div>
                <div className="right">
                    <div className="image-container">
                        <div className="image">
                            <img src="./images/dc_logo_final.png" alt="DogCat" />
                        </div>
                    </div>
                </div>
                
            </section>
        </Fragment>
    )
}

export default Contact