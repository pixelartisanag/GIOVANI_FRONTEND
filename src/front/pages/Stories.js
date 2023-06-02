import React, {useState, useEffect} from 'react';
import axios from 'lib/axios';
import {useAuth} from 'hooks/auth'
import {useInitTheme} from 'hooks/initTheme';
import Layout from 'front/components/Layouts/front/AppLayout'
import MansonryGrid from 'front/components/MansonryGrid';
import Breadcrumb from 'front/components/Breadcrumb';
import Masonry from 'masonry-layout';
import Pagination from 'react-js-pagination';

function Stories() {
    const {user} = useAuth({middleware: 'guest'})
    useInitTheme();
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const onContentLoaded = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/stories', {
                    params: {
                        page: currentPage
                    }
                });

                setPosts(response.data.data);
                setTotalItems(response.data.meta.total);
                console.log(totalItems);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [currentPage]);

    useEffect(() => {
        if (posts.length > 0) {
            console.log(posts);
            const msnry = new Masonry('.masonry-items', {
                itemSelector: '.masonry-item',
                columnWidth: '.masonry-item'
            });
            msnry.layout(); // This will trigger the layout immediately after initialization
        }
    }, [posts]);

    return (
        <Layout>
            <div className={`loading ${!isLoading ? 'loading-fade-out d-none' : ''}`}>
                <div className="circle"></div>
            </div>
            <Breadcrumb title="Stories" type="Stories"/>
            <MansonryGrid posts={posts} sidebar={true}/>
            <div className="row">
                <div className="col-lg-12">
                    <div className="pagination ">
                        <Pagination
                            itemClass="list-inline-item" // Add custom class for pagination items
                            linkClass="" // Add custom class for pagination links
                            activeClass="active" // Add custom class for the active page
                            activeLinkClass="active" // Add custom class for the active page's link
                            prevPageText={<i className="fas fa-arrow-left"/>}
                            nextPageText={<i className="fas fa-arrow-right"/>}
                            firstPageText="First"
                            lastPageText="Last"
                            activePage={currentPage}
                            itemsCountPerPage={10}
                            totalItemsCount={totalItems}// Replace this with the actual total number of stories
                            pageRangeDisplayed={5}
                            onChange={page => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Stories;
