import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Customer = () => {
    return (
        <div>
            <Nav />
            <div className="container-fluid col-md-12">
                <div className=" container col-md-10 py-2 mt-4">
                    <h3>Hello. What can we help you with?</h3>
                </div>
                <hr />

                <div className="container col-md-10">
                    <h5>Some things you can do here</h5>
                    <div className="row row-cols-1 row-cols-md-3 py-3 g-4">
                        <div className="col">
                            <div className="card shadow">
                                <div className="row">
                                    <div className="col-md-4">
                                        <img src="./images/a1.png" className="px-2 mt-2" style={{height:"95px"}}/>
                                    </div>
                                    <div className="col-md-8 py-3">
                                        <h5>Your Orders</h5>
                                        Track Packages <br/> Edit or cancel orders
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                            <div className="row">
                                    <div className="col-md-4">
                                    <img src="./images/a2.png" className="px-2 mt-2" style={{height:"95px"}}/>
                                    </div>
                                    <div className="col-md-8 py-3">
                                        <h5>Returns & Refunds</h5>
                                        Return or exchange items <br/> Print return mailing labels
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                            <div className="row">
                                    <div className="col-md-4">
                                    <img src="./images/a3.png" className="px-2 mt-2" style={{height:"95px"}}/>
                                    </div>
                                    <div className="col-md-8 py-3">
                                        <h5>Get Product Help</h5>
                                        Troubleshoot product setup and usage issues
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                            <div className="row">
                                    <div className="col-md-4">
                                    <img src="./images/a8.png" className="px-2 mt-2" style={{height:"95px"}}/>
                                    </div>
                                    <div className="col-md-8 py-3">
                                        <h5>Digital Services and Device Support</h5>
                                        Troubleshoot device issues
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                            <div className="row">
                                    <div className="col-md-4">
                                    <img src="./images/a3.png" className="px-2 mt-2" style={{height:"95px"}}/>
                                    </div>
                                    <div className="col-md-8 py-3">
                                        <h5>Manage Prime</h5>
                                      Learn about Prime benefits <br/> Cancel Prime membership
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                            <div className="row">
                                    <div className="col-md-4">
                                    <img src="./images/a1.png" className="px-2 mt-2" style={{height:"95px"}}/>
                                    </div>
                                    <div className="col-md-8 py-3">
                                        <h5>Payments & Gift Cards</h5>
                                        Add or edit payment methods View, reload gift card balance
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                            <div className="row">
                                    <div className="col-md-4">
                                    <img src="./images/a1.png" className="px-2 mt-2" style={{height:"95px"}}/>
                                    </div>
                                    <div className="col-md-8 py-3">
                                        <h5>Your Account</h5>
                                       Manage your account preferences
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                            <div className="row">
                                    <div className="col-md-4">
                                        <img src="./images/a8.png" className="px-2 mt-2" style={{height:"95px"}}/>
                                    </div>
                                    <div className="col-md-8 py-3">
                                        <h5>Amazon and COVID-19</h5>
                                        FAQs about the impact on ordering
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow">
                            <div className="row">
                                    <div className="col-md-4">
                                    <img src="./images/a3.png" className="px-2 mt-2" style={{height:"95px"}}/>
                                    </div>
                                    <div className="col-md-8 py-3">
                                        <h5>Safe Online Shopping</h5>
                                        Learn how to protect your account
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <hr />
                    <div className="container mt-4 mb-4">
                        <h6><b>Search the help library   Type something like, "question about a charge"</b></h6>
                        <form>
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                        </form>
                    </div>
                </div>
                <hr />
            </div>
            <Footer />
        </div>
    )
}

export default Customer
