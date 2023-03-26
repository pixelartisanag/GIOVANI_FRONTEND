import React, { useState } from 'react';
import axios from 'lib/axios';

const StoryForm = ({ story, onSubmit }) => {
    const [title, setTitle] = useState(story ? story.title : '');
    const [excerpt, setExcerpt] = useState(story ? story.excerpt : '');
    const [content, setContent] = useState(story ? story.content : '');
    const [role, setRole] = useState(story ? story.role : '');
    const [mediaGallery, setMediaGallery] = useState(story ? story.media_gallery : []);
    const [published, setPublished] = useState(story ? story.published : false);
    const [uri, setUri] = useState(story ? story.uri : '');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = {
                title,
                excerpt,
                content,
                role,
                media_gallery: mediaGallery,
                published,
                uri,
            };

            if (story) {
                await axios.put(`/api/stories/${story.id}`, formData);
            } else {
                await axios.post('/api/stories', formData);
            }

            onSubmit();
        } catch (error) {
            console.error('Error submitting story:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add form fields for title, excerpt, content, role, media gallery, published, and URI */}
            {/* Implement input handling and form submission logic */}
        </form>
    );
};

export default StoryForm;
