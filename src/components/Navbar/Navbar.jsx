import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import "aos/dist/aos.css";
import AOS from "aos";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi
    });
  }, []);

  const judul = `SULTAN'S PORTFOLIO`;

  return (
    <nav className={styles.navbar} id="home">
      <a
        href="#home"
        className={styles.title}
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-delay="200"
      >
        {judul}
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/Close.png")
              : getImageUrl("nav/Menu.png")
          }
          alt="Menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a
              href="#about"
              className={styles.apa}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={styles.apa}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={styles.apa}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={styles.apa}
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
