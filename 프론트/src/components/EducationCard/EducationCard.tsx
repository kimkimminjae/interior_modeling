import { FC } from 'react';
import { BsPatchQuestion, BsInfoCircle } from 'react-icons/bs';

import styles from './educationCard.module.scss';

interface EducationCardProps {
  title: string;
  date: string;
  details: string[];
  isLeft?: boolean;
}

const EducationCard: FC<EducationCardProps> = (props) => {

  return (
    <div className={`${styles.row} ${props.isLeft ? styles.row_1 : styles.row_2}`}>
      <section>
        <BsInfoCircle className={styles.icon} />
        <div className={styles.details}>
          <span className={styles.title}>{props.title}</span>
          <span>{props.date}</span>
        </div>
        {props.details.map((item) => (
          <p key={item}>◉ {item}</p>
        ))}
      </section>
    </div>
  );
};

export { EducationCard };
