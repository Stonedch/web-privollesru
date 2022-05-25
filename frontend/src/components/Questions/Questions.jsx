import React from 'react';
import styles from './Questions.module.scss';
import { Title } from 'components/Title';
import { Item } from './Item';

function Questions() {
    return (
        <div className={`${styles.questions} ${styles.screen}`}>
            <div className={styles.content}>
                <Title title='Помощь / Вопрос-ответ' />
                <Item title='Как сделать заказ?'>
                    Позвоните нам по телефону, указанному на сайте или отправьте
                    заявку на интересующую Вас продукцию, и наш менеджер
                    свяжется с вами течении 10 минут.
                </Item>
                <Item title='Как сделать заказ?'>
                    Позвоните нам по телефону, указанному на сайте или отправьте
                    заявку на интересующую Вас продукцию, и наш менеджер
                    свяжется с вами течении 10 минут.
                </Item>
            </div>
        </div>
    );
}

export { Questions };
