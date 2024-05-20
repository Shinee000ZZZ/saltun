import React from 'react'
import styles from './Contact.module.css'

export const Contact = () => {
    return (
    <footer className={styles.container} id='contact'>
        <div>
            <h2 className={styles.title}>Contact Me</h2>
            <ul className={styles.socials}>
                <a href="https://www.instagram.com/kesaltunan/" target="_blank"><img src="assets/Instagram.png" alt="" className={styles.ig}/></a>
                <a href="https://www.tiktok.com/@oshitergantungfyp" target='_blank'><img src="assets/TikTok.png" alt="" className={styles.tiktok} /></a>
                <a href="https://x.com/OkeShinee" target='_blank'><img src="assets/TwitterX.png" alt="" className={styles.twitter}/></a>
                <a href="https://github.com/Shinee000ZZZ" target='_blank'><img src="assets/GitHub.png" alt="" className={styles.github}/></a>
            </ul>
        </div>
        <div className={styles.copyright}>
            <p>©Copyright 2024. All Rights Reserved. shineggod@gmail.com</p>
            </div>
    </footer>
    )
}

export default Contact
