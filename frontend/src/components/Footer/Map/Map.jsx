import React, { useEffect, useState } from 'react';
import styles from './Map.module.scss';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import { Form } from 'components/Form';
import { Label } from 'components/Label';
import { Input } from 'components/Input';
import { ModalWindow } from 'components/ModalWindow';
import { useLocation } from 'react-router-dom';

const Map = () => {
    const { REACT_APP_API_URL } = process.env;
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');
    const [message, setMessage] = useState('');
    const [isOpenMessage, setIsOpenMessage] = useState(false);
    const [mapData, setMapData] = useState(null);
    const [points, setPoints] = useState(null);
    const location = useLocation();

    const toggleMessage = () => {
        setIsOpenMessage(!isOpenMessage);
    };

    useEffect(() => {
        const endpoint = REACT_APP_API_URL + 'settings/';

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };

        fetch(endpoint, requestOptions)
            .then((response) => response.json())
            .then((response) => {
                setMapData({
                    center: [response.map_x, response.map_y],
                    zoom: response.map_zoom,
                });
                setPoints(
                    response.points.map((point) => [point.map_x, point.map_y])
                );

                console.log(points);
            });
    }, [location]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const endpoint = REACT_APP_API_URL + 'callbacks/';

        if (name == '') {
            setMessage('Ошибка: укажите Ваше имя!');
            toggleMessage();
            return false;
        } else if (phone == '') {
            setMessage('Ошибка: укажите Ваш номер телефона!');
            toggleMessage();
            return false;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ fullname: name, phone_number: phone }),
        };

        fetch(endpoint, requestOptions).then((response) => {
            if (response.ok) {
                setMessage('Заявка была отправлена!');
                toggleMessage();
            } else {
                setMessage('Ошибка: попробуйте позднее!');
                toggleMessage();
            }
        });

        setName('');
        setPhone('');
        setDesc('');

        return true;
    };

    return (
        <>
            <ModalWindow isOpen={isOpenMessage} onClose={toggleMessage}>
                {message}
            </ModalWindow>
            <div className={styles.map}>
                <div className={styles.content}>
                    <div className={styles.container}>
                        <Form
                            title='Мы заинтересованы в сотрудничестве с Вами!'
                            subtitle='Мы заинтересованы в сотрудничестве с Вами! Отправьте заявку на интересующую Вас продукцию нашей компании и в течении 15 минут с Вами свяжется наш менеджер.'
                            onSubmit={handleSubmit}
                            className={styles.form}
                        >
                            <Label title='Ваше имя'>
                                <Input
                                    type='text'
                                    name='name'
                                    placeholder='Иван'
                                    value={name}
                                    onChange={(event) =>
                                        setName(event.target.value)
                                    }
                                />
                            </Label>
                            <Label title='Введите номер телефона'>
                                <Input
                                    type='tel'
                                    name='phone_number'
                                    placeholder='+7 (___) ___ __ __'
                                    value={phone}
                                    onChange={(event) =>
                                        setPhone(event.target.value)
                                    }
                                />
                            </Label>
                            <Label title='Наименование, размер и вид продукции'>
                                <Input
                                    type='text'
                                    name='desc'
                                    placeholder='Кедр, имитация бруса 19x135'
                                    value={desc}
                                    onChange={(event) =>
                                        setDesc(event.target.value)
                                    }
                                />
                            </Label>
                        </Form>
                    </div>
                </div>
                {mapData ? (
                    <YMaps>
                        <YMap
                            className={styles.ymap}
                            defaultState={mapData}
                            width={'100%'}
                        >
                            {points
                                ? points.map((point) => (
                                      <>
                                          {console.log(point)}
                                          <Placemark geometry={point} />
                                      </>
                                  ))
                                : null}
                        </YMap>
                    </YMaps>
                ) : null}
            </div>
        </>
    );
};

export { Map };
