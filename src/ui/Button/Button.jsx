import React, { PureComponent } from 'react';
import style from './Button.module.css';

export default function Button({onClick}) {
	return (
		<button className={style.Button} onClick={onClick}>Load more</button>
	);
}