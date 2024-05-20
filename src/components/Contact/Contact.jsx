import React from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
    return (
    <footer className={styles.container} id="contact">
        <div>
            <h2 className={styles.title}>Contact Me</h2>
            <ul className={styles.socials}>
                <a href="https://www.instagram.com/kesaltunan/" target="_blank"><img src="assets/contact/Instagram.png" alt="instaLogo" className={styles.ig}/></a>
                <a href="https://www.tiktok.com/@oshitergantungfyp" target='_blank'><img src="assets/contact/TikTok.png" alt="tiktokLogo" className={styles.tiktok} /></a>
                <a href="https://x.com/OkeShinee" target='_blank'><img src="assets/contact/TwitterX.png" alt="twtLogo" className={styles.twitter}/></a>
                <a href="https://github.com/Shinee000ZZZ" target='_blank'><img src="assets/contact/GitHub.png" alt="githLogo" className={styles.github}/></a>
            </ul>
        </div>
        <div className={styles.copyright}>
            <p>©Copyright 2024. All Rights Reserved. shineggod@gmail.com</p>
            </div>
    </footer>
    )
}

export default Contact
