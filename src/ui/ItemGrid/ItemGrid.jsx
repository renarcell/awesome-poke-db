import React, { Component } from 'react';
import styles from './ItemGrid.module.css';



export default function ItemGrid(props) {
	return (
		<div className={styles.itemGrid}>
			{props.children}
		</div>
	);
};
