import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <Fragment>
            <section className="home">
                <div className="left">
                    <div className="image-container">
                        <div className="image">
                            <img src="./images/faceoff.png" alt="DogCat" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="title-container">
                        <div className="title">
                            PetBook
                        </div>
                    </div>
                    <div className="desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore odit, cupiditate quisquam obcaecati natus voluptas nam expedita, possimus laborum et ratione nobis nostrum! Amet laboriosam officia illum dolorem dignissimos, odit nihil, ut quis ad deleniti quo accusamus veniam quibusdam in, id obcaecati neque aliquid et nesciunt? Voluptas eum enim quam quae libero ratione asperiores nihil consequatur quaerat qui, nobis aut pariatur debitis similique reiciendis possimus nesciunt nisi et maxime. Tempora asperiores in, alias dicta reiciendis voluptas perspiciatis quo nesciunt nobis eveniet eius molestias nostrum, impedit cupiditate. Nesciunt sed deserunt enim. Voluptatem ullam rerum mollitia. Consectetur obcaecati magnam dignissimos minus repudiandae?
                    </div>
                    <div className="btn-container">
                        <Link to={'/login'} className="btn">Login</Link>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home