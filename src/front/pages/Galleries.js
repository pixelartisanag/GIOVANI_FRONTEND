import React, {useState, useEffect} from 'react';
import axios from 'lib/axios';
import {useAuth} from 'hooks/auth'
import {useInitTheme} from 'hooks/initTheme';
import Layout from 'front/components/Layouts/front/AppLayout'
import MansonryGrid from 'front/components/MansonryGrid';
import Breadcrumb from 'front/components/Breadcrumb';
import Masonry from 'masonry-layout';

function Galleries() {
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
        const response = await axios.get('/api/galleries');
        setPosts(response.data.data); // Assuming the response data contains an array of posts

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

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
      <Breadcrumb title="Galleries" type="Galleries"/>
      <MansonryGrid posts={posts} sidebar={true}/>
    </Layout>
  );
}

export default Galleries;
