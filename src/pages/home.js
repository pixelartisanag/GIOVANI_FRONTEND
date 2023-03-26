import {useAuth} from 'hooks/auth'
import {useInitTheme} from 'hooks/initTheme';
import FooterAuth from 'components/Layouts/FooterAuth';
import HeaderAuth from 'components/Layouts/HeaderAuth';
import FeatherIcon from 'feather-icons-react';
import FeaturePostArea from 'components/Widgets/FeaturePostArea';

function Home() {
    const {user} = useAuth({middleware: 'guest'})
    useInitTheme();

    return (
        <div>
            <HeaderAuth user={user}/>

            <div className="main-content-wrapper">

                <section className="hero-area home-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="hero-content">
                                    <h1 className="hero-content__title">Welcome</h1>
                                    <p className="hero-content__desc">Into my world</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <FeaturePostArea/>

                <div className="contact-area home-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="mailchimp">
                                    <div className="section-title mb--31">
                                        <h2 className="section-title__main">CONTACT ME</h2>
                                    </div>
                                    <p className="mailchimp__text">Leave your email here and stay informed about our
                                        promotions and new arrivals.</p>
                                    <form className="mailchimp-form mc-form mailchimp-form--2"
                                          action="https://gmail.us19.list-manage.com/subscribe/post?u=9fac302a213ab56195e9125e7&amp;id=a30904c5f3"
                                          method="post" name="mc-embedded-subscribe-form">
                                        <label htmlFor="mailchimp-email" className="sr-only">Subscribe us</label>
                                        <div className="mailchimp-form__group">
                                            <input className="mailchimp-form__input" type="email" id="mailchimp-email"
                                                   name="mailchimp-email" placeholder="Your Email"/>
                                            <button className="mailchimp-form__btn" type="submit">
                                                <FeatherIcon icon="arrow-right"/>
                                            </button>
                                        </div>
                                    </form>
                                    <div className="mailchimp-alerts">
                                        <div className="mailchimp-submitting"></div>
                                        <div className="mailchimp-success"></div>
                                        <div className="mailchimp-error"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7 offset-lg-1">
                                <div className="cta">
                                    <div className="cta__content">
                                        <h3 className="cta__heading">
                                            Get in touch <span>with me...</span>
                                        </h3>
                                        <p className="cta__text">The standard chunk of Lorem Ipsum used since the 1500s
                                            is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
                                            de Finibus Bonorum.</p>
                                        <a href="contact.html" className="btn btn--light btn--shape-rounded btn--icon">
                                            <span>Connect With me <span className="icon"><i
                                                data-feather="chevron-right"></i></span></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="main-area home-one">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="recent-post-area">
                                    <div className="section-title mb--46">
                                        <h2 className="section-title__main">MOST RECENT POST</h2>
                                    </div>
                                    <div className="recent-post-content">
                                        <article className="blog blog--two mb--50">
                                            <div className="blog__inner">
                                                <div className="blog__media">
                                                    <div className="blog__link">
                                                        <FeatherIcon icon="external-link"/>
                                                        <a href="https://themeforest.net/user/rainbow-themes/portfolio"
                                                           target="_blank"
                                                           rel="noopener noreferrer">https://themeforest.net/user/rainbow-themes/portfolio</a>
                                                    </div>
                                                </div>
                                                <div className="blog__content">
                                                    <header className="blog__header">
                                                        <a className="blog__category"
                                                           href="archive.html">THEMEFOREST</a>
                                                        <h3 className="blog__title">
                                                            <a href="single-blog.html">Linked format blog title</a>
                                                        </h3>
                                                        <div className="blog__meta">
                                                            <div className="blog__meta-item">
                                                                <a href="archive.html">MARCH 26, 2023</a>
                                                            </div>
                                                            <div className="blog__meta-item">
                                                                <a href="single-blog.html" className="blog__comment">2
                                                                    Comments</a>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <p className="blog__excerpt">
                                                        This is useful, because plants require pollen of the same
                                                        species to propagate. While other bees may introduce pollen from
                                                        different plant species, the honeybee gu…
                                                    </p>
                                                    <footer className="blog__footer">
                                                        <a href="single-blog.html"
                                                           className="blog__btn"><span>Read More <i
                                                            data-feather="chevron-right"></i></span> </a>
                                                    </footer>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="blog blog--two mb--50">
                                            <div className="blog__inner">
                                                <div className="blog__media">
                                                    <blockquote className="blog__quote">
                                                        <FeatherIcon icon="paperclip"/>
                                                        <h3>Courage is the first of human qualities because it is the
                                                            quality which gurantees the others</h3>
                                                        <footer>-Aristotle</footer>
                                                    </blockquote>
                                                </div>
                                                <div className="blog__content">
                                                    <header className="blog__header">
                                                        <a className="blog__category"
                                                           href="archive.html">THEMEFOREST</a>
                                                        <h3 className="blog__title">
                                                            <a href="single-blog.html">Quote format blog title</a>
                                                        </h3>
                                                        <div className="blog__meta">
                                                            <div className="blog__meta-item">
                                                                <a href="archive.html">MARCH 26, 2023</a>
                                                            </div>
                                                            <div className="blog__meta-item">
                                                                <a href="single-blog.html" className="blog__comment">2
                                                                    Comments</a>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <p className="blog__excerpt">
                                                        This is useful, because plants require pollen of the same
                                                        species to propagate. While other bees may introduce pollen from
                                                        different plant species, the honeybee gu…
                                                    </p>
                                                    <footer className="blog__footer">
                                                        <a href="single-blog.html"
                                                           className="blog__btn"><span>Read More <i
                                                            data-feather="chevron-right"></i></span> </a>
                                                    </footer>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="blog blog--two mb--50">
                                            <div className="blog__inner">
                                                <div className="blog__media">
                                                    <figure className="blog__thumb">
                                                        <img src="assets/img/blog/blog-9-510x350.jpg" alt="Blog"/>
                                                        <a href="single-blog.html" className="overlay-link">Blog
                                                            Title</a>
                                                    </figure>
                                                </div>
                                                <div className="blog__content">
                                                    <header className="blog__header">
                                                        <a className="blog__category"
                                                           href="archive.html">THEMEFOREST</a>
                                                        <h3 className="blog__title">
                                                            <a href="single-blog.html">Never Lose Your Technology
                                                                Again</a>
                                                        </h3>
                                                        <div className="blog__meta">
                                                            <div className="blog__meta-item">
                                                                <a href="archive.html">MARCH 26, 2023</a>
                                                            </div>
                                                            <div className="blog__meta-item">
                                                                <a href="single-blog.html" className="blog__comment">2
                                                                    Comments</a>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <p className="blog__excerpt">
                                                        This is useful, because plants require pollen of the same
                                                        species to propagate. While other bees may introduce pollen from
                                                        different plant species, the honeybee gu…
                                                    </p>
                                                    <footer className="blog__footer">
                                                        <a href="single-blog.html"
                                                           className="blog__btn"><span>Read More <i
                                                            data-feather="chevron-right"></i></span> </a>
                                                    </footer>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="blog blog--two mb--50">
                                            <div className="blog__inner">
                                                <div className="blog__media">
                                                    <div className="blog__video">
                                                        <figure className="blog__video-poster">
                                                            <img src="assets/img/blog/blog-2-510x350.jpg" alt="Blog"/>
                                                        </figure>
                                                        <div className="blog__video-overlay">
                                                            <button type="button" className="blog__video-btn"
                                                                    data-toggle="modal" data-target="#videoBlogModal">
                                                                <FeatherIcon icon="play"/>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog__content">
                                                    <header className="blog__header">
                                                        <a className="blog__category"
                                                           href="archive.html">THEMEFOREST</a>
                                                        <h3 className="blog__title">
                                                            <a href="single-blog.html">Video format blog title</a>
                                                        </h3>
                                                        <div className="blog__meta">
                                                            <div className="blog__meta-item">
                                                                <a href="archive.html">MARCH 26, 2023</a>
                                                            </div>
                                                            <div className="blog__meta-item">
                                                                <a href="single-blog.html" className="blog__comment">2
                                                                    Comments</a>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <p className="blog__excerpt">
                                                        This is useful, because plants require pollen of the same
                                                        species to propagate. While other bees may introduce pollen from
                                                        different plant species, the honeybee gu…
                                                    </p>
                                                    <footer className="blog__footer">
                                                        <a href="single-blog.html"
                                                           className="blog__btn"><span>Read More <i
                                                            data-feather="chevron-right"></i></span> </a>
                                                    </footer>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="blog blog--two mb--50">
                                            <div className="blog__inner">
                                                <div className="blog__media">
                                                    <figure className="blog__thumb">
                                                        <img src="assets/img/blog/blog-3-510x350.jpg" alt="Blog"/>
                                                        <a href="single-blog.html" className="overlay-link">Blog
                                                            Title</a>
                                                    </figure>
                                                </div>
                                                <div className="blog__content">
                                                    <header className="blog__header">
                                                        <a className="blog__category"
                                                           href="archive.html">THEMEFOREST</a>
                                                        <h3 className="blog__title">
                                                            <a href="single-blog.html">I wish to ask important eagerness
                                                                to follow or never</a>
                                                        </h3>
                                                        <div className="blog__meta">
                                                            <div className="blog__meta-item">
                                                                <a href="archive.html">MARCH 26, 2023</a>
                                                            </div>
                                                            <div className="blog__meta-item">
                                                                <a href="single-blog.html" className="blog__comment">2
                                                                    Comments</a>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <p className="blog__excerpt">
                                                        This is useful, because plants require pollen of the same
                                                        species to propagate. While other bees may introduce pollen from
                                                        different plant species, the honeybee gu…
                                                    </p>
                                                    <footer className="blog__footer">
                                                        <a href="single-blog.html"
                                                           className="blog__btn"><span>Read More <i
                                                            data-feather="chevron-right"></i></span> </a>
                                                    </footer>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="blog blog--two mb--50">
                                            <div className="blog__inner">
                                                <div className="blog__media">
                                                    <div className="blog__gallery">
                                                        <div className="post-slider swiper-container">
                                                            <div className="swiper-wrapper">
                                                                <div className="swiper-slide">
                                                                    <img src="assets/img/blog/blog-4-510x350.jpg"
                                                                         alt="blog"/>
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <img src="assets/img/blog/blog-5-510x350.jpg"
                                                                         alt="blog"/>
                                                                </div>
                                                                <div className="swiper-slide">
                                                                    <img src="assets/img/blog/blog-6-510x350.jpg"
                                                                         alt="blog"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="blog__content">
                                                    <header className="blog__header">
                                                        <a className="blog__category"
                                                           href="archive.html">THEMEFOREST</a>
                                                        <h3 className="blog__title">
                                                            <a href="single-blog.html">Gallery format blog title</a>
                                                        </h3>
                                                        <div className="blog__meta">
                                                            <div className="blog__meta-item">
                                                                <a href="archive.html">MARCH 26, 2023</a>
                                                            </div>
                                                            <div className="blog__meta-item">
                                                                <a href="single-blog.html" className="blog__comment">2
                                                                    Comments</a>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <p className="blog__excerpt">
                                                        This is useful, because plants require pollen of the same
                                                        species to propagate. While other bees may introduce pollen from
                                                        different plant species, the honeybee gu…
                                                    </p>
                                                    <footer className="blog__footer">
                                                        <a href="single-blog.html"
                                                           className="blog__btn"><span>Read More <i
                                                            data-feather="chevron-right"></i></span> </a>
                                                    </footer>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="blog blog--two mb--50">
                                            <div className="blog__inner">
                                                <div className="blog__media">
                                                    <figure className="blog__thumb">
                                                        <img src="assets/img/blog/blog-7-510x350.jpg" alt="Blog"/>
                                                        <a href="single-blog.html" className="overlay-link">Blog
                                                            Title</a>
                                                    </figure>
                                                </div>
                                                <div className="blog__content">
                                                    <header className="blog__header">
                                                        <a className="blog__category"
                                                           href="archive.html">THEMEFOREST</a>
                                                        <h3 className="blog__title">
                                                            <a href="single-blog.html">Now all manufacturers to achieve
                                                                because it is not a great film</a>
                                                        </h3>
                                                        <div className="blog__meta">
                                                            <div className="blog__meta-item">
                                                                <a href="archive.html">MARCH 26, 2023</a>
                                                            </div>
                                                            <div className="blog__meta-item">
                                                                <a href="single-blog.html" className="blog__comment">2
                                                                    Comments</a>
                                                            </div>
                                                        </div>
                                                    </header>
                                                    <p className="blog__excerpt">
                                                        This is useful, because plants require pollen of the same
                                                        species to propagate. While other bees may introduce pollen from
                                                        different plant species, the honeybee gu…
                                                    </p>
                                                    <footer className="blog__footer">
                                                        <a href="single-blog.html"
                                                           className="blog__btn"><span>Read More <i
                                                            data-feather="chevron-right"></i></span> </a>
                                                    </footer>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                    <nav className="pagination-wrap">
                                        <ul className="pagination">
                                            <li className="pagination__item disabled">
                                                <a className="pagination__link pagination__link--prev"
                                                   href="index.html">
                                                    <FeatherIcon icon="chevron-left"/>
                                                    <span>prev</span>
                                                </a>
                                            </li>
                                            <li className="pagination__item">
                                                <a className="pagination__link active" href="index.html">
                                                    <span>1</span>
                                                </a>
                                            </li>
                                            <li className="pagination__item">
                                                <a className="pagination__link" href="index.html">
                                                    <span>2</span>
                                                </a>
                                            </li>
                                            <li className="pagination__item">
                                                <a className="pagination__link" href="index.html">
                                                    <span>3</span>
                                                </a>
                                            </li>
                                            <li className="pagination__item">
                                                <a className="pagination__link" href="index.html">
                                                    <span>4</span>
                                                </a>
                                            </li>
                                            <li className="pagination__item">
                                                <a className="pagination__link pagination__link--next"
                                                   href="index.html">
                                                    <span>next</span>
                                                    <FeatherIcon icon="chevron-right"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <aside className="sidebar-widget mt--md-12">
                                    <div className="widget widget--primary mb--30">
                                        <h3 className="widget__title">SEARCH</h3>
                                        <form className="search-form">
                                            <label className="sr-only" htmlFor="search">Search</label>
                                            <input className="search-form__input" type="search" id="search"
                                                   name="search" placeholder="Search Here..."/>
                                            <button type="submit" className="search-form__btn" aria-label="Submit">
                                                <i data-feather="search"></i>
                                            </button>
                                        </form>
                                    </div>
                                    <div className="widget mb--30">
                                        <h3 className="widget__title">RECENT STORIES</h3>
                                        <div className="recent-post">
                                            <div className="recent-post__item">
                                                <article className="blog blog--three">
                                                    <div className="blog__inner">
                                                        <div className="blog__content">
                                                            <a href="archive.html" className="blog__date">MARCH 26,
                                                                2023</a>
                                                            <h4 className="blog__title">
                                                                <a href="single-blog.html">I wish to ask important
                                                                    eagerness to follow or never</a>
                                                            </h4>
                                                        </div>
                                                        <div className="blog__media">
                                                            <figure className="blog__thumb">
                                                                <img src="assets/img/blog/blog-1-78x78.jpg" alt="Blog"/>
                                                                <a href="single-blog.html" className="overlay-link">Blog
                                                                    Link</a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="recent-post__item">
                                                <article className="blog blog--three">
                                                    <div className="blog__inner">
                                                        <div className="blog__content">
                                                            <a href="archive.html" className="blog__date">MARCH 26,
                                                                2023</a>
                                                            <h4 className="blog__title">
                                                                <a href="single-blog.html">Now all manufacturers to
                                                                    achieve because it is not a great film</a>
                                                            </h4>
                                                        </div>
                                                        <div className="blog__media">
                                                            <figure className="blog__thumb">
                                                                <img src="assets/img/blog/blog-2-78x78.jpg" alt="Blog"/>
                                                                <a href="single-blog.html" className="overlay-link">Blog
                                                                    Link</a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="recent-post__item">
                                                <article className="blog blog--three">
                                                    <div className="blog__inner">
                                                        <div className="blog__content">
                                                            <a href="archive.html" className="blog__date">MARCH 26,
                                                                2023</a>
                                                            <h4 className="blog__title">
                                                                <a href="single-blog.html">the choice is easy blinded to
                                                                    the needs of hardship</a>
                                                            </h4>
                                                        </div>
                                                        <div className="blog__media">
                                                            <figure className="blog__thumb">
                                                                <img src="assets/img/blog/blog-3-78x78.jpg" alt="Blog"/>
                                                                <a href="single-blog.html" className="overlay-link">Blog
                                                                    Link</a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                            <div className="recent-post__item">
                                                <article className="blog blog--three">
                                                    <div className="blog__inner">
                                                        <div className="blog__content">
                                                            <a href="archive.html" className="blog__date">MARCH 26,
                                                                2023</a>
                                                            <h4 className="blog__title">
                                                                <a href="single-blog.html">those who reject the troubles
                                                                    they exercise that is either</a>
                                                            </h4>
                                                        </div>
                                                        <div className="blog__media">
                                                            <figure className="blog__thumb">
                                                                <img src="assets/img/blog/blog-4-78x78.jpg" alt="Blog"/>
                                                                <a href="single-blog.html" className="overlay-link">Blog
                                                                    Link</a>
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget widget--primary mb--30">
                                        <h3 className="widget__title">INSTAGRAM</h3>
                                        <div id="instagram-feed"></div>
                                    </div>
                                    <div className="widget">
                                        <h3 className="widget__title">CATEGORIES</h3>
                                        <ul className="categories">
                                            <li className="categories__item">
                                                <a href="archive.html" className="categories__link">
                                                    <span className="text">Stories</span>
                                                    <span className="number">2</span>
                                                </a>
                                            </li>
                                            <li className="categories__item">
                                                <a href="archive.html" className="categories__link">
                                                    <span className="text">Videos</span>
                                                    <span className="number">2</span>
                                                </a>
                                            </li>
                                            <li className="categories__item">
                                                <a href="archive.html" className="categories__link">
                                                    <span className="text">Galleries</span>
                                                    <span className="number">2</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </main>

            </div>

            <FooterAuth/>
        </div>
    );
}

export default Home;
