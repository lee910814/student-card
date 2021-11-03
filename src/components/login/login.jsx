import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    const onLogin = (event) => {
        authService.login(event.currentTarget.textContent).then(console.log);
        
    };
    return(
            <section className={styles.loginform}>
              <h1 className={styles.title}>Login</h1>
                <ul className={styles.loginlist}>
                    <li className={styles.item}>
                      <button className={styles.googlebtn}  onClick={onLogin}>
                        <img className={styles.loginpng}src="./image/google.png"/>LOGIN  WITH  GOOGLE
                      </button>
                    </li>
                    <li className={styles.item}>
                       <button  className={styles.gitbtn}onClick={onLogin}>
                         <img className={styles.loginpng} src="./image/github.png"/>LOGIN  WITH  GITHUB
                       </button>
                   </li>
                </ul>
            </section>
    )
            
};

export default Login;