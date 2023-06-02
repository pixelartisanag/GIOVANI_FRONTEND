import React, { useState, useEffect } from 'react';
import axios from 'lib/axios';
import Swiper from 'swiper';

const HomeSlider = ({ onContentLoaded }) => {
    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
        let isMounted = true;
        let swiper;

        const fetchFeatured = async () => {
            try {
                const response = await axios.get('/api/featured');
                if (isMounted) {
                    setFeaturedPosts(response.data);
                    onContentLoaded();

                    swiper = new Swiper('.slider-style4', {
                        slidesPerView: 4,
                        centeredSlides: false,
                        slidesPerGroupSkip: 1,
                        spaceBetween: 1,
                        grabCursor: true,
                        keyboard: {
                            enabled: true
                        },
                        breakpoints: {
                            0: {
                                slidesPerView: 1
                            },
                            769: {
                                slidesPerView: 2
                            },
                            1000: {
                                slidesPerView: 3
                            },
                            1400: {
                                slidesPerView: 4
                            }
                        },
                        scrollbar: {
                            el: '.swiper-scrollbar'
                        },
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    });
                }
            } catch (error) {
                console.error('Error fetching articles:', error);
                if (isMounted) {
                    onContentLoaded();
                }
            }
        };

        fetchFeatured();

        return () => {
            isMounted = false;
            if (swiper) {
                swiper.destroy(); // Clean up the Swiper instance when the component is unmounted
            }
        };
    }, [onContentLoaded]);

    return (
        <div className="slider-style4 swiper-container">
            <div className="swiper-wrapper">
                {featuredPosts.map((post, index) => (
                    <div
                        key={index}
                        className="slider-item swiper-slide"
                        style={{ backgroundImage: `url(${post.main_image})` }}
                    >
                        <div className="slider-item-content">
                            <div className="entry-cat">
                                <a href="front/components/HomeSlider#" className="categorie">
                                    {post.type} {/* Add a 'type' property to each post object in the API response */}
                                </a>
                            </div>
                            <h4 className="entry-title">
                                <a href="front/components/HomeSlider#">{post.title}</a>
                            </h4>
                            <ul className="entry-meta list-inline">
                                <li className="post-author-img">
                                    <a href="front/components/HomeSlider#">
                                        <img src={post.main_image} />
                                    </a>
                                </li>
                                <li className="post-author">
                                    <a href="front/components/HomeSlider#">Admin</a>
                                </li>
                                <li className="post-date">
                                    <span className="dot" /> {post.created_at}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-scrollbar"></div>
        </div>
    );
};

export default HomeSlider;