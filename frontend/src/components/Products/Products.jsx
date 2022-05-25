import React, { useState, useRef } from 'react';
import styles from './Products.module.scss';
import { Title } from 'components/Title';
import { Item } from './Item';
import { ModalWindow } from 'components/ModalWindow';
import { Form } from 'components/Form';
import { Label } from 'components/Label';
import { Input } from 'components/Input';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import card00 from 'assets/products/card00.jpg';

const Products = () => {
    const [isOpenWindow, setIsOpenWindow] = useState(false);
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);

    const toggleWindow = () => {
        setIsOpenWindow(!isOpenWindow);
    };

    return (
        <div className={`${styles.clients} ${styles.screen}`}>
            <div className={styles.content}>
                <Title title='Наша продукция' />
                <Swiper
                    speed={400}
                    spaceBetween={10}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoHeight={true}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: navigationPrevRef.current,
                        nextEl: navigationNextRef.current,
                    }}
                >
                    <SwiperSlide>
                        <Item
                            background={card00}
                            title='Круглый лес'
                            subtitle='ГОСТ 9463-88, Сорт 1-3, 19-50см. и выше'
                            additional={[
                                {
                                    title: 'Хвойные породы',
                                    desc: 'Сосна, ель, лиственница, кедр',
                                },
                                {
                                    title: 'Лиственные породы',
                                    desc: 'Осина, береза',
                                },
                            ]}
                            buttonOnClick={() => {
                                toggleWindow();
                            }}
                        />
                    </SwiperSlide>
                    <div
                        className={`${styles.button} ${styles.prev}`}
                        ref={navigationPrevRef}
                    />
                    <div
                        className={`${styles.button} ${styles.next}`}
                        ref={navigationNextRef}
                    />
                </Swiper>
            </div>
            <ModalWindow isOpen={isOpenWindow} onClose={toggleWindow}>
                <Form
                    title='Мы заинтересованы в сотрудничестве с Вами!'
                    subtitle='Оставьте заявку в наш Экспортный отдел! Узнайте стоимость доставки до Вашей страны!'
                >
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
                </Form>
            </ModalWindow>
        </div>
    );
};

export { Products };
