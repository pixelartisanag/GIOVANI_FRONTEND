import React from 'react';
import Layout from 'front/components/Layouts/front/AppLayout';
import Breadcrumb from 'front/components/Breadcrumb';
import ContactComponent from 'front/components/Contact';

const Contact = () => (
    <Layout>
        <Breadcrumb title="Contact" type="" />
        <ContactComponent />
    </Layout>
)

export default Contact
