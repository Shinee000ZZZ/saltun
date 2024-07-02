import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export const ProjectCard = ({
    project: { title, imageSrc, description, skills, demo, source, aos, aosDelay },
}) => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    return (
        <div className={styles.container} data-aos={aos} data-aos-delay={aosDelay}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>
                        {skill}
                    </li>
                ))}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.link}>
                    Demo
                </a>
                <a href={source} className={styles.link}>
                    Source
                </a>
            </div>
        </div>
    );
};
