import React, { useState } from 'react';

const Form = (props) => {
	const [code, setCode] = useState('1881013619111100103');

	const evaluationMethod = (number, attempt) => {
		let step = 0;
		if (attempt === 2) step = 2;

		let sum = 0;

		number.split('').map((s, index) => {
			return sum += +s * (((index + step) % 10) + 1);
		});
		return sum % 11;
	};

	const evaluateLastDigit = (number) => {
		let x = evaluationMethod(number, 1);
		if (x === 10) {
			x = evaluationMethod(number, 2);
			if (x === 10) {
				x = 0;
			}
		}
		return x;
	};


	const onChange = (e) => {
		const code = e.target.value;
		setCode(code);
		if (code.length === 19 || code.length === 24) {
			evaluateLastDigit(code);
		}
	};

	const onSubmit = (e) => {
		e.preventDefault();
		props.fetch(code);
	};

	return (
		<>
			<form className='code-form' action='' onSubmit={ onSubmit }>
				<input type='number' placeholder='Введите УИН' onChange={ onChange } value={ code }/>
				{
					(code.length === 19 || code.length === 24) &&
					<button className='code-form__suggestions'
					        onClick={ () => setCode(code + evaluateLastDigit(code)) }>
						{ code + evaluateLastDigit(code) }
					</button>
				}
				<input type='submit' value='Найти'/>
			</form>
			<p>{ (code.length < 19 || (code.length > 20 && code.length < 24) || code.length > 25) && 'количество введенных символов не совпадает с необходимым' }</p>
		</>
	);
};

export default Form;