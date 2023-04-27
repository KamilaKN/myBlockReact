import React, { useEffect, useState } from "react";
import styles from "./postPage.module.css";
import Post from "../../components/Post/Post";
import postService from "../../services/posts";
import Loader from "../../components/Loader";


const PostPage = () => {
    const [posts, setPosts] = useState([]);
    const [isPostsLoading, setIsPostsLoading] = useState(false)

    useEffect(() => {
        setIsPostsLoading(true)
        postService.get().then((res) => {
            setPosts(res.data);
            setIsPostsLoading(false)
        });
    }, []);

    if(isPostsLoading) {
        return <Loader/>
    }

    return (
        <section className={styles.posts}>
           {posts.map((post) => {
                return (
                    <Post
                        key={post._id}
                        img={post.img}
                        title={post.title}
                        descr={post.descr}
                        date={post.createdAt}
                        id={post._id}
                    />
                );
            })}
        </section>
    );
};

export default PostPage;
