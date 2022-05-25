import React from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { Privacy } from 'components/Privacy';

function PrivacyView() {
    return (
        <>
            <Header />
            <Privacy />
            <Footer />
        </>
    );
}

export { PrivacyView };
