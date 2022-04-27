import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeView } from 'views/HomeView';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeView />} />
        </Routes>
    );
}

export { AppRoutes };

