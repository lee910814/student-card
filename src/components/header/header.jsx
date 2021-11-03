import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => (
    <header className={styles.header}>
        {onLogout && <button onClick={onLogout}>Logout</button>}
       <img className={styles.logo} src="./image/logo.png"/>     
       <button className={styles.headerbtn}>Login</button>
    </header>
    );

export default Header;