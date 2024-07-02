import { getImageUrl } from '../../utils';
import styles from './About.module.css';
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

export const About = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, // Durasi animasi
        });
    }, []);

    return (
    <section className={styles.container} id={"about"}>
        <h2 className={styles.title} data-aos="flip-down" data-aos-delay="100">About Me</h2>
        <div className={styles.content}>
            <img 
            src={getImageUrl("about/ProgAbout.svg")} 
            alt="Gambar developer yang tampan nan rupawan" 
            className={styles.aboutImage}
            data-aos="flip-right" data-aos-delay="100"
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}data-aos="fade-right" data-aos-delay="100">
                    <img src={getImageUrl("about/Frontend.svg")} alt="icon html5" className={styles.iconItem}/>
                    <div className={styles.aboutItemtext}>
                        <h3>Frontend Developer</h3>
                        <p>I am a Frontend Developer with experience in building website using HTML, CSS, ReactJS.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}data-aos="fade-right" data-aos-delay="100">
                    <img src={getImageUrl("about/Backend.svg")} alt="icon code"className={styles.iconItem}/>
                    <div className={styles.aboutItemtext}>
                        <h3>Backend Developer</h3>
                        <p>I am a Backend Developer with experience in building website using PHP.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}data-aos="fade-right" data-aos-delay="100">
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
