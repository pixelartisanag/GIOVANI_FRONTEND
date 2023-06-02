import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'lib/axios';
import {useAuth} from 'hooks/auth';
import Layout from 'admin/layouts/Admin';
import CrudForm from 'admin/components/Crud/CrudForm';

const formConfig = {
  entityType: "User",
  fields: [
    {name: "username", label: "Username", type: "text", required: true, colSize: 6},
    {name: "email", label: "Email", type: "email", required: true, colSize: 6},
    {name: "password", label: "Password", type: "password", required: true, colSize: 6},
    {name: "password_c", label: "Password confirm", type: "password", required: true, colSize: 6},
  ],
};

function Edit() {
  const {user} = useAuth({middleware: 'auth'});
  const {id} = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users/${id}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (formData) => {
    try {
      await axios.put(`/api/users/${id}`, formData);
      // Handle successful update, e.g., redirect to user list
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <Layout>
      {userData && (
        <CrudForm mode="update" data={userData} formConfig={formConfig} onSubmit={handleSubmit}/>
      )}
    </Layout>
  );
}

export default Edit;
