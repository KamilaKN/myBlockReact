import React from 'react';
import styles from './header.module.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <Link to="/" className={styles.link}>Home</Link>
                <Link to="/posts" className={styles.link}>Blog</Link>
                <Link to="/about" className={styles.link}>About me</Link>
            </nav>
        </header>
    );
};

export default Header;