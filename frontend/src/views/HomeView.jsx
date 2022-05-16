import React from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Benefits } from 'components/Benefits';
import { Clients } from 'components/Clients';

function HomeView() {
    return (
        <>
            <Header />
            <Clients />
            <Benefits />
            <Footer />
        </>
    );
}

export { HomeView };

