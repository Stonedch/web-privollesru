import React, { useState, useEffect, useRef } from 'react';
import styles from './Products.module.scss';
import { Title } from 'components/Title';
import { Item } from './Item';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CallbackModalForm } from 'components/CallbackModalForm';

const Products = () => {
    const { REACT_APP_API_URL } = process.env;
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [products, setProducts] = useState(null);

    const endpoint = REACT_APP_API_URL + 'products/';

    useEffect(() => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((response) => setProducts(response.results));
    });

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
                                button={() => (
                                    <CallbackModalForm title='узнать цены' />
                                )}
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
        </div>
    ) : null;
};

export { Products };
