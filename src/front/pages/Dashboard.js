import {useAuth} from 'hooks/auth'
import Layout from 'front/components/Layouts/front/AppLayout'
import Breadcrumb from 'front/components/Breadcrumb';
import {useInitTheme} from 'hooks/initTheme';

function Dashboard() {
    const {user} = useAuth({middleware: 'guest'})
    useInitTheme();
    return (
        <Layout>
            <Breadcrumb title="Dashboard Page" type="" />
        </Layout>
    );
}

export default Dashboard
