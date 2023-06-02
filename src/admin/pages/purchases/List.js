import React, { useState, useEffect } from "react";
import { useAuth } from "hooks/auth";
import { formatDate } from "utils/utils";
import Layout from "admin/layouts/Admin";
import TableList from "admin/views/TableList";
import axios from 'lib/axios';
import { useNavigate } from 'react-router-dom';
import { Badge, Button, Card, Container, Row, Col } from "react-bootstrap";

function PurchaseList() {
    const apiEndpoint = 'api/purchases';

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
        navigate(`/admin/purchases/${itemId}/edit`);
    };

    const onDelete = async (itemId) => {
        try {
            await axios.delete(`${apiEndpoint}/${itemId}`);
            setData(data.filter((item) => item.id !== itemId));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const renderStatusBadge = (status) => {
        const variant = status === "confirmed" ? "success" : "danger";
        return <Badge variant={variant}>{status}</Badge>;
    };

    const columns = [
        { header: "ID", field: (row) => row.id },
        { header: "User", field: (row) => row.user.name },
        { header: "Plan", field: (row) => row.plan.name },
        { header: "Total", field: (row) => row.total },
        {
            header: "Status",
            field: (row) => renderStatusBadge(row.status),
            sortable: false,
            cell: (row) => renderStatusBadge(row.status),
        },
        {
            header: "Date",
            field: (row) => formatDate(row.created_at),
        }
    ];

    return (
        <Layout>
            <TableList
                data={data}
                columns={columns}
                onEdit={onEdit}
                onDelete={onDelete}
                title="Purchases"
                subtitle="Purchases List"
            />
        </Layout>
    );
}

export default PurchaseList;
