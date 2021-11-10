import React from 'react';

const MainHeader = () => {
	return (
		<div className='main-header'>
			<div className='container'>
				<div className='main-header_logo'>
					<img
						className='main-header_logo-bg'
						src='../../img/main/header/main-logo.svg'
						alt='main-logo-bg'
					/>
				</div>
				<div className='main-header_wrapper'>
					<div className='main-header_list'>
						<div className='main-header_item'>
							<div className='main-header_item-img'>
								<img
									src='../../img/main/header/1-plumbing.svg'
									alt='1-plumbing'
								/>
							</div>
							<span>Монтаж сетей водоснабжения</span>
						</div>
						<div className='main-header_item'>
							<div className='main-header_item-img'>
								<img src='../../img/main/header/2-piping.svg' alt='2-piping' />
							</div>
							<span>Водоотведение и канализация</span>
						</div>
						<div className='main-header_item'>
							<div className='main-header_item-img'>
								<img
									src='../../img/main/header/3-radiator.svg'
									alt='3-radiator'
								/>
							</div>
							<span>Наружные тепловые сети и тепловые пункты </span>
						</div>
						<div className='main-header_item'>
							<div className='main-header_item-img'>
								<img
									src='../../img/main/header/4-hot_springs.svg'
									alt='4-hot_springs'
								/>
							</div>
							<span>Монтаж Ж/Б конструкций</span>
						</div>
						<div className='main-header_item'>
							<div className='main-header_item-img'>
								<img
									src='../../img/main/header/5-oak_tree.svg'
									alt='5-oak_tree'
								/>
							</div>
							<span>Благоустройство территории</span>
						</div>
					</div>
				</div>
				<ul className='main-header_work'>
					<h3 className='subtitle'>Полный комплекс работ:</h3>
					<li>проектирование</li>
					<li>согласование</li>
					<li>строительно-монтажные работы</li>
					<li>пусконаладочные работы</li>
					<li>сервисное обслуживание</li>
				</ul>
			</div>
		</div>
	);
};

export default MainHeader;
