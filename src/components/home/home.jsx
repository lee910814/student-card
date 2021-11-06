import React from 'react';
import styles from './home.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Home = (props) => {
    return(
        <section className={styles.home}>
            <Header/>
                <div className={styles.content}>
                   <div className={styles.img}>
                   
                   </div>
                   <div className={styles.description}>
                       Have a nice day
                   </div>
                </div>
            <Footer/>
        </section>
    )
};

export default Home;