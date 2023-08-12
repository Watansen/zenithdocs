import React from 'react';
import styles from '../styles/DocumentCard.module.css';

interface DocumentCardProps {
  title: string;
  description: string;
  author: string;
  date: string;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ title, description, author, date }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div className={styles.details}>
        <span className={styles.author}>{author}</span>
        <span className={styles.date}>{date}</span>
      </div>
    </div>
  );
};

export default DocumentCard;