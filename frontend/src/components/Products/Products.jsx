import React, { useState, useEffect, useRef } from 'react';
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

const Products = () => {
    const { REACT_APP_API_URL } = process.env;
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [products, setProducts] = useState(null);
    const [isOpenWindow, setIsOpenWindow] = useState(false);

    const endpoint = REACT_APP_API_URL + 'products/';

    useEffect(() => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((response) => setProducts(response.results));
    });

    const toggleWindow = () => {
        setIsOpenWindow(!isOpenWindow);
    };

    return products ? (
        <div className={styles.screen}>
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
                    navigation
                >
                    {products.map((product) => (
                        <SwiperSlide>
                            <Item
                                background={product.picture}
                                title={product.title}
                                subtitle={product.subtitle}
                                additional={product.additionals}
                                buttonOnClick={toggleWindow}
                            />
                        </SwiperSlide>
                    ))}
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
    ) : null;
};

export { Products };
