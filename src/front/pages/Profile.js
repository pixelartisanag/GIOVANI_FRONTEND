import {useAuth} from 'hooks/auth'
import {useInitTheme} from 'hooks/initTheme';
import Layout from 'front/components/Layouts/front/AppLayout'
import Breadcrumb from 'front/components/Breadcrumb';
import Author from 'front/components/Author';

function Profile() {
    const {user} = useAuth({middleware: 'guest'})
    useInitTheme();

    return (
        <Layout>
            <Breadcrumb title="Profile" type="" />
            <Author user={user} />
        </Layout>
    );
}

export default Profile;
