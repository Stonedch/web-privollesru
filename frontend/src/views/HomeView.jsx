import React from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Benefits } from 'components/Benefits';
import { Clients } from 'components/Clients';
import { Questions } from 'components/Questions';
import { AboutUs } from 'components/AboutUs';
import { Poster } from 'components/Poster';
import { ProductsCarousel } from 'components/ProductsCarousel';
import { Banner } from 'components/Banner';

function HomeView() {
    return (
        <>
            <Header />
            <Banner/>
            <ProductsCarousel />
            <Benefits />
            <Clients />
            <AboutUs />
            <Poster />
            <Questions />
            <Footer />
        </>
    );
}

export { HomeView };
