import React, { useState, useEffect } from 'react';
import axios from 'lib/axios';
import {useAuth} from 'hooks/auth'
import {useInitTheme} from 'hooks/initTheme';
import Layout from 'front/components/Layouts/front/AppLayout'
import HomeSlider from 'front/components/HomeSlider'
import MansonryGrid from 'front/components/MansonryGrid';
import Breadcrumb from 'front/components/Breadcrumb';
import Masonry from 'masonry-layout';

function Home() {
    const {user} = useAuth({middleware: 'auth'})
    useInitTheme();

    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const onContentLoaded = () => {
        setIsLoading(false);
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('/api/home');
                setPosts(response.data); // Assuming the response data contains an array of posts
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    useEffect(() => {
        if (posts.length > 0) {
            const msnry = new Masonry('.masonry-items', {
                itemSelector: '.masonry-item',
                columnWidth: '.masonry-item'
            });
        }
    }, [posts]);

    return (
        <Layout>
            <div className={`loading ${!isLoading ? 'loading-fade-out d-none' : ''}`}>
                <div className="circle"></div>
            </div>
            <HomeSlider onContentLoaded={onContentLoaded} />
            <Breadcrumb title="Home Page" type="" />
            <MansonryGrid posts={posts} sidebar={false} />
        </Layout>
    );
}

export default Home;
