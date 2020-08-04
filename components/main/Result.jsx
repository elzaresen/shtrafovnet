import React from 'react';

const Result = (props) => {
	const { loading, status, result, code } = props;
	const renderResult = () => {
		switch (status) {
			default:
				return null;
			case 200:
				return (
					<div className='result'>
						<h2>
							Постановление #{ result['number'] }
						</h2>
						<table>
							<tbody>
							<tr>
								<th>Свидетельство о регистрации:</th>
								<td>{ result['doc_number'] }</td>
							</tr>
							<tr>
								<th>Дата постановления:</th>
								<td>{ result['bill_at'] }</td>
							</tr>
							<tr>
								<th>Нарушение:</th>
								<td>{ result.name }</td>
							</tr>
							<tr>
								<th>Получатель платежа:</th>
								<td>{ result['payee_username'] }
								</td>
							</tr>
							<tr>
								<th>ИНН:</th>
								<td>{ result['payee_inn'] }</td>
							</tr>
							<tr>
								<th>КПП:</th>
								<td>{ result['payee_kpp'] }</td>
							</tr>
							<tr>
								<th>Расчетный счет:</th>
								<td>{ result['payee_bank_account'] }</td>
							</tr>
							<tr>
								<th>Банк получателя:</th>
								<td>{ result['payee_bank_name'] }</td>
							</tr>
							<tr>
								<th>БИК:</th>
								<td>{ result['payee_bank_bik'] }</td>
							</tr>
							<tr>
								<th>ОКТМО(ОКАТО):</th>
								<td>{ result['payee_oktmo'] }</td>
							</tr>
							<tr>
								<th>КБК:</th>
								<td>{ result['kbk'] }</td>
							</tr>
							<tr>
								<th>Сумма штафа:</th>
								<td>{ result['amount'] }</td>
							</tr>
							{ result['discount_at'] &&
							<tr>
								<th>Скидка:</th>
								<td>активна до { result['discount_at'] }</td>
							</tr>
							}
							<tr>
								<th>К оплате:</th>
								<td>{ result['amount_to_pay'] }</td>
							</tr>
							</tbody>
						</table>
					</div>
				);
			case 404:
				return (
					<div className='error'>
						<img src='/not-found.svg' alt=''/>
						<h2>
							Штраф { code } не найден
						</h2>
					</div>
				);
			case 500:
				return (
					<div className='error'>
						<img src='/error.svg' alt=''/>
						<h2>
							Произошла ошибка
						</h2>
					</div>
				);
		}
	};

	const renderLoading = () => {
		return (
			<div className='loading'>
				<img src='/loading.svg' alt=''/>
				<h2>
					Загрузка
				</h2>
			</div>
		);
	};

	return (
		loading ? renderLoading() : renderResult()

	);
};

export default Result;