import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
    return (
        <footer className={styles.container} id="contact">
            <div>
                <h2 className={styles.title}>Contact Me</h2>
                <ul className={styles.socials}>
                    <li>
                        <a href="https://www.instagram.com/kesaltunan/" target="_blank" rel="noopener noreferrer">
                            <img src={getImageUrl("contact/Instagram.png")} alt="Instagram" className={styles.ig} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/@oshitergantungfyp" target="_blank" rel="noopener noreferrer">
                            <img src={getImageUrl("contact/TikTok.png")} alt="TikTok" className={styles.tiktok} />
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com/OkeShinee" target="_blank" rel="noopener noreferrer">
                            <img src={getImageUrl("contact/TwitterX.png")} alt="Twitter" className={styles.twitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Shinee000ZZZ" target="_blank" rel="noopener noreferrer">
                            <img src={getImageUrl("contact/GitHub.png")} alt="GitHub" className={styles.github} />
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.copyright}>
                <p>©Copyright 2024. All Rights Reserved. shineggod@gmail.com</p>
            </div>
        </footer>
    );
};

export default Contact;
