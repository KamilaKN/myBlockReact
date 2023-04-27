import React, { useEffect, useState } from "react";
import styles from "./singlePostPage.module.css";
import { useParams } from "react-router-dom";
import postService from "../../services/posts";
import Loader from "../../components/Loader";

const SinglePostPage = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    const [isPostLoading, setIsPostLoading] = useState(false)

    useEffect(() => {
        document.documentElement.scroll({
            top: "0",
            behavior: "smooth"
        })
        setIsPostLoading(true)
        postService.getPost(id).then((res) => {
            setPost(res.data)
            setIsPostLoading(false)
        });
    }, []);

    if(isPostLoading) {
        return <Loader/>
    }

    return (
        <article className={styles.post}>
            <h1 className={styles.title}>{post.title}</h1>
            <img src={post.img} alt="" className={styles.img} />
            <p className={styles.descr}>{post.descr}</p>
            <p className={styles.date}>{post.cretedAt}</p>
        </article>
    );
};

export default SinglePostPage;
