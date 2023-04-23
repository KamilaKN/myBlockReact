import React from "react";
import postImg from "./Rectangle 7 (1).png"
import styles from "./singlePostPage.module.css"

const SinglePostPage = () => {
    return (
        <article className={styles.post}>
            <h1 className={styles.title}>My Title</h1>
            <img src={postImg} alt="" className={styles.img} />
            <p className={styles.descr}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Placeat eum asperiores eos rem unde fuga ea. Porro non dolores
                tempore perferendis molestias necessitatibus doloremque
                aspernatur vel, aliquid assumenda rerum sequi voluptate rem
                mollitia! Animi mollitia voluptate quo, possimus voluptates eius
                et voluptatibus neque, modi quidem quaerat libero fugit
                voluptatum optio tenetur, culpa tempora! Cum excepturi est,
                eaque neque voluptate perspiciatis libero veritatis, nihil
                placeat debitis aspernatur reiciendis voluptatem beatae ipsum?
            </p>
            <p className={styles.date}>Published 11 april 2023</p>
        </article>
    );
};

export default SinglePostPage;
