import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Clients.module.scss';
import { Title } from 'components/Title';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

const Clients = () => {
    const location = useLocation();
    const { REACT_APP_API_URL } = process.env;
    const [clients, setClients] = useState();

    useEffect(() => {
        const endpoint = REACT_APP_API_URL + 'clients/';

        fetch(endpoint)
            .then((response) => response.json())
            .then((response) => setClients(response.results));
    }, [location]);

    return clients ? (
        <div className={`${styles.clients} ${styles.screen}`}>
            <div className={styles.content}>
                <Title
                    title='Наши клиенты'
                    subtitle='За 10 лет мы поставили лес и пиломатериалы более, чем 100 компаниям'
                />
                <Swiper
                    speed={400}
                    spaceBetween={10}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoHeight={true}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        799: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {clients.map((client) => (
                        <SwiperSlide className={styles.slide}>
                            <img src={client.picture} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    ) : null;
}

export { Clients };
