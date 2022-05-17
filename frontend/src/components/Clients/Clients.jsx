import React from 'react';
import styles from './Clients.module.scss';
import { Title } from 'components/Title';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import slide00 from 'assets/our-clients/client01.png';
import slide01 from 'assets/our-clients/client02.png';
import slide02 from 'assets/our-clients/client03.png';
import slide03 from 'assets/our-clients/client04.png';
import slide04 from 'assets/our-clients/client05.png';
import slide05 from 'assets/our-clients/client06.png';
import slide06 from 'assets/our-clients/client07.png';
import slide07 from 'assets/our-clients/client08.png';
import slide08 from 'assets/our-clients/client09.png';
import slide09 from 'assets/our-clients/client10.png';
import slide10 from 'assets/our-clients/client11.png';

function Clients() {
    return (
        <div className={`${styles.clients} ${styles.screen}`}>
            <div className={styles.content}>
                <Title
                    title='Наши клиенты'
                    subtitle='За 10 лет мы поставили лес и пиломатериалы более, чем 100 компаниям'
                />
                <Swiper
                    speed={400}
                    spaceBetween={10}
                    slidesPerView={5}
                    centeredSlides={true}
                    loop={true}
                    autoHeight={true}
                    navigation={{
                        delay: 300,
                        disableOnInteractive: false,
                    }}
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide className={styles.slide}>
                        <img src={slide00} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <img src={slide01} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <img src={slide02} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <img src={slide03} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <img src={slide04} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <img src={slide05} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <img src={slide06} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <img src={slide07} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <img src={slide08} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <img src={slide09} />
                    </SwiperSlide>
                    <SwiperSlide className={styles.slide}>
                        <img src={slide10} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export { Clients };
