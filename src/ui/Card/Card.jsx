import React from 'react';
import styles from './Card.module.css';

export default function Card({imageUrl, name, types}) {
	return (
		<li className={styles.card}>
			<img className={styles.cardImage} src={imageUrl} alt="item" />
			<h2 className={styles.cardTitle}>{name}</h2>
			<h3 className={styles.cardTypeText}>
				{types}
			</h3>
		</li>
	)
};
