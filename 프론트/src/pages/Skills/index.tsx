import { motion } from "framer-motion";

import { SkillsData } from "../../data/SkillsData";
import { SkillsBackType } from "../../data/SkillsData";
import { SkillsFrontType } from "../../data/SkillsData";
import { pageVariants, pageTransition } from "../../utils/FramerAnimation";
import styles from "./skills.module.scss";

const skillsOpen = "<AI Data Modeling>";
// const skillsClose = "<skills>";
const skillsBack = "<BackEnd>";
const skillsFront = "<FrontEnd>";

const Skills = () => {
  return (
    <div className={styles.skills}>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.skillsopen}>{skillsOpen}</h3>
          <div className={styles.skills_content}>
            {SkillsData.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target='_blank'
                rel='noreferrer'
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.skillsopen}>{skillsBack}</h3>
          <div className={styles.skills_content}>
          {SkillsBackType.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target='_blank'
                rel='noreferrer'
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        initial='init'
        animate='anim'
        exit='last'
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.wrapper}>
          <h3 className={styles.skillsopen}>{skillsFront}</h3>
          <div className={styles.skills_content}>
            {SkillsFrontType.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target='_blank'
                rel='noreferrer'
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
