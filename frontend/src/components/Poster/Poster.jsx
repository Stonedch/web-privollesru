import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Poster.module.scss';
import { ModalWindow } from 'components/ModalWindow';
import { Form } from 'components/Form';
import { Label } from 'components/Label';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import logotype from 'assets/brand/mini.svg';
import background from 'assets/backgrounds/poster.jpg';
import avatar from 'assets/avatar.png';

const Poster = () => {
    const [isOpenWindow, setIsOpenWindow] = useState(false);

    const toggleWindow = () => {
        setIsOpenWindow(!isOpenWindow);
    };

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
                    <a className={styles.phone} href='tel: +79877575718'>
                        +7 (987) 757-57-18
                    </a>
                    <a className={styles.phone} href='tel: +79103866661'>
                        +7 (910) 386-66-61
                    </a>
                    <Button onClick={() => toggleWindow()} opacity={true}>
                        Заказать звонок
                    </Button>
                </div>
            </div>
            <ModalWindow isOpen={isOpenWindow} onClose={toggleWindow}>
                <Form
                    title='Мы заинтересованы в сотрудничестве с Вами!'
                    subtitle='Оставьте заявку в наш Экспортный отдел! Узнайте стоимость доставки до Вашей страны!'
                >
                    <Label title='Ваше имя'>
                        <Input type='text' name='name' placeholder='Иван' />
                    </Label>
                    <Label title='Введите номер телефона'>
                        <Input
                            type='tel'
                            name='phone_number'
                            placeholder='+7 (___) ___ __ __'
                        />
                    </Label>
                </Form>
            </ModalWindow>
        </div>
    );
};

export { Poster };
