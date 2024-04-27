import React from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Group from '../../../Assets/Group.svg'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './offersSlider.css'

const OfferSlider = () => {
    return (
        <>
            <Swiper
            modules={[Virtual, Navigation, Pagination]}
            slidesPerView= {1}
            centeredSlides={true}
            spaceBetween={10}
            >
                <SwiperSlide>
                    <div className='discount-background d-flex align-items-center'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <img src={Group} alt='discount' />
                                </div>
                                <div className="col">
                                    <h6>Get</h6>
                                    <h6><strong>50% off</strong></h6>
                                    <h6>on first <strong>03</strong> order</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='discount-background d-flex align-items-center'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <img src={Group} alt='discount' />
                                </div>
                                <div className="col">
                                    <h6>Get</h6>
                                    <h6><strong>50% off</strong></h6>
                                    <h6>on first <strong>03</strong> order</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='discount-background d-flex align-items-center'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <img src={Group} alt='discount' />
                                </div>
                                <div className="col">
                                    <h6>Get</h6>
                                    <h6><strong>50% off</strong></h6>
                                    <h6>on first <strong>03</strong> order</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='discount-background d-flex align-items-center'>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <img src={Group} alt='discount' />
                                </div>
                                <div className="col">
                                    <h6>Get</h6>
                                    <h6><strong>50% off</strong></h6>
                                    <h6>on first <strong>03</strong> order</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default OfferSlider
  