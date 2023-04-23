import React, { useEffect, useState } from "react";
import styles from "./singlePostPage.module.css";
import { useParams } from "react-router-dom";
import postService from "../../services/posts";

const SinglePostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        postService.getPost(id).then((res) => setPost(res.data));
    });
    return (
        <article className={styles.post}>
            <h1 className={styles.title}>{post.title}</h1>
            <img src={post.img} alt="" className={styles.img} />
            <p className={styles.descr}>{post.descr}</p>
            <p className={styles.date}>{post.date}</p>
        </article>
    );
};

export default SinglePostPage;
