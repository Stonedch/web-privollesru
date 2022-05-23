import React from 'react';
import styles from './Form.module.scss';
import { Button } from 'components/Button';
import { Label } from 'components/Label';
import { Input } from 'components/Input';

function Form(props) {
    const { className } = props;

    return (
        <form className={`${styles.form} ${className}`} method='POST' action=''>
            <h3 className={styles.title}>
                Мы заинтересованы в сотрудничестве с Вами!
            </h3>
            <span className={styles.subtitle}>
                Мы заинтересованы в сотрудничестве с Вами! Отправьте заявку на
                интересующую Вас продукцию нашей компании и в течении 15 минут с
                Вами свяжется наш менеджер.
            </span>
            <Label title='Введите номер телефона'>
                <Input
                    type='tel'
                    name='phone_number'
                    placeholder='+7 (___) ___ __ __'
                />
            </Label>
            <Label title='Ваше имя'>
                <Input type='text' name='name' placeholder='Иван' />
            </Label>
            <Label title='Наименование, размер и вид продукции'>
                <Input
                    type='text'
                    name='description'
                    placeholder='Кедр, имитация бруса 19х135'
                />
            </Label>
            <Button>Отправить заявку</Button>
        </form>
    );
}

export { Form };
