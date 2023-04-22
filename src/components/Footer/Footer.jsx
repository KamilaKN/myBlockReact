import React from "react";
import styles from "./footer.module.css";
import inImg from "./in.png";
import githubImg from "./github.png";
import gImg from "./g.png";
import mImg from "./m.png";
import youtubeImg from "./youtube.png";
import twitterImg from "./twitter.png";

const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                <p className={styles.title}>
                    Lorem, ipsum dolor sit amet consectetur.
                </p>
                <div className={styles.footerImg}>
                    <img src={inImg} alt="" />
                    <img src={githubImg} alt="" />
                    <img src={gImg} alt="" />
                    <img src={mImg} alt="" />
                    <img src={youtubeImg} alt="" />
                    <img src={twitterImg} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
