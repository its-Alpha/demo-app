import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'


const Nav = () => {
    return (
        <div>
            <div className="container-fluid top-nav">
                <div className="row align-items-center">
                    <div className="col-md-3 d-flex">
                        <Link className="navbar-brand" to="/">
                            <img src="./images/logo.png" alt="" className="img-fluid" style={{ width: "100px"}} />
                        </Link>

                        <div className="d-flex align-items-center">
                            <div><i className='bx bxs-location-plus text-white custom-link'></i></div>
                            <div>
                                <p style={{ color: '#CCCCCC', fontSize: '12px', marginBottom: '-5px' }}>Deliver to</p>
                                <span style={{ color: 'white', fontWeight: 'bold' }}>Nepal</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit"><i className='bx bx-search-alt-2' ></i></button>
                        </form>
                    </div>
                    <div className="col-md-2">
                        <ul className="d-flex justify-content-end">
                            <li className="list-unstyled"><Link to="/Signin" className="text-decoration-none px-2 custom-link"><i className='bx bxs-user'></i></Link></li>
                            <li className="list-unstyled"><Link to="/Signup" className="text-decoration-none px-2 custom-link"><i className='bx bxs-user-plus'></i></Link></li>
                            <li className="list-unstyled"><Link to="#" className="text-decoration-none px-2 custom-link"><i className='bx bx-cart' ></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light custom-nav">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Deal">Deals</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Custom">Customer Service</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Giftscard">Gift Cards</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Register">Registry</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/Sell">Sell</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
