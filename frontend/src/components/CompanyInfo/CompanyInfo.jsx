import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './CompanyInfo.module.scss';

const CompanyInfo = (props) => {
    const { className } = props;
    const { REACT_APP_API_URL } = process.env;
    const location = useLocation();
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();
    const [workingTime, setWorkingTime] = useState(null);

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
                setWorkingTime(response.working_time);
            });
    }, [location]);

    return (
        <div className={`${styles.info} ${className}`}>
            <div className={styles.top}>
                {firstNumber ? (
                    <a href={`tel:${firstNumber}`}>{firstNumber}</a>
                ) : null}
                {secondNumber ? (
                    <a href={`tel:${secondNumber}`}>{secondNumber}</a>
                ) : null}
            </div>
            <div className={styles.bottom}>
                {workingTime ? <span>{workingTime}</span> : null}
            </div>
        </div>
    );
};

export { CompanyInfo };
