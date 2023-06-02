import React, { useState, useEffect } from "react";
import { useAuth } from "hooks/auth";
import Layout from "admin/layouts/Admin";
import TableList from "admin/views/TableList";
import axios from 'lib/axios';
import { useNavigate } from 'react-router-dom';

function List() {
    const apiEndpoint = 'api/users';
    const { user } = useAuth({ middleware: "auth" });

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [apiEndpoint]);
    const navigate = useNavigate();
    const onEdit = (itemId) => {
        navigate(`/admin/users/${itemId}/edit`);
    };

    const onDelete = async (itemId) => {
        try {
            await axios.delete(`${apiEndpoint}/${itemId}`);
            setData(data.filter((item) => item.id !== itemId));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const columns = [
        { header: "ID", field: "id" },
        { header: "Name", field: "name" },
        { header: "Email", field: "email" },
        { header: "Created at", field: "created_at" },
    ];

    return (
        <Layout>
            <TableList
                data={data}
                columns={columns}
                onEdit={onEdit}
                onDelete={onDelete}
                title="List"
                subtitle="List List"
            />
        </Layout>
    );
}

export default Users;
