import "@fortawesome/fontawesome-free/css/all.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect } from "react";

import James from "../assets/index/James.webp";
import Maria from "../assets/index/Maria.webp";
import Daniel from "../assets/index/Daniel.webp";

const Testimonials = () => {
    const swiperRef = useRef(null);

    const testimonials = [
        {
            img: James,
            name: "James T.",
            role: "Organic Food Buyer",
            rating: 5,
            title: "Fresh and Full of Flavor",
            text: `The vegetables I ordered were incredibly fresh and packed with flavor. You can tell they were harvested recently. I’ve switched completely to this store for my weekly grocery runs. It's reliable and the quality is unmatched.`,
        },
        {
            img: Maria,
            name: "Maria G.",
            role: "Healthy Lifestyle Enthusiast",
            rating: 5,
            title: "Love the Natural Options",
            text: `I was amazed by the variety of natural and organic products available. From leafy greens to juicy fruits, everything tastes better than what I used to buy from the supermarket. Shopping here makes healthy eating easy!`,
        },
        {
            img: Daniel,
            name: "Daniel R.",
            role: "Vegan Home Cook",
            rating: 5,
            title: "Perfect for Plant-Based Meals",
            text: `This platform has everything I need for my plant-based recipes. The vegetables are vibrant, fresh, and always arrive in perfect condition. I especially appreciate their fast delivery and eco-friendly packaging.`,
        },
        {
            img: James,
            name: "James T.",
            role: "Organic Food Buyer",
            rating: 5,
            title: "Fresh and Full of Flavor",
            text: `The vegetables I ordered were incredibly fresh and packed with flavor. You can tell they were harvested recently. I’ve switched completely to this store for my weekly grocery runs. It's reliable and the quality is unmatched.`,
        },
        {
            img: Maria,
            name: "Maria G.",
            role: "Healthy Lifestyle Enthusiast",
            rating: 5,
            title: "Love the Natural Options",
            text: `I was amazed by the variety of natural and organic products available. From leafy greens to juicy fruits, everything tastes better than what I used to buy from the supermarket. Shopping here makes healthy eating easy!`,
        },
    ];

    // Highlight active slide
    const highlightCenteredSlide = (swiper) => {
        swiper.slides.forEach((slide) => slide.classList.remove("scaled"));
        const centerSlide = swiper.slides[swiper.activeIndex];
        if (centerSlide) {
            centerSlide.classList.add("scaled");
        }
    };

    useEffect(() => {
        if (swiperRef.current) {
            highlightCenteredSlide(swiperRef.current);
        }
    }, []);

    return (
        <section className="Testimonials no-change">
            <div className="container position-relative">
                <h2>Our best <span>Testimonial</span></h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    centeredSlides={true}
                    loop={true}
                    grabCursor={true}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        highlightCenteredSlide(swiper);
                    }}
                    onSlideChangeTransitionEnd={(swiper) => highlightCenteredSlide(swiper)}
                    onResize={(swiper) => highlightCenteredSlide(swiper)}
                    breakpoints={{
                        280: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 1.6,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="Boxes d-flex flex-column gap-3">
                                <div className="d-flex align-items-center gap-md-5 gap-4">
                                    <img rel="preload" as="image" src={item.img} alt={item.name} />
                                    <div className="d-flex flex-column align-items-start gap-1">
                                        <h3>{item.name}</h3>
                                        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                            <span>{item.role}</span>
                                            <div className="d-flex align-items-center gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <i
                                                        key={i}
                                                        className={
                                                            i < item.rating ? "fa-solid fa-star" : "fa-regular fa-star"
                                                        }
                                                    ></i>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-column gap-3 text-start">
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
