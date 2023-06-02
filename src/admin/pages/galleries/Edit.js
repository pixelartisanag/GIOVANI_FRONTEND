import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'lib/axios';
import {useAuth} from 'hooks/auth';
import Layout from 'admin/layouts/Admin';
import CrudForm from 'admin/components/Crud/CrudForm';

function UpdateGallery() {
  const {user} = useAuth({middleware: 'auth'});
  const {id} = useParams();
  const [galleryData, setGalleryData] = useState(null);
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // Replace "api/plans" with the correct API endpoint for fetching plans
        const response = await axios.get("api/plans");
        setPlans(response.data);
      } catch (error) {
        console.error("Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  const formConfig = {
    entityType: "Gallery",
    fields: [
      {name: "title", label: "Title", type: "text", required: true, colSize: 6},
      {
        name: "plan_id",
        label: "Plan",
        type: "select",
        required: false,
        colSize: 6,
        options: plans.map(plan => ({value: plan.id, label: plan.name}))
      },
      {name: "price", label: "Price", type: "number", required: false, colSize: 6},
      {name: "uri", label: "URI", type: "text", required: true, colSize: 6},
      {name: "featured", label: "Featured", type: "checkbox", required: false, colSize: 12},
      {name: "published", label: "Published", type: "checkbox", required: false, colSize: 12},
      {
        name: "main_image",
        label: "Main Image",
        type: "file",
        required: true,
        accept: "image/*",
        colSize: 12
      },
      {
        name: "media_gallery",
        label: "Media Gallery",
        type: "dropzone",
        required: true,
        accept: "image/*",
        colSize: 12
      }
    ],
  };

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axios.get(`/api/galleries/${id}`);
        console.log('Fetched gallery data:', response.data); // Log the fetched gallery data
        if (typeof response.data.media_gallery === 'string') {
          response.data.media_gallery = JSON.parse(response.data.media_gallery);
        } else if (!Array.isArray(response.data.media_gallery)) {
          // If media_gallery is not set or not an array, initialize it as an empty array
          response.data.media_gallery = [];
        }

        setGalleryData(response.data);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      }
    };

    fetchGallery();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      const data = new FormData();
      data.set('title', formData.title);
      data.set('featured', formData.featured);
      data.set('main_image', formData.main_image);
      data.set('plan_id', formData.plan_id);
      data.set('price', formData.price);
      if (formData.media_gallery) {
        for (let i = 0; i < formData.media_gallery.length; i++) {
          data.set(`media_gallery[${i}]`, formData.media_gallery[i]);
        }
      }
      data.set('published', formData.published);
      data.set('uri', formData.uri);

      for (const [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
      }

      await axios.put(`/api/galleries/${id}`, data, {
        headers: {'Content-Type': 'multipart/form-data'},
      });
      // Handle successful update, e.g., redirect to gallery list
    } catch (error) {
      console.error('Error updating gallery:', error);
    }
  };

  return (
    <Layout>
      {galleryData && (
        <CrudForm mode="update" data={galleryData} formConfig={formConfig} onSubmit={handleSubmit}/>
      )}
    </Layout>
  );
}

export default UpdateGallery;
