import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import styles from './Header.module.scss';

import LOGO from '../../assets/icons/logo_white.svg';
import AVATAR from '../../assets/images/standart_avatar.jpg';

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME} draggable="false">
                    <img src={LOGO} alt="DemnShop" draggable="false" />
                    <p className={styles.logo_text}>
                        <span>DEMN</span>
                        <u>shop</u>
                    </p>
                </Link>
            </div>

            <div className={styles.info}>
                <div className={styles.user}>
                    <div
                        className={styles.avatar}
                        style={{ backgroundImage: `url(${AVATAR})` }}
                    />
                    <div className={styles.username}>Guest</div>
                </div>

                <form className={styles.form}>
                    <div className={styles.input_container}>
                        <input
                            type="search"
                            name="search"
                            placeholder="Search for anything..."
                            autoComplete="off"
                            onChange={() => {}}
                            value=""
                        />
                        <p className={styles.icon}></p>
                    </div>

                    <div className={styles.box}></div>
                </form>

                <div className={styles.account}>
                    <Link to={ROUTES.FAV} className={styles.favourite}>
                        <p></p>
                    </Link>

                    <Link to={ROUTES.CART} className={styles.cart}>
                        <p></p>
                        <span className={styles.count}>2</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};
