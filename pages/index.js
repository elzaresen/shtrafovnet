import React, { useState } from 'react';
import Head from 'next/head';
import Form from '../components/main/Form';
import Result from '../components/main/Result';

export default function Home() {
	const [result, setResult] = useState({});
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState(0);
	const [code, setCode] = useState(null)

	const fetchResult = async (code) => {
		setCode(code)
		setLoading(true);
		const response = await fetch(`https://test-task.shtrafovnet.com/fines/${ code }`);
		setStatus(response.status);

		if (response.ok) {
			const result = await response.json();
			setResult(result);
		}

		setLoading(false);
	};

	return (
		<div className='container'>
			<Head>
				<title>Штрафов.Нет</title>
				<link rel='icon' href='/favicon.ico'/>
			</Head>
			<main className='main'>
				<img src='/logo.svg' alt=''/>
				<h1 className='description'>
					Получение информации о штрафе по УИН
				</h1>
				<Form fetch={ fetchResult }/>
				<Result result={ result } status={ status } loading={ loading } code={code}/>
			</main>
		</div>
	);
}
