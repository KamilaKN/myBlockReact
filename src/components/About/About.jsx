import React from 'react';
import styles from "./about.module.css"

const About = () => {
    return (
        <section className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.about}>
                <p className={styles.title}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Officia, consequatur sint? Commodi totam explicabo
                    eius itaque et.
                </p>
            </div>
            <p className={styles.descr}>
                More about me
            </p>
        </div>
    </section>
    );
};

export default About;