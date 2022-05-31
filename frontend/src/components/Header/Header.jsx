import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Brand } from 'components/Brand';
import { CompanyInfo } from 'components/CompanyInfo';
import { Button } from 'components/Button';
import { ModalWindow } from 'components/ModalWindow';
import { Form } from 'components/Form';
import { Label } from 'components/Label';
import { Input } from 'components/Input';
import { Nav } from './Nav';

const Header = () => {
    const [isOpenWindow, setIsOpenWindow] = useState(false);

    const toggleWindow = () => {
        setIsOpenWindow(!isOpenWindow);
    };

    return (
        <header className={[styles.header, styles.screen].join(' ')}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <Brand href='/' />
                    <div className={styles.right}>
                        <Nav />
                        <CompanyInfo className={styles.info} />
                    </div>
                </div>
                <div className={styles.bottom}>
                    <h1 className={styles.title}>
                        Приволжская лесная компания
                    </h1>
                    <h2 className={styles.subtitle}>
                        Поставляем качественный лес и пиломатериалы
                    </h2>
                    <span className={styles.additional}>
                        В любых количествах точно в срок по РФ и на экспорт.
                    </span>
                    <Button onClick={() => toggleWindow()} opacity={true}>
                        Каталог продукции
                    </Button>
                    <ModalWindow isOpen={isOpenWindow} onClose={toggleWindow}>
                        <Form
                            title='Мы заинтересованы в сотрудничестве с Вами!'
                            subtitle='Оставьте заявку в наш Экспортный отдел! Узнайте стоимость доставки до Вашей страны!'
                            buttonOnClick={() => toggleWindow()}
                        >
                            <Label title='Ваше имя'>
                                <Input
                                    type='text'
                                    name='name'
                                    placeholder='Иван'
                                />
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
            </div>
        </header>
    );
};

export { Header };
