import styles from "./Hero.module.css";
import { useEffect } from "react";
import { getImageUrl } from "../../utils";
import "aos/dist/aos.css";
import AOS from "aos";

export const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
    });
  }, []);

  return (
    <section className={styles.container}>
      <div
        className={styles.content}
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <h1 className={styles.title}>Hi! I am Sultan</h1>
        <p className={styles.description}>
          Fullstack Developer and UI/UX Designer
        </p>
        <div className={styles.buttons}>
          <a href="mailto:shineggod@gmail.com" className={styles.contactBtn}>
            Contact Me!
          </a>
          <a
            href="/cv/CV_ATS_SultanSM.pdf"
            className={styles.contactBtn}
            download="CV_ATS_SultanSM.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/Programmers.svg")}
        alt="Your Photo on Hero Section"
        data-aos="fade-right"
        data-aos-delay="500"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottBlur} />
    </section>
  );
};

export default Hero;
