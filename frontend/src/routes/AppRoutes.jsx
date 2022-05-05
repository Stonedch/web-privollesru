import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { PrivacyView } from 'views/PrivacyView';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/privacy/' element={<PrivacyView />} />
        </Routes>
    );
}

export { AppRoutes };
