import React, { useState } from 'react';

import styles from "./Navbar.module.css";
import { getImageUrl} from "../../utils";

export const Navbar = () => {

    const[menuOpen, setMenuOpen] = useState(false);

    return <nav className={styles.navbar} id='home'>
        <a href="#home" className={styles.title}>
            SULTAN S PORTFOLIO
        </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={
                menuOpen 
                ? getImageUrl("nav/Close.png") 
                : getImageUrl("nav/Menu.png")
                } 
            alt="Menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
            >
                <li>
                    <a href="#about" className={styles.apa}>About</a>
                </li>
                <li>
                    <a href="#experience" className={styles.apa}>Experience</a>
                </li>
                <li>
                    <a href="#projects" className={styles.apa}>Projects</a>
                </li>
                <li>
                    <a href="#contact" className={styles.apa}>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
};