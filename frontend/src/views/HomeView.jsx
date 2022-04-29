import React from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Benefits } from 'components/Benefits';

function HomeView() {
    return (
        <>
            <Header />
            <Benefits />
            <Footer />
        </>
    );
}

export { HomeView };

