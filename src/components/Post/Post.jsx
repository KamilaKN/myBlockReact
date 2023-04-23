import React from 'react';
import styles from './post.module.css'

const Post = ({img, title, descr, date}) => {
    return (
        <article className={styles.post}>
        <img src={img} alt="" className={styles.img}/>
        <div className={styles.info}>
            <p className={styles.date}>{date}</p>
            <h5 className={styles.title}>{title}</h5>
            <p className={styles.descr}>{descr}</p>
        </div>
    </article>
    );
};

export default Post;