import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import './Regi.css'

const Regi = () => {
    return (
        <div>
            <Nav />

            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#"><h6><b>registry  <br /> & gifting</b></h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark mt-2" href="#"><h6>Wedding Registry</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark mt-2" href="#"><h6>Baby Registry</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark mt-2" href="#"><h6>Birthday Gift List</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark mt-2" href="#"><h6>Custom Gift List</h6></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark mt-2" href="#"><h6>Help</h6></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="container gif">
                <h2>Registry & Gifting</h2>
                <br />
                <h5>Whether you’re celebrating a wedding, a baby, a birthday, or other memorable milestone,<br />
                    our registries and gift lists will help you and your guests find the perfect gifts.</h5>
            </div>

            <div className="container list shadow">
                <h6>Find a registry or gift list</h6>
                <form>
                    <div className="row py-2">
                        <div className="col-md-3">
                            <label htmlFor="rname">Registrant name</label>
                            <input type="text" className="form-control fname" id="firstname" name="fname" placeholder="Search by Registrant Name" />
                        </div>
                        <div className="col-md-3 mb-3">
                            <br />
                            <input list="registry" className="form-control regi" name="registry" placeholder="Select a registry or gift type" />
                            <datalist id="registry">
                                <option value="Wedding Registry" />
                                <option value="Baby Registry" />
                                <option value="Birthday Gift List" />
                                <option value="Custom Gift List" />
                            </datalist>
                        </div>
                        <div className="col-md-2">
                            <br/>
                            <button className="form-control btn-se" >Search</button>
                        </div>
                    </div>
                </form>

            </div>

            <div className="container py-5">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card">
                            <img src="./images/i1.jpeg" class="card-img-top" alt="..." style={{ height: "100%" }} />
                            <div class="card-body" style={{ backgroundColor: "#eee", textAlign: "center" }}>
                                <h5 class="card-title">Wedding Registry</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="./images/i2.jpg" class="card-img-top" alt="..." />
                            <div class="card-body" style={{ backgroundColor: "#eee", textAlign: "center" }}>
                                <h5 class="card-title">Baby Registry</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="./images/i3.jpeg" class="card-img-top" alt="..." />
                            <div class="card-body" style={{ backgroundColor: "#eee", textAlign: "center" }}>
                                <h5 class="card-title">Birthday Gift List</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="./images/i5.jpeg" class="card-img-top" alt="..." />
                            <div class="card-body" style={{ backgroundColor: "#eee", textAlign: "center" }}>
                                <h5 class="card-title">Custom Gift List</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <Footer />
        </div>
    )
}

export default Regi
