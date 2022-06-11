import React, { useState } from 'react';
import styles from './Map.module.scss';
import { YMaps, Map as YMap, Placemark } from 'react-yandex-maps';
import { Form } from 'components/Form';
import { Label } from 'components/Label';
import { Input } from 'components/Input';
import { ModalWindow } from 'components/ModalWindow';

const Map = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [desc, setDesc] = useState('');
    const [message, setMessage] = useState('');
    const [isOpenMessage, setIsOpenMessage] = useState(false);

    const toggleMessage = () => {
        setIsOpenMessage(!isOpenMessage);
    };

    const mapData = {
        center: [56.32096154775088, 44.00040879833978],
        zoom: 11,
        behaviors: [],
    };

    const points = [[56.349375, 44.080403]];

    const handleSubmit = (event) => {
        event.preventDefault();

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

        fetch('http://stch.online/api/v1/callbacks/', requestOptions).then(
            (response) => {
                if (response.ok) {
                    setMessage('Заявка была отправлена!');
                    toggleMessage();
                } else {
                    setMessage('Ошибка: попробуйте позднее!');
                    toggleMessage();
                }
            }
        );

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
                <YMaps>
                    <YMap
                        className={styles.ymap}
                        defaultState={mapData}
                        width={'100%'}
                    >
                        {points
                            ? points.map((point) => (
                                  <Placemark geometry={point} />
                              ))
                            : null}
                    </YMap>
                </YMaps>
            </div>
        </>
    );
};

export { Map };
