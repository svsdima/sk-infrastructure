import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import togglePopup from './functions/TogglePopup';

const Popup = () => {
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
		<div className='popup'>
			<div className='popup_container'>
				<div className='close' onClick={togglePopup}></div>
				<div>
					<form
						action='#'
						id='popup_form'
						className='popup_form'
						onSubmit={handleSubmit}
					>
						<div className='popup_title'>Заказать обратный звонок</div>
						<div className='popup_wrapper'>
							<div className='popup_item'>
								<label htmlFor='formName' className='popup_label'>
									Представьтесь, пожалуйста*
								</label>
								<input
									id='formName'
									type='text'
									name='name'
									value={name}
									onChange={(e) => setName(e.target.value)}
									className='popup_input'
								/>
							</div>
							<div className='popup_item'>
								<label htmlFor='formPhone' className='popup_label'>
									Ваш телефон*
								</label>
								<input
									id='formPhone'
									type='tel'
									name='phone'
									value={phone}
									ref={inputCard}
									onChange={handleChange}
									className='popup_input'
								/>
							</div>
							<div className='checkbox'>
								<input
									id='popupAgreement'
									type='checkbox'
									name='agreement'
									className='checkbox_input'
								/>
								<label htmlFor='popupAgreement' className='checkbox_label'>
									<span>
										Я соглашаюсь с
										<Link to='/'>политикой конфиденциальности</Link>*
									</span>
								</label>
							</div>
							<button type='submit' className='btn'>
								<span>Перезвоните мне</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Popup;
