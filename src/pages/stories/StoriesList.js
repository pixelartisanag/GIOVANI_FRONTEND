import React, { useEffect, useState } from 'react';
import axios from 'lib/axios';
import AppLayout from 'components/Layouts/AppLayout'

const StoriesList = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetchStories();
    }, []);

    function trimExcerpt(excerpt, maxLength = 50) {
        if (excerpt.length > maxLength) {
            return `${excerpt.substr(0, maxLength)} [...]`;
        }
        return excerpt;
    }

    const fetchStories = async () => {
        try {
            const response = await axios.get('/api/stories');
            setStories(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
            console.error('Error fetching stories:', error);
        }
    };

    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Stories
                </h2>
            }>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="row">
                                {stories.map((story) => (
                                    <div className="col-md-3 article">
                                        <img src="" alt="" />
                                        <h1>
                                            <b>{story.title}</b>
                                        </h1>
                                        <p>{trimExcerpt(story.excerpt)}</p>
                                        <hr />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default StoriesList;
