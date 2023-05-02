import React from 'react';
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const activeClass = ({isActive}) => {
        return isActive ? `${styles.active} ${styles.link}` : styles.link
    }
    return (
        <header>
            <nav className={styles.nav}>
                <NavLink to="/" className={activeClass}>Home</NavLink>
                <NavLink to="/posts" className={activeClass}>Blog</NavLink>
                <NavLink to="/about" className={activeClass}>About me</NavLink>
                <NavLink to="/register" className={activeClass}>Register</NavLink>
                <NavLink to="/login" className={activeClass}>Login</NavLink>
            </nav>
        </header>
    );
};

export default Header;