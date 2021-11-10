import React from 'react';
import {Link} from 'react-router-dom';
import Address from '../components/Address';
import Form from '../components/Form';
import {motion} from 'framer-motion';
import {pageAnimation} from '../components/animation';

const Contacts = () => {
	return (
		<div variants={pageAnimation} initial='hidden' animate='show'>
			<div className='contacts'>
				<div className='container'>
					<div className='contacts_wrapper'>
						<div className='contacts_left'>
							<div className='links'>
								<Link to='/'>Главная</Link>/<span>Контакты</span>
							</div>
							<h2 className='title'>Контакты</h2>
							<Address />
							<Link
								to='/files/requisites.doc'
								target='_blank'
								download
								className='btn btn-download'
							>
								<div className='btn-download_icon'>
									<img src='/img/download.svg' alt='download' />
								</div>
								<span>Скачать реквизиты</span>
							</Link>
							<h3 className='descr_title'>
								Информационная карта участника тендера:
							</h3>
							<Link
								to='/files/sample.pdf'
								target='_blank'
								download
								className='btn btn-download'
							>
								<div className='btn-download_icon'>
									<img src='/img/download.svg' alt='download' />
								</div>
								<span>Скачать файл PDF</span>
							</Link>
							<Form />
						</div>
						<div className='contacts_right'>
							<img src='/img/map.jpg' alt='map' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
