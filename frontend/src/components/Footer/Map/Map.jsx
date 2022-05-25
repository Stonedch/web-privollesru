import React from 'react';
import styles from './Map.module.scss';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import { Form } from 'components/Form';

const Map = () => {
    const mapData = {
        center: [56.32096154775088, 44.00040879833978],
        zoom: 11,
        behaviors: [],
    };

    const points = [[56.349375, 44.080403]];

    return (
        <div className={styles.map}>
            <div className={styles.content}>
                <div className={styles.container}>
                    <Form
                        title='Мы заинтересованы в сотрудничестве с Вами!'
                        subtitle='Мы заинтересованы в сотрудничестве с Вами! Отправьте заявку на интересующую Вас продукцию нашей компании и в течении 15 минут с Вами свяжется наш менеджер.'
                        className={styles.form}
                    />
                </div>
            </div>
            <YMaps>
                <YMap defaultState={mapData} width={'100%'} height={'50rem'}>
                    {points
                        ? points.map((point) => <Placemark geometry={point} />)
                        : null}
                </YMap>
            </YMaps>
        </div>
    );
};

export { Map };
