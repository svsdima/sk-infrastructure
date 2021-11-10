import React from 'react';
import VacancyDescr from './VacancyDescr';

const VacancyItem = ({vacancy}) => {
	const {name, responsibilities, requirements, conditions, img, position} =
		vacancy;

	function PositionLeft() {
		return (
			<div className='vacancies_left'>
				<div className='container'>
					<div className='vacancies_left_wrapper'>
						<div className='vacancies_left_descr'>
							<VacancyDescr vacancy={vacancy} />
						</div>
						<div className='vacancies_left_bg'>
							<img src={img} alt={img} />
						</div>
					</div>
				</div>
			</div>
		);
	}

	function PositionRight() {
		return (
			<div className='vacancies_right'>
				<div className='container'>
					<div className='vacancies_right_wrapper'>
						<div className='vacancies_right_bg'>
							<img src={img} alt={img} />
						</div>
						<div className='vacancies_right_descr'>
							<VacancyDescr vacancy={vacancy} />
						</div>
					</div>
				</div>
			</div>
		);
	}

	function CheckPosition() {
		const isPosition = position;

		if (isPosition === 'left') {
			return <PositionLeft />;
		}
		return <PositionRight />;
	}

	return <CheckPosition />;
};

export default VacancyItem;
