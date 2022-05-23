import React from 'react';
import styles from './Map.module.scss';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';

const Map = () => {
    const mapData = {
        center: [56.32096154775088, 44.00040879833978],
        zoom: 11,
    };

    const points = [
        [56.349375, 44.080403],
    ];

    return (
        <YMaps className={styles.container}>
            <YMap
                defaultState={mapData}
                width={'100%'}
                height={'80vh'}
            >
                {points ? (
                    points.map((point) => (
                        <Placemark geometry={point} />
                    ))
                ) : (
                    null
                )}
            </YMap>
        </YMaps>
    );
};

export { Map };
