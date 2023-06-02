import {useAuth} from 'hooks/auth'
import {useInitTheme} from 'hooks/initTheme';
import Layout from 'front/components/Layouts/front/AppLayout'
import Breadcrumb from 'front/components/Breadcrumb';
import PricingPlans from 'front/components/PricingPlans';

function Plans() {
    const {user} = useAuth({middleware: 'guest'})
    useInitTheme();

    return (
        <Layout>
            <Breadcrumb title="Plans" type="" />
            <PricingPlans user={user} />
        </Layout>
    );
}

export default Plans;
