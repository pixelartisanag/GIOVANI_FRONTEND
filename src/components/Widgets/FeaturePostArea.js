import React, { useState, useEffect } from 'react';
import axios from 'lib/axios';
import FeatherIcon from 'feather-icons-react';
import Swiper from 'swiper';

const FeaturePostArea = () => {
    const [featuredPosts, setFeaturedPosts] = useState([]);

    useEffect(() => {
        const fetchFeaturedPosts = async () => {
            try {
                const response = await axios.get('/api/featured');
                const formattedPosts = response.data.map(post => {
                    const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    });

                    if (post.main_image && post.media_gallery) {
                        return {
                            ...post,
                            type: 'gallery',
                            created_at_formatted: formattedDate
                        };
                    } else if (post.video_src) {
                        return {
                            ...post,
                            type: 'video',
                            created_at_formatted: formattedDate
                        };
                    } else {
                        return {
                            ...post,
                            type: 'story',
                            created_at_formatted: formattedDate
                        };
                    }
                });
                setFeaturedPosts(formattedPosts);
            } catch (error) {
                console.error('Error fetching plans:', error);
            }
        };

        fetchFeaturedPosts();
    }, []);

    useEffect(() => {
        const featureSwiper = new Swiper('.feature-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            autoHeight: true,
            autoplay: {
                delay: 3000
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3
                },
                768: {
                    slidesPerView: 2
                },
                320: {
                    slidesPerView: 1
                }
            }
        });

        const postSwipers = document.querySelectorAll('.post-slider');
        postSwipers.forEach(postSwiper => {
            new Swiper(postSwiper, {
                slidesPerView: 1,
                spaceBetween: 0,
                autoHeight: false,
                autoplay: {
                    delay: 3000
                }
            });
        });

        return () => {
            featureSwiper.destroy();
            postSwipers.forEach(postSwiper => postSwiper.swiper.destroy());
        };
    }, [featuredPosts]);

    const shuffleArray = (array) => {
        const shuffled = array.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const shuffleGalleryItems = (post) => {
        if (post.type === 'gallery') {
            const shuffledItems = shuffleArray(post.media_gallery);
            return {
                ...post,
                media_gallery: shuffledItems.map((item) => ({ ...item, type: 'image' }))
            };
        }
        return post;
    };

    const shuffledPosts = shuffleArray(featuredPosts).map(shuffleGalleryItems);
    console.log(featuredPosts);
    console.log(shuffledPosts);

    return (
        <div className="feature-post-area home-one" id="feature-posts">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="feature-post-slider">
                            <div className="feature-slider swiper-container">
                                <div className="swiper-wrapper">
                                    {shuffledPosts.map((post, index) => {
                                        if (post.type === 'story') {
                                            return (
                                                <div className="swiper-slide" key={post.id}>
                                                    <article className="blog blog--one">
                                                        <div className="blog__inner">
                                                            <div className="blog__media">
                                                                <figure className="blog__thumb">
                                                                    <img src={post.main_image} alt="blog thumb" />
                                                                </figure>
                                                            </div>
                                                            <div className="blog__content">
                                                                <h2 className="blog__title">
                                                                    <a href={`/stories/${post.uri}`}>
                                                                        {post.title}
                                                                    </a>
                                                                </h2>
                                                                <div className="blog__meta">
                                                                    <a href={`/stories/${post.uri}`} className="blog__date">
                                                                        {post.created_at_formatted}
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            );
                                        } else if (post.type === 'video') {
                                            return (
                                                <div className="swiper-slide" key={post.id}>
                                                    <article className="blog blog--one blog--video">
                                                        <div className="blog__inner">
                                                            <div className="blog__media">
                                                                <div className="blog__video">
                                                                    <figure className="blog__video-poster">
                                                                        <img src={post.main_image} alt="Blog" />
                                                                    </figure>
                                                                    <div className="blog__video-overlay">
                                                                        <button type="button" className="blog__video-btn"
                                                                                data-toggle="modal" data-target="#videoBlogModal">
                                                                            <FeatherIcon icon="play" />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="blog__content">
                                                                <h2 className="blog__title">
                                                                    <a href={`/videos/${post.uri}`}>
                                                                        {post.title}
                                                                    </a>
                                                                </h2>
                                                                <div className="blog__meta">
                                                                    <a href={`/videos/${post.uri}`} className="blog__date">
                                                                        {post.created_at_formatted}
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            );
                                        } else if (post.type === 'gallery') {
                                            return (
                                                <div className="swiper-slide" key={post.id}>
                                                    <article className="blog blog--one blog--gallery">
                                                        <div className="blog__inner">
                                                            <div className="blog__media">
                                                                <div className="blog__gallery">
                                                                    <div className="post-slider swiper-container">
                                                                        <div className="swiper-wrapper">
                                                                            {post.media_gallery.map((image, index) => (
                                                                                <div className="swiper-slide" key={index}>
                                                                                    <img src={image.src} alt={image.title} />
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="blog__content">
                                                                <h2 className="blog__title">
                                                                    <a href={post.uri}>{post.title}</a>
                                                                </h2>
                                                                <div className="blog__meta">
                                                                    <a href={post.uri} className="blog__date">
                                                                        {post.created_at_formatted}
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>

                                <button type="button" aria-label="go prev"
                                        className="swiper-button swiper-button-prev">
                                    <FeatherIcon icon="arrow-left"/>
                                </button>
                                <button type="button" aria-label="go next"
                                        className="swiper-button swiper-button-next">
                                    <FeatherIcon icon="arrow-right"/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturePostArea;
