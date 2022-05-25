import React from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Clients } from 'components/Clients';
import { AboutUs } from 'components/AboutUs';

function AboutUsView() {
    return (
        <>
            <Header />
            <AboutUs />
            <Clients />
            <Footer />
        </>
    );
}

export { AboutUsView };
