import {useAuth} from 'hooks/auth'
import Layout from 'admin/layouts/Admin';
import Breadcrumb from 'front/components/Breadcrumb';
import {useInitTheme} from 'hooks/initTheme';
import Dashboard from 'admin/views/Dashboard';

function AdminDashboard() {
    const {user} = useAuth({middleware: 'guest'})
    useInitTheme();
    return (
        <Layout>
            <Dashboard/>
        </Layout>
    );
}

export default AdminDashboard
