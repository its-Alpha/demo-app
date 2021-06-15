import React from 'react'

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide mt-2" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./images/img1.jpeg" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/img2.jpeg" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                    </div>
                    <div className="carousel-item">
                        <img src="./images/img3.jpeg" className="d-block w-100" alt="..." style={{height:'500px'}}/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
