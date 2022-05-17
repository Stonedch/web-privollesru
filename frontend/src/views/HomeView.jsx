import React from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Benefits } from 'components/Benefits';
import { Clients } from 'components/Clients';
import { Questions } from 'components/Questions';

function HomeView() {
    return (
        <>
            <Header />
            <Benefits />
            <Clients />
            <Questions />
            <Footer />
        </>
    );
}

export { HomeView };

