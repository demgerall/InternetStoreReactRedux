import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Products.module.scss';

export const Products = ({
    title,
    style = { gridColumn: 'span 2' },
    products = [],
    amount,
}) => {
    const list = products.filter((_, i) => i < amount);

    return (
        <section className={styles.products} style={style}>
            {title && <h2>{title}</h2>}
            <div className={styles.list}>
                {list.map(
                    ({ id, images, title, category: { name: cat }, price }) => {
                        return (
                            <Link
                                to={`/products/${id}`}
                                key={id}
                                className={styles.product}
                            >
                                <div
                                    className={styles.image}
                                    // style={{
                                    //     backgroundImage: `url('../../assets/images/products/${id}.jpeg')`,
                                    // }}
                                ></div>
                                <div className={styles.wrapper}>
                                    <div className={styles.name}>
                                        <h3 className={styles.title}>
                                            {title}
                                        </h3>
                                        <div className={styles.cat}>{cat}</div>
                                    </div>
                                    <div className={styles.info}>
                                        <div className={styles.prices}>
                                            <div className={styles.price}>
                                                {price}$
                                            </div>
                                            <div className={styles.oldPrice}>
                                                {Math.floor(price * 1.3)}$
                                            </div>
                                        </div>
                                        <div className={styles.purchases}>
                                            {Math.floor(Math.random() * 20 + 1)}{' '}
                                            purchased
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    },
                )}
            </div>
        </section>
    );
};
