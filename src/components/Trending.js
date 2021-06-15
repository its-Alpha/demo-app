import React from 'react'
import Slider from 'react-slick'
import "./Trending.css"

const Trending = () => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="container-fluid shadow-lg mt-4 mb-3 py-5">
                <Slider {...settings}>
                    <div>
                        <img src="./images/img1.jpeg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="./images/img2.jpeg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="./images/img3.jpeg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="./images/img4.jpeg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="./images/img7.jpeg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="./images/img8.jpeg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="./images/img6.jpeg" className="img-fluid custom-slide" alt="" />
                    </div>
                    <div>
                        <img src="./images/img5.jpeg" className="img-fluid custom-slide" alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Trending
