import React, {useState, useEffect} from "react";
import {useAuth} from "hooks/auth";
import Layout from "admin/layouts/Admin";
import TableList from "admin/views/TableList";
import axios from 'lib/axios';
import {useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';

function GalleryList() {
  const apiEndpoint = 'api/galleries';
  const {user} = useAuth({middleware: "auth"});

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint, {
          headers: {
            'X-My-Response-Header': 'json'
          }
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiEndpoint, user]);

  const navigate = useNavigate();

  const onEdit = (itemId) => {
    navigate(`/admin/galleries/${itemId}/edit`);
  };

  const onDelete = async (itemId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this gallery!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then(async (result) => {
      if (result.value) {
        try {
          await axios.delete(`${apiEndpoint}/${itemId}`);
          setData(data.filter((item) => item.id !== itemId));

          Swal.fire({
            title: 'Deleted!',
            text: 'The gallery has been deleted.',
            icon: 'success',
          });
        } catch (error) {
          console.error('Error deleting item:', error);

          Swal.fire({
            title: 'Error!',
            text: 'There was an error deleting the gallery.',
            icon: 'error',
          });
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: 'Cancelled',
          text: 'The gallery is safe :)',
          icon: 'error',
        });
      }
    });
  };

  const columns = [
    {header: "ID", field: "id"},
    {header: "Title", field: "title"},
    {header: "Featured", field: "featured"},
    {header: "Main Image", field: "main_image"},
    {header: "Plan ID", field: "plan_id"},
    {header: "Price", field: "price"},
    {header: "Published", field: "published"},
    {header: "URI", field: "uri"},
    {header: "Created At", field: "created_at"},
  ];

  return (
    <Layout>
      <TableList
        data={data}
        columns={columns}
        onEdit={onEdit}
        onDelete={onDelete}
        onCreate={() => navigate("/admin/galleries/create")} // Add this line
        title="Galleries"
        subtitle="List galleries"
      />
    </Layout>
  );
}

export default GalleryList;
