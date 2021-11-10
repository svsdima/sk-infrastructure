import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';

const Form = () => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const inputCard = useRef();

	const handleChange = () => {
		const cardValue = inputCard.current.value
			.replace(/\D/g, '')
			.match(/(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})/);
		inputCard.current.value = !cardValue[2]
			? cardValue[1]
			: `${cardValue[1]}-${cardValue[2]}${`${
					cardValue[3] ? `-${cardValue[3]}` : ''
			  }`}${`${cardValue[4] ? `-${cardValue[4]}` : ''}`}`;
		const numbers = inputCard.current.value.replace(/(\D)/g, '');
		setPhone(numbers);
	};
	useEffect(() => {
		handleChange();
	}, [phone]);

	function handleSubmit(event) {
		handleChange();
		event.preventDefault();
		console.log('name:', name);
		console.log('phone:', phone);
	}
	return (
		<div className='form'>
			<form action='#' id='form' className='form_body' onSubmit={handleSubmit}>
				<div className='form_title'>Свяжитесь с нами</div>
				<div className='form_subtitle'>
					Задайте вопрос, пришлите коммерческое предложение или пригласите на
					тендер
				</div>
				<div className='form_wrapper'>
					<div className='form_item'>
						<label htmlFor='formName' className='form_label'>
							Представьтесь, пожалуйста*
						</label>
						<input
							id='formName'
							type='text'
							name='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							className='form_input'
						/>
					</div>
					<div className='form_item'>
						<label htmlFor='formPhone' className='form_label'>
							Ваш телефон*
						</label>
						<input
							id='formPhone'
							type='tel'
							name='phone'
							value={phone}
							ref={inputCard}
							onChange={handleChange}
							className='form_input'
						/>
					</div>
					<div className='form_item'>
						<div className='file'>
							<div className='file_item'>
								<input
									id='formImage'
									accept='.jpg, .png, .gif'
									type='file'
									name='image'
									className='file_input'
								/>
								<button className='file_btn'>
									<span>Прикрепить файл</span>
									<div className='file_btn_icon'>
										<img src='/img/form_file.svg' alt='form_file' />
									</div>
								</button>
							</div>
							<div className='file_preview'></div>
						</div>
					</div>
					<button type='submit' className='btn'>
						<span>Перезвоните мне</span>
					</button>
				</div>
				<div className='checkbox'>
					<input
						id='formAgreement'
						type='checkbox'
						name='agreement'
						className='checkbox_input'
					/>
					<label htmlFor='formAgreement' className='checkbox_label'>
						<span>
							Я соглашаюсь с <Link to='/'>политикой конфиденциальности</Link>*
						</span>
					</label>
				</div>
			</form>
		</div>
	);
};

export default Form;
