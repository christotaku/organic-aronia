import React from 'react'

export default function Footer(props) {

    const { t } = props

    return (
        <footer className="footer bg-light ">
    <div className="container">
      <div className="row pt-5 pb-5">
        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
          <ul className="list-inline mb-2">
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#">Contacts</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#">Gallery</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#">Organic Farming</a>
            </li>
            <li className="list-inline-item">⋅</li>
            <li className="list-inline-item">
              <a href="#">Aronia's Benefits</a>
            </li>
          </ul>
          <p className="text-muted small mb-4 mb-lg-0">© Organic Aronia LTD, Bulgaria 2019. All Rights Reserved.</p>
        </div>
        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
          <ul className="list-inline mb-0">
            <li className="list-inline-item mr-3">
              <a href="#">
                <i className="fab fa-facebook fa-2x fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item mr-3">
              <a href="#">
                <i className="fab fa-twitter-square fa-2x fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-instagram fa-2x fa-fw"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#">
                <i className="fab fa-linkedin fa-2x fa-fw"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
    )
}
