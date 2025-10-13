import React from 'react';
import '../stylesheet/ButtonClear.css';

const ButtonClear = (props) => (
	<div className='button-clear'>
		{props.children}
	</div>
);

export default ButtonClear;