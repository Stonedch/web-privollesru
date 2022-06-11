import React, { useEffect, useState } from 'react';
import styles from './Contacts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPhone,
    faLocationDot,
    faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { Square } from './Square';
import { useLocation } from 'react-router';

const Contacts = () => {
    const { REACT_APP_API_URL } = process.env;
    const location = useLocation();
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();
    const [address, setAddress] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const endpoint = REACT_APP_API_URL + 'settings/';

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(endpoint, requestOptions)
            .then((response) => response.json())
            .then((response) => {
                setFirstNumber(response.first_number);
                setSecondNumber(response.second_number);
                setAddress(response.address);
                setEmail(response.email);
            });
    }, [location]);

    return (
        <div className={[styles.contacts, styles.screen].join(' ')}>
            <div className={styles.content}>
                <Square
                    icon={<FontAwesomeIcon icon={faLocationDot} />}
                    title='Наш офис'
                >
                    {address ? <p>{address}</p> : null}
                </Square>
                <Square
                    icon={<FontAwesomeIcon icon={faPhone} />}
                    title='Номера телефона'
                >
                    {firstNumber ? (
                        <a href={`tel:${firstNumber}`}>{firstNumber}</a>
                    ) : null}
                    {secondNumber ? (
                        <a href={`tel:${secondNumber}`}>{secondNumber}</a>
                    ) : null}
                </Square>
                <Square
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                    title='Email'
                >
                    {email ? <a href={`mailto:${email}`}>{email}</a> : null}
                </Square>
            </div>
        </div>
    );
};

export { Contacts };
