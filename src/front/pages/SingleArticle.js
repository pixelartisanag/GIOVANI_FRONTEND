import { useParams } from 'react-router-dom';
import {useAuth} from 'hooks/auth'
import {useInitTheme} from 'hooks/initTheme';
import FooterAuth from 'front/components/Layouts/front/FooterAuth';
import HeaderAuth from 'front/components/Layouts/front/HeaderAuth';
import FeatherIcon from 'feather-icons-react';

function SingleArticle() {
    const {user} = useAuth({middleware: 'guest'})
    const { uri } = useParams();
    console.log(uri);
    useInitTheme();

    return (
        <div>
            <HeaderAuth transparent={false} user={user}/>

            <div className="main-content-wrapper">
                <main className="single-post-area without-sidebar">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-xl-8">
                                <article className="single-blog">
                                    <div className="single-blog__media">
                                        <figure className="single-blog__thumb">
                                            <img src="assets/img/blog/blog-1.jpg" alt="Single Blog"/>
                                        </figure>
                                    </div>
                                    <header className="single-blog__header">
                                        <a href="archive.html" className="single-blog__category">Themeforest</a>
                                        <h2 className="single-blog__title">Blog Title</h2>
                                        <div className="single-blog__meta">
                                            <div className="single-blog__meta-item">
                                                <a href="archive.html" className="single-blog__date">MARCH 26, 2020</a>
                                            </div>
                                            <div className="single-blog__meta-item">
                                                <a href="archive.html" className="single-blog__author">FATIMA LIMA</a>
                                            </div>
                                            <div className="single-blog__meta-item">
                                                <a href="archive.html" className="single-blog__comment-numb">3
                                                    Comments</a>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="single-blog__content">
                                        <p>One primary reason is that bees are vital pollinators, on which human
                                            agriculture depends. Bees transfer pollen between plants allowing them to
                                            reproduce and grow. The Food and Agriculture Organisation (FAO) of the UN
                                            has found that 35% of global agricultural land, consisting of 87 major food
                                            crops, is dependent on pollination by bees</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going
                                            to use a passage of Lorem Ipsum. You need to be sure there isn't anything
                                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                                            the Internet tend toitrrepeat predefined chunks.</p>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going
                                            to use a passage of Lorem Ipsum. You need to be sure there isn't anything
                                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                                            the Internet tend toitrrepeat predefined chunks.</p>
                                        <p>Necessary, making this the first true generator on the Internet. It re are
                                            many variations of passages of Lo rem Ipsum available, but the majority have
                                            suffered alteration in some form, by injectedeed eedhumour, or randomised
                                            words which don't look even slightly believable.</p>
                                        <div className="row">
                                            <div className="col-md-6 mb--30">
                                                <figure>
                                                    <img src="assets/img/blog/image-2.jpg" alt="single blog"/>
                                                </figure>
                                            </div>
                                            <div className="col-md-6 mb--30">
                                                <figure>
                                                    <img src="assets/img/blog/image-3.jpg" alt="single blog"/>
                                                </figure>
                                            </div>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going
                                            to use a passage of Lorem Ipsum. You need to be sure there isn't anything
                                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                                            the Internet tend toitrrepeat predefined chunks.</p>
                                        <blockquote>
                                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
                                            parturient montes.
                                        </blockquote>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going
                                            to use a passage of Lorem Ipsum. You need to be sure there isn't anything
                                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                                            the Internet tend toitrrepeat predefined chunks. Necessary, making this the
                                            first true generator on the Internet. It re are many variations of passages
                                            of Lorem Ipsum available, but the majority have suffered alteration in some
                                            form, by injectedeed eedhumour, or randomised words which don't look even
                                            slightly believable.</p>
                                        <div className="row">
                                            <div className="col-md-6 mb--30">
                                                <figure>
                                                    <img src="assets/img/blog/image-1.jpg" alt="single blog"/>
                                                    <figcaption>Internet tend toitrrepeat predefined chunks.
                                                    </figcaption>
                                                </figure>
                                            </div>
                                            <div className="col-md-6 mb--30">
                                                <p>There are many variations of passages of Lorem Ipsum available, but
                                                    the majority have suffered alteration in some form, by injected
                                                    humour.</p>
                                                <h5 className="mb--15">Ordered & Unordered Lists.</h5>
                                                <ul className="mb--30">
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin far successfully</li>
                                                </ul>
                                                <h5 className="mb--15">Ordered & Unordered Lists.</h5>
                                                <ul>
                                                    <li>Yet this above sewed flirted opened ouch</li>
                                                    <li>Goldfinch realistic sporadic ingenuous</li>
                                                    <li>Abominable this abidin far successfully</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going
                                            to use a passage of Lorem Ipsum. You need to be sure there isn't anything
                                            embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
                                            the Internet tend toitrrepeat predefined chunks. Necessary, making this the
                                            first true generator on the Internet. It re are many variations of passages
                                            of Lorem Ipsum available, but the majority have suffered alteration in some
                                            form, by injectedeed eedhumour, or randomised words which don't look even
                                            slightly believable.</p>
                                    </div>
                                    <footer className="single-blog__footer">
                                        <div className="single-blog__share">
                                            <h4>Share This:</h4>
                                            <div className="social layout-2">
                                                <a href="front/pages/SingleArticle" className="social__link">
                                                    <i data-feather="facebook"></i>
                                                </a>
                                                <a href="front/pages/SingleArticle" className="social__link">
                                                    <i data-feather="linkedin"></i>
                                                </a>
                                                <a href="front/pages/SingleArticle" className="social__link">
                                                    <i data-feather="twitter"></i>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="single-blog__tags">
                                            <i data-feather="tag"></i>
                                            <a href="archive.html">react,</a>
                                            <a href="archive.html">markdown,</a>
                                            <a href="archive.html">gatsby,</a>
                                            <a href="archive.html">blog</a>
                                        </div>
                                    </footer>
                                </article>

                                <div className="related-posts">
                                    <h3 className="related-posts__title">Related Posts</h3>
                                    <div className="row">
                                        <div className="col-md-6 mb--30">
                                            <article className="blog blog--five">
                                                <div className="blog__inner">
                                                    <div className="blog__media">
                                                        <figure className="blog__thumb">
                                                            <img src="assets/img/blog/blog-1.jpg" alt="Blog"/>
                                                                <a href="single-blog.html" className="overlay-link">Blog
                                                                    Title</a>
                                                        </figure>
                                                        <a className="blog__category blog__category--media"
                                                           href="archive.html">THEMEFOREST</a>
                                                    </div>
                                                    <div className="blog__content">
                                                        <header className="blog__header">
                                                            <h3 className="blog__title">
                                                                <a href="single-blog.html">Blog Title</a>
                                                            </h3>
                                                        </header>
                                                        <p className="blog__excerpt">This is useful, because plants
                                                            require pollen of the same species to propagate…</p>
                                                        <footer className="blog__footer">
                                                            <div className="blog__meta">
                                                                <div className="blog__meta-item">
                                                                    <a className="blog__author" href="archive.html">Fatima
                                                                        Lima</a>
                                                                </div>
                                                                <div className="blog__meta-item">
                                                                    <a className="blog__comment-number"
                                                                       href="single-blog.html">3 Comments</a>
                                                                </div>
                                                            </div>
                                                            <a className="blog__btn" href="single-blog.html">Read
                                                                More <i data-feather="chevron-right"></i></a>
                                                        </footer>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                        <div className="col-md-6 mb--30">
                                            <article className="blog blog--five">
                                                <div className="blog__inner">
                                                    <div className="blog__media">
                                                        <figure className="blog__thumb">
                                                            <img src="assets/img/blog/blog-1.jpg" alt="Blog"/>
                                                                <a href="single-blog.html" className="overlay-link">Blog
                                                                    Title</a>
                                                        </figure>
                                                        <a className="blog__category blog__category--media"
                                                           href="archive.html">THEMEFOREST</a>
                                                    </div>
                                                    <div className="blog__content">
                                                        <header className="blog__header">
                                                            <h3 className="blog__title">
                                                                <a href="single-blog.html">Blog Title</a>
                                                            </h3>
                                                        </header>
                                                        <p className="blog__excerpt">This is useful, because plants
                                                            require pollen of the same species to propagate…</p>
                                                        <footer className="blog__footer">
                                                            <div className="blog__meta">
                                                                <div className="blog__meta-item">
                                                                    <a className="blog__author" href="archive.html">Fatima
                                                                        Lima</a>
                                                                </div>
                                                                <div className="blog__meta-item">
                                                                    <a className="blog__comment-number"
                                                                       href="single-blog.html">3 Comments</a>
                                                                </div>
                                                            </div>
                                                            <a className="blog__btn" href="single-blog.html">Read
                                                                More <i data-feather="chevron-right"></i></a>
                                                        </footer>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            <FooterAuth/>
        </div>
    );
}

export default SingleArticle;
