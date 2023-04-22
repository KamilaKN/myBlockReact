import React from 'react';
import styles from "./subscribe.module.css"

const Subscribe = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <p className={styles.title}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil, quas.
                </p>
                <div className={styles.subscribe}>
                    <input type="text" className={styles.input} />
                    <input type="submit" className={styles.btn}  />
                </div>
            </div>
        </section>
    );
};

export default Subscribe;