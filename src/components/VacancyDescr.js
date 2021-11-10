import React from 'react';

const VacancyDescr = ({vacancy}) => {
	const {name, responsibilities, requirements, conditions, img, position} =
		vacancy;
	return (
		<>
			<h3 className='descr_title'>{name}</h3>
			<h4 className='descr_subtitle'>Должностные обязанности:</h4>
			<ul className='vacancies_list'>
				{responsibilities.map((responsibility) => (
					<li className='vacancies_item'>{responsibility}</li>
				))}
			</ul>
			<div
				className='vacancies_requirement'
				onClick={(e) =>
					e.target.parentElement.nextElementSibling.classList.toggle('active')
				}
			>
				<div className='vacancies_requirement_title'>Требования и условия</div>
			</div>
			<div className='vacancies_requirement_descr'>
				<div className='vacancies_requirement_list'>
					{requirements ? <h4 className='descr_subtitle'>Требования:</h4> : ''}
					{requirements ? (
						<ul>
							{requirements.map((requirement) => {
								return (
									<li className='vacancies_requirement_item'>{requirement}</li>
								);
							})}
						</ul>
					) : (
						''
					)}
				</div>
				<div className='vacancies_requirement_list'>
					{conditions ? <h4 className='descr_subtitle'>Условия:</h4> : ''}
					{conditions ? (
						<ul>
							{conditions.map((conditions) => {
								return (
									<li className='vacancies_requirement_item'>{conditions}</li>
								);
							})}
						</ul>
					) : (
						''
					)}
				</div>
			</div>
			<button className='btn'>
				<span>Откликнуться на вакансию</span>
			</button>
		</>
	);
};

export default VacancyDescr;
