import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./prfilepage.module.css"

const ProfilePage = () => {
    const user = useSelector((state) => state.user.currentUser);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    });

    return (
        <section className={styles.user}>
            <div className={styles.wrapper}>
                <h1>{user?.username}</h1> 
            </div>
        </section>
    );
};

export default ProfilePage;
