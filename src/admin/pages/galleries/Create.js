import React, {useState, useEffect} from "react";
import {useAuth} from "hooks/auth";
import Layout from "admin/layouts/Admin";
import CrudForm from "admin/components/Crud/CrudForm";
import axios from "lib/axios";
import {useNavigate} from "react-router-dom";

const CreateGallery = () => {
  const {user} = useAuth({middleware: "auth"});
  const navigate = useNavigate();
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

  const handleSubmit = async (formData) => {
    const form = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      if (key === "media_gallery") {
        value.forEach((file, index) => {
          form.append(`${key}[${index}]`, file);
        });
      } else {
        form.append(key, value);
      }
    }

    try {
      // Replace "api/galleries" with the correct API endpoint for creating a new gallery
      await axios.post("api/galleries", form);
      navigate("/admin/galleries");
    } catch (error) {
      console.error("Error creating gallery:", error);
    }
  };

  return (
    <Layout>
      <CrudForm mode="create" formConfig={formConfig} onSubmit={handleSubmit}/>
    </Layout>
  );
};

export default CreateGallery;
