import React, { useEffect, useState } from 'react';
import { AppRoutes } from './routes/AppRoutes';
import { YMInitializer } from 'react-yandex-metrika';
import { useLocation } from 'react-router-dom';

function App() {
    const { REACT_APP_API_URL } = process.env;
    const [account, setAccount] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const endpoint = REACT_APP_API_URL + 'settings/';

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(endpoint, requestOptions)
            .then((response) => response.json())
            .then((response) => {
                setAccount(response.yandex_metrika);
            });
    }, [location]);

    return (
        <>
            {account ? (
                <YMInitializer
                    accounts={[account]}
                    options={{ webvisor: true }}
                    version='2'
                />
            ) : null}
            <AppRoutes />
        </>
    );
}

export default App;
