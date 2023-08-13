import React from 'react';
import styles from '../styles/DocumentCard.module.css';

interface DocumentCardProps {
  document: {
    title: string;
    content: string;
    accessLevel: string;
  };
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
  const { title, content, accessLevel } = document;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{content}</p>
      <div className={styles.details}>
        <span className={styles.accessLevel}>{accessLevel}</span>
        {/* You might want to add more details here */}
      </div>
    </div>
  );
};

export default DocumentCard;
