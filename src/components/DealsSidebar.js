import React from 'react'
import { Link } from 'react-router-dom'


const DealsSidebar = () => {
    return (
        <>
            <div className="col-md-2 p-2 shadow-lg" style={{ backgroundColor: "#f5f5f5" }}>
                <br />
                <h6>Categories</h6>
                <form>
                    <div className="from-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Mobile</label>
                    </div>
                    <div className="from-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Computers</label>
                    </div>
                    <div className="from-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Baby</label>
                    </div>
                    <div className="from-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Beauty</label>
                    </div>
                    <div className="from-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Books</label>
                    </div>
                    <div className="from-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Camera & Photo</label>
                    </div>
                    <Link className="text-decoration-none" to="#">See More Categories</Link>
                </form>
                <br />

                <h6>Deal Type</h6>
                <Link className="text-decoration-none" to="#">Deals of the Day</Link> <br />
                <Link className="text-decoration-none" to="#">Lightning Deals</Link> <br />
                <Link className="text-decoration-none" to="#">Saving & Sales</Link> <br />
                <Link className="text-decoration-none" to="#">Prime Early Access Deals</Link> <br />
                <br />

                <h6>Availability</h6>
                <form>
                    <div className="from-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Active</label>
                    </div>
                    <div className="from-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Upcoming</label>
                    </div>
                    <div className="from-check">
                        <input className="form-check-input" type="checkbox" value="" />
                        <label className="form-check-label">Missed</label>
                    </div>
                    <br />
                </form>
                <br />

                <h6>Price</h6>
                <Link className="text-decoration-none" to="#">Under $25</Link> <br />
                <Link className="text-decoration-none" to="#">$25 to $50</Link> <br />
                <Link className="text-decoration-none" to="#">$50 to $100</Link> <br />
                <Link className="text-decoration-none" to="#">$100 to $150</Link> <br />
                <Link className="text-decoration-none" to="#">$150 to $200</Link> <br />
                <br />

                <h6>Discount</h6>
                <Link className="text-decoration-none" to="#">10% Off or More</Link> <br />
                <Link className="text-decoration-none" to="#">20% Off or More</Link> <br />
                <Link className="text-decoration-none" to="#">30% Off or More</Link> <br />
                <Link className="text-decoration-none" to="#">40% Off or More</Link> <br />
                <Link className="text-decoration-none" to="#">50% Off or More</Link> <br />

                <br />

                <h6>Avg. Customer Review</h6>
                <Link className="text-decoration-none" to="#"> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bx-star'></i> & Up</Link> <br />
                <Link className="text-decoration-none" to="#"> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bx-star'></i> <i class='bx bx-star'></i> & Up</Link> <br />
                <Link className="text-decoration-none" to="#"> <i class='bx bxs-star' ></i> <i class='bx bxs-star' ></i> <i class='bx bx-star'></i> <i class='bx bx-star'></i> <i class='bx bx-star'></i> & Up</Link>  <br />
                <Link className="text-decoration-none" to="#"> <i class='bx bxs-star' ></i> <i class='bx bx-star'></i> <i class='bx bx-star'></i> <i class='bx bx-star'></i> <i class='bx bx-star'></i> & Up</Link> <br />

            </div>


        </>
    )
}

export default DealsSidebar
