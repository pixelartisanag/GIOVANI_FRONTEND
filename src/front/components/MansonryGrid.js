import React, { useEffect } from 'react';
import Masonry from 'masonry-layout';
import PostItem from './PostItem';
import SideBar from './SideBar';

const MansonryGrid = ({ posts, sidebar = true }) => {
    useEffect(() => {
        const masonryInstance = new Masonry('.masonry-items', {
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-item'
        });

        return () => {
            masonryInstance.destroy();
        };
    }, []);

    return (
        <section className="blog-grid">
            <div className="container-fluid">
                <div className="row">
                    <div className={`mt-30 side-content ${sidebar ? 'col-xl-9' : 'col-xl-12'}`}>
                    <div className="theiaStickySidebar">
                            <div className="row masonry-items">
                                {posts.map((post, index) => (
                                    <PostItem key={index} post={post} col={sidebar ? 6 : 4} />
                                ))}
                            </div>
                        </div>
                    </div>
                    {sidebar && <SideBar />}
                </div>
            </div>
        </section>
    );
};

export default MansonryGrid;