import React from 'react';
import styles from './header.module.css'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/userSlice';

const Header = () => {
    const dispatch = useDispatch();

    const activeClass = ({isActive}) => {
        return isActive ? `${styles.active} ${styles.link}` : styles.link
    }
    const username = useSelector(state => state.user.currentUser?.username)
    return (
        <header>
            <nav className={styles.nav}>
                <NavLink to="/" className={activeClass}>Home</NavLink>
                <NavLink to="/posts" className={activeClass}>Blog</NavLink>
                <NavLink to="/about" className={activeClass}>About me</NavLink>
                <NavLink to="/register" className={activeClass}>Register</NavLink>
                <NavLink to="/login" className={activeClass}>Login</NavLink>
                <NavLink to="/profile" className={activeClass}>Profile</NavLink>
                <button className={styles.btn} onClick={() => dispatch(logout())}>Выйти</button>
            </nav>
            <p className={styles.username}>{username}</p>
        </header>
    );
};

export default Header;