import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { PrivacyView } from 'views/PrivacyView';
import { ContactsView } from 'views/ContactsView';
import { NotFoundView } from 'views/NotFoundView';
import { AboutUsView } from 'views/AboutUsView';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/privacy/' element={<PrivacyView />} />
            <Route path='/contacts/' element={<ContactsView />} />
            <Route path='/about/' element={<AboutUsView />} />
            <Route path='*' element={<NotFoundView />} />
        </Routes>
    );
}

export { AppRoutes };
