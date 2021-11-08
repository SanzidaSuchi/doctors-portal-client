import React from 'react';

import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmenrBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import Form from '../Form/Form';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <Form></Form>
        </div>
    );
};

export default Home;