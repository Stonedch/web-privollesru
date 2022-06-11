import React from 'react';
import styles from './Item.module.scss';

const Item = (props) => {
    const { background, title, subtitle, additional } = props;

    return (
        <div className={styles.card}>
            <div className={styles.background}>
                <img src={background ? background : null} alt='slide' />
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{title ? title : null}</h3>
                <h4 className={styles.subtitle}>
                    {subtitle ? subtitle : null}
                </h4>
                <div className={styles.additional}>
                    {additional
                        ? additional.map((item) => (
                              <div className={styles.item}>
                                  <h5 className={styles.title}>
                                      {item['title'] ? item['title'] : null}
                                  </h5>
                                  <p className={styles.desc}>
                                      {item['body'] ? item['body'] : null}
                                  </p>
                              </div>
                          ))
                        : null}
                </div>
            </div>
        </div>
    );
};

export { Item };
