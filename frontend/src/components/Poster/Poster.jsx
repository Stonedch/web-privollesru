import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Poster.module.scss';
import { Button } from 'components/Button';
import logotype from 'assets/brand/mini.svg';
import background from 'assets/backgrounds/poster.jpg';
import avatar from 'assets/avatar.png';

const Poster = () => {
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
                    <h2>Строите дом или дачу?</h2>
                    <p>
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
                    <h3>Позвоните нам</h3>
                    <p>и мы вышлем Вам прайс на интересующую Вас продукцию!</p>
                    <a href='tel: +79877575718'>+7 (987) 757-57-18</a>
                    <a href='tel: +79103866661'>+7 (910) 386-66-61</a>
                    <Button opacity={true}>Заказать звонок</Button>
                </div>
            </div>
        </div>
    );
};

export { Poster };
