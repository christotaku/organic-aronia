import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo-long.jpg'
//  import Logo from '../logo.svg'

export default function Navbar(props) {

    const { t, i18n } = props

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top shadow-sm p-3 mb-5">
            <div className="container">

                <Link className="navbar-brand" to='/'> 
                    <img src={logo} alt='Organic Aronia LTD, Bulgaria' className='navbar-logo' />
                </Link>

                <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarResponsive" 
                aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    
                    <ul className="navbar-nav ml-auto text-uppercase font-weight-light">
                        <li className="nav-item active pr-3 pl-3">
                            <Link to='/' className="nav-link">
                                { t('navbar.home') }
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>

                        <li className="nav-item pr-3 pl-3">
                            <Link to='/products' className="nav-link"> 
                                { t('navbar.products') }
                            </Link>
                        </li>
                        <li className="nav-item pr-3 pl-3">
                            <Link to='/about' className="nav-link"> 
                                { t('navbar.about') }
                            </Link>
                        </li>
                        <li className="nav-item pr-3 pl-3">
                            <Link to='/contacts' className="nav-link"> 
                                { t('navbar.contacts') }
                            </Link>
                        </li>
                        <li className="nav-item pr-3 pl-3 dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-globe-europe"></i>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <button className="dropdown-item cursor" id="switch-bg" onClick={() => i18n.changeLanguage('bg')}>
                                    Bulgarian
                                </button>
                                <button className="dropdown-item cursor" id="switch-en" onClick={() => i18n.changeLanguage('en')}>
                                    English
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
            </nav>

    )
}

