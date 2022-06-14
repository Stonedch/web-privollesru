import React from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Benefits } from 'components/Benefits';
import { Clients } from 'components/Clients';
import { Questions } from 'components/Questions';
import { AboutUs } from 'components/AboutUs';
import { Poster } from 'components/Poster';
import { Products } from 'components/Products';

const ProductsView = () => {
    return (
        <>
            <Header />
            <Products />
            <Questions />
            <Footer />
        </>
    );
};

export { ProductsView };
