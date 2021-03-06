import React, { useState, useEffect, useRef } from 'react';
import styles from './ProductsCarousel.module.scss';
import { Title } from 'components/Title';
import { Item } from './Item';
import 'swiper/scss';
import 'swiper/scss/navigation';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CallbackModalForm } from 'components/CallbackModalForm';
import { useLocation } from 'react-router-dom';

const ProductsCarousel = () => {
    const { REACT_APP_API_URL } = process.env;
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    const [products, setProducts] = useState(null);
    const location = useLocation();

    const endpoint = REACT_APP_API_URL + 'products/?show_in_top=1';

    useEffect(() => {
        fetch(endpoint)
            .then((response) => response.json())
            .then((response) => setProducts(response.results));
    }, [location]);

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

export { ProductsCarousel };
