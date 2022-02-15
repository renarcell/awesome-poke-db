import React, { PureComponent } from 'react';
import style from './Button.module.css';

export default function Button({onClick, type, children, className}) {
	let choosedStyle = (type === "bubble" ? style.bubbleButton : style.Button) + ' ' + className;
	return (
		<button className={choosedStyle} onClick={onClick}>{ children }</button>
	);
}