import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeView } from 'views/HomeView';
import { PrivacyView } from 'views/PrivacyView';
import { ContactsView } from 'views/ContactsView';
import { NotFoundView } from 'views/NotFoundView';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomeView />} />
            <Route path='/privacy/' element={<PrivacyView />} />
            <Route path='/contacts/' element={<ContactsView />} />
            <Route path='*' element={<NotFoundView />} />
        </Routes>
    );
}

export { AppRoutes };
