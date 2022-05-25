import React from 'react';
import styles from './Benefits.module.scss';
import { Circle } from './Circle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faClock,
    faPlane,
    faTree,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';

function Benefits() {
    return (
        <div className={[styles.benefits, styles.screen].join(' ')}>
            <div className={styles.content}>
                <Circle
                    title='Соблюдаем заявленные сроки'
                    subtitle='И прописываем их в договоре'
                >
                    <FontAwesomeIcon icon={faClock} />
                </Circle>
                <Circle
                    title='Работаем по РФ и на экспорт'
                    subtitle='Регулярные поставки, всегда в срок'
                >
                    <FontAwesomeIcon icon={faPlane} />
                </Circle>
                <Circle
                    title='Собственное производство'
                    subtitle='Поэтому цены ниже средних по рынку'
                >
                    <FontAwesomeIcon icon={faTree} />
                </Circle>
                <Circle
                    title='Персональный менеджер'
                    subtitle='Опытный менеджер всегда на связи'
                >
                    <FontAwesomeIcon icon={faUsers} />
                </Circle>
            </div>
        </div>
    );
}

export { Benefits };
