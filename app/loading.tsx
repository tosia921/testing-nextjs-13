import React from 'react';
import styles from './loading.module.scss';
import BeatLoader from 'react-spinners/BeatLoader';

const loading = () => {
	return (
		<div className="flex justify-center items-center">
			<p className="text-xl">PAGE IS LOADING</p>
		</div>
	);
};

export default loading;
