import React from 'react';
import styles from './ItemList.module.css';



export default function ItemList(props) {
	return (
		<ul className={styles.itemListGrid}>
			{props.children}
		</ul>
	);
};
