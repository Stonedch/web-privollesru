import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Form.module.scss';
import { Button } from 'components/Button';
import { Label } from 'components/Label';
import { Input } from 'components/Input';

function Form(props) {
    const { title, subtitle, className, buttonText, children, onSubmit } =
        props;

    const form = children ? (
        children
    ) : (
        <>
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
            <Label title='Наименование, размер и вид продукции'>
                <Input
                    type='text'
                    name='description'
                    placeholder='Кедр, имитация бруса 19х135'
                />
            </Label>
        </>
    );

    return (
        <form className={`${styles.form} ${className}`} onSubmit={onSubmit}>
            {title ? <h3 className={styles.title}>{title}</h3> : null}
            {subtitle ? (
                <span className={styles.subtitle}>{subtitle}</span>
            ) : null}
            {form}
            <Button type='submit'>
                {buttonText ? buttonText : 'Отправить заявку'}
            </Button>
            <Link className={styles.privacy} to='/privacy/'>
                Нажимая кнопку «{buttonText ? buttonText : 'Отправить заявку'}»
                вы соглашаетесь с политикой обработки персональных данных
            </Link>
        </form>
    );
}

export { Form };
