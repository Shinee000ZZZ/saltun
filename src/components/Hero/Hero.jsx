import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi! I am Sultan</h1>
        <p className={styles.description}>
          Fullstack Developer and UI/UX Designer
        </p>
        <div className={styles.buttons}>
          <a href="mailto:shineggod@gmail.com" className={styles.contactBtn}>
            Contact Me!
          </a>
          <a
            href="/assets/cv/CV_ATS_SultanSM.pdf"
            className={styles.contactBtn}
            download="Sultan_CV.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/Programmers.svg")}
        alt="Your Photo on Hero Section"
      />
      <div className={styles.topBlur} />
      <div className={styles.bottBlur} />
    </section>
  );
};

export default Hero;
