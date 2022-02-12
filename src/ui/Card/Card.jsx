import React, { Component } from 'react';
import styles from './Card.module.css';

export default class Card extends Component {
	static Image = ({style = styles.cardImage, imageUrl}) => {
		return <img className={style} src={imageUrl} alt="item" />;
	}

	static Title = ({style = styles.cardTitle, name, capitalize = true}) => {
		return <h2 className={style}>{name}</h2>;
	}

	static Type = ({style=styles.cardTypeText}, typeTitle) => {
		return <h3 className={style}>{typeTitle}</h3>;
	}

	render() {
		const {children} = this.props;
		return (
			<li className={styles.card}>
				{children}
			</li>
		)
	}
};
