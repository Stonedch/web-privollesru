import React, { useState } from 'react';
import { Button } from 'components/Button';
import { ModalWindow } from 'components/ModalWindow';
import { Form } from 'components/Form';
import { Label } from 'components/Label';
import { Input } from 'components/Input';

const CallbackModalForm = (props) => {
    const { title, isOpen } = props;
    const [isOpenWindow, setIsOpenWindow] = useState(isOpen);
    const [isOpenMessage, setIsOpenMessage] = useState(false);
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const toggleWindow = () => {
        setIsOpenWindow(!isOpenWindow);
    };

    const toggleMessage = () => {
        setIsOpenMessage(!isOpenMessage);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (name == '') {
            setMessage('Ошибка: укажите Ваше имя!');
            toggleWindow();
            toggleMessage();
            return false;
        } else if (phone == '') {
            setMessage('Ошибка: укажите Ваш номер телефона!');
            toggleWindow();
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
                    toggleWindow();
                } else {
                    setMessage('Ошибка: попробуйте позднее!');
                    toggleMessage();
                    toggleWindow();
                }
            }
        );

        setName('');
        setPhone('');

        return true;
    };

    return (
        <>
            {title ? (
                <Button onClick={() => toggleWindow()} opacity={true}>
                    {title}
                </Button>
            ) : null}
            <ModalWindow isOpen={isOpenMessage} onClose={toggleMessage}>
                {message}
            </ModalWindow>
            <ModalWindow isOpen={isOpenWindow} onClose={toggleWindow}>
                <Form
                    title='Мы заинтересованы в сотрудничестве с Вами!'
                    subtitle='Оставьте заявку в наш Экспортный отдел! Узнайте стоимость доставки до Вашей страны!'
                    buttonOnClick={() => toggleWindow()}
                    onSubmit={handleSubmit}
                >
                    <Label title='Ваше имя'>
                        <Input
                            type='text'
                            name='name'
                            placeholder='Иван'
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </Label>
                    <Label title='Введите номер телефона'>
                        <Input
                            type='tel'
                            name='phone_number'
                            placeholder='+7 (___) ___ __ __'
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                    </Label>
                </Form>
            </ModalWindow>
        </>
    );
};

export { CallbackModalForm };
