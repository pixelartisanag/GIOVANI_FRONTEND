import {useAuth} from 'hooks/auth'
import Layout from 'admin/layouts/Admin';
import CrudForm from "admin/components/Crud/CrudForm";

const formConfig = {
    entityType: "User",
    fields: [
        { name: "username", label: "Username", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        { name: "password", label: "Password", type: "password", required: true },
    ],
};

function UserCreate() {
    const {user} = useAuth({middleware: 'auth'})
    const handleSubmit = async (formData) => {
        // Handle form submission, e.g., create a new user
    };

    return (
        <Layout>
            <CrudForm mode="create" formConfig={formConfig} onSubmit={handleSubmit} />
        </Layout>
    );
}

export default UserCreate
