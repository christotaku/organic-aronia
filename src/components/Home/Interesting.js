import React from 'react'
import { Link } from 'react-router-dom'

export default function Interesting(props) {

    const { t } = props

    return (
        <section className="page-section bg-white">

        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-lg-4 interesting-image">
                {/* CHECK App.css TO Change image */}
            </div>
            <div className="col-lg-8">
            <div className="featured-text text-center pl-3 pr-3 text-md-left pl-md-5 pr-md-5">
                <h4 className='mt-4'>{ t("home.interesting.heading") }</h4>
                <p className="mb-0 mt-5">
                    { t("home.interesting.p-one") }
                </p>
                    <hr></hr>
                <p>
                    { t("home.interesting.p-two") }
                </p>
                <hr></hr>
                <p className='mt-4 text-center'>
                    <Link to='/products'>
                        <i className="fas fa-star"></i> <strong> { t("home.interesting.button")} </strong> <i className="fas fa-star"></i>
                    </Link>
                </p>
            </div>
            </div>
        </div>

        </section>
    )
}
