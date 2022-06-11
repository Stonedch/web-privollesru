import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Poster.module.scss';
import logotype from 'assets/brand/mini.svg';
import background from 'assets/backgrounds/poster.jpg';
import avatar from 'assets/avatar.png';
import { CallbackModalForm } from 'components/CallbackModalForm';

const Poster = () => {
    const { REACT_APP_API_URL } = process.env;
    const location = useLocation();
    const [firstNumber, setFirstNumber] = useState();
    const [secondNumber, setSecondNumber] = useState();

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
            });
    }, [location]);

    return (
        <div className={`${styles.poster} ${styles.screen}`}>
            <div className={styles.background}>
                <img src={background} alt='background' />
            </div>
            <div className={styles.content}>
                <div className={styles.column}>
                    <Link className={styles.brand} to='/'>
                        <img src={logotype} alt='logotype' />
                    </Link>
                    <h2 className={styles.title}>Строите дом или дачу?</h2>
                    <p className={styles.par}>
                        Пиломатериал оптом и в розницу от производителя по
                        доступным ценам! Доставим любой объём в короткие сроки в
                        любую точку Мира. Работаем по всей территории РФ и за ее
                        пределами!
                    </p>
                </div>
                <div className={styles.avatar}>
                    <img src={avatar} alt='avatar' />
                </div>
                <div className={styles.column}>
                    <h3 className={styles.title}>Позвоните нам</h3>
                    <p className={styles.par}>
                        и мы вышлем Вам прайс на интересующую Вас продукцию!
                    </p>
                    {firstNumber ? (
                        <a className={styles.phone} href={`tel:${firstNumber}`}>
                            {firstNumber}
                        </a>
                    ) : null}
                    {secondNumber ? (
                        <a
                            className={styles.phone}
                            href={`tel:${secondNumber}`}
                        >
                            {secondNumber}
                        </a>
                    ) : null}
                    <CallbackModalForm title='Заказать звонок' />
                </div>
            </div>
        </div>
    );
};

export { Poster };
