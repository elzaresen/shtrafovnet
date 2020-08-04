import React, { useState } from 'react';

const Form = () => {
	const [code, setCode] = useState('0355431010119102401042373');

	const onChange = (e) => {
		setCode(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();

	};

	return (
		<form className='code-form' action='' onSubmit={ onSubmit }>
			<input type='number' placeholder='Введите УИН' onChange={ onChange } value={ code }/>
			<input type='submit' value='Найти'/>
		</form>
	);
};

export default Form;