import React from 'react';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { NotFound } from 'components/NotFound';

function NotFoundView() {
    return (
        <>
            <Header />
            <NotFound />
            <Footer />
        </>
    );
}

export { NotFoundView };
