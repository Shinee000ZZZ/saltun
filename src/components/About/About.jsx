import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
    <section className={styles.container} id={"about"}>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/ProgAbout.svg")} 
            alt="Gambar developer yang tampan nan rupawan" 
            className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/Frontend.svg")} alt="icon html5" className={styles.iconItem}/>
                    <div className={styles.aboutItemtext}>
                        <h3>Frontend Developer</h3>
                        <p>I am a Frontend Developer with experience in building website using HTML, CSS, ReactJS.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/Backend.svg")} alt="icon code"className={styles.iconItem}/>
                    <div className={styles.aboutItemtext}>
                        <h3>Backend Developer</h3>
                        <p>I am a Backend Developer with experience in building website using PHP.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/Figma.svg")} alt="icon sigma mewing" className={styles.iconItem}/>
                    <div className={styles.aboutItemtext}>
                        <h3>UI/UX Designer</h3>
                        <p>I am an UI/UX Designer with experience in creating user-friendly interfaces using Figma.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    );
    };
