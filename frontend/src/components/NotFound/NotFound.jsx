import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={`${styles.notfound} ${styles.screen}`}>
            <div className={styles.content}>
                <h2>404</h2>
                <h3>Что-то пошло не так, или страница не найдена...</h3>
                <Link className={styles.link} to='/'>
                    Начать с Главной страницы
                </Link>
            </div>
        </div>
    );
};

export { NotFound };
