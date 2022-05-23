import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <Link to='/'>Главная</Link>
            <Link to='/contacts/'>Контакты</Link>
            <Link to='/about/'>О нас</Link>
        </nav>
    );
};

export { Nav };
