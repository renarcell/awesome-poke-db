import React from 'react';
import './PageContainer.css';

export default function PageContainer(props) {
	return (
		<div className="container">
			<div className="page-container">
				{
					props.children
				}
			</div>
		</div>
	);
};
