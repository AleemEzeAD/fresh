import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Imported images
import natural from '../assets/naturals/natural.webp';
import natural1 from '../assets/naturals/natural1.webp';
import natural2 from '../assets/naturals/natural2.webp';
import natural3 from '../assets/naturals/natural3.webp';
import natural4 from '../assets/naturals/natural4.webp';
import Lush from '../assets/index/lush.webp';

const Natural = () => {
    return (
        <section className="Natural">
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-md-6">
                        <div className='d-flex flex-column gap-md-3 gap-2 align-items-md-start align-items-center text-md-start text-center position-relative'>
                            <figure>
                                <img rel="preload" as="image" src={Lush} alt="Lush" />
                            </figure>
                            <h2>Naturally <span>Grown & Always</span> Tasty</h2>
                            <h4>100% Natural & Organic</h4>
                            <p>
                                Discover our carefully selected range of natural and organic foods — from crisp vegetables to juicy fruits.
                                Everything is harvested fresh to deliver rich flavor and unbeatable nutrition. Elevate your meals the natural way.
                            </p>
                            <div className='mt-2'>
                                <a href="#" className="hover1">Shop Now</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Swiper */}
                    <div className="col-md-6">
                        <Swiper
                            effect="coverflow"
                            grabCursor={true}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            coverflowEffect={{
                                rotate: 30,
                                stretch: 0,
                                depth: 150,
                                modifier: 2.5,
                                slideShadows: true,
                            }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                390: {
                                    slidesPerView: 1.5,
                                },
                                768: {
                                    slidesPerView: 1.4,
                                },
                                1024: {
                                    slidesPerView: 1.5,
                                },
                            }}
                            modules={[EffectCoverflow, Autoplay]}
                            className="mySwiper"
                        >
                            {[natural, natural1, natural2, natural3, natural4].map((img, i) => (
                                <SwiperSlide key={i}>
                                    <img rel="preload" as="image" src={img} alt={`natural-${i}`} className="img-fluid rounded shadow" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Natural;
