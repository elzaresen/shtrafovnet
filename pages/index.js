import Head from 'next/head';
import Form from '../components/main/Form';
import Result from '../components/main/Result';

export default function Home() {

	return (
		<div className='container'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico'/>
			</Head>
			<main className='main'>
				<img src='/logo.svg' alt=''/>
				<h1 className='description'>
					Получение информации о штрафе по УИН
				</h1>
				<Form/>
				<Result/>
			</main>
		</div>
	);
}
