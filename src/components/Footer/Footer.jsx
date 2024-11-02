import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../utils/routes';

import styles from './Footer.module.scss';

import LOGO from '../../assets/icons/logo_white.svg';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME} draggable="false">
                    <img src={LOGO} alt="DemnShop" draggable="false" />
                    <p className={styles.logo_text}>
                        <span>DEMN</span>
                        <u>shop</u>
                    </p>
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by
                <a
                    href="https://github.com/demgerall"
                    className={styles.github_ref}
                    target="_blank"
                    rel="noreferrer"
                >
                    {' '}
                    demgerall
                </a>
            </div>

            <div className={styles.social_block}>
                <a
                    href="https://github.com/demgerall"
                    className={styles.github}
                    target="_blank"
                    rel="noreferrer"
                ></a>
                <a
                    href="https://vk.com/chebakovdemid"
                    className={styles.vk}
                    target="_blank"
                    rel="noreferrer"
                ></a>
                <a
                    href="https://t.me/demgerall"
                    className={styles.telegram}
                    target="_blank"
                    rel="noreferrer"
                ></a>
            </div>
        </footer>
    );
};
