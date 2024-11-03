import React from 'react';

import styles from './Poster.module.scss';

import BG from '../../assets/images/new_pc.png';

export const Poster = () => {
    return (
        <section className={styles.home}>
            <div className={styles.title}>BIG SALE 20%</div>
            <div className={styles.product}>
                <div className={styles.text}>
                    <div className={styles.subtitle}>
                        THE BESTSELLER OF 2024
                    </div>
                    <h1 className={styles.head}>
                        LENNON R2D2 WITH <wbr /> NVIDIA 5090 TI
                    </h1>
                    <button className={styles.shopnow}>Shop now</button>
                </div>
                <div className={styles.image}>
                    <img src={BG} alt="New PC product" draggable="false" />
                </div>
            </div>
        </section>
    );
};
