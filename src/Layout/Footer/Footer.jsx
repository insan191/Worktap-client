import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebook } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { categoriesArr } from '../../utils/categoriesArr'
import './Footer.scss'
const Footer = () => {
	const nav = useNavigate()
	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer__content'>
					<div className='footer__nav'>
						<div className='footer__nav-card'>
							<h2 className='footer__nav-card-title'>Топ категории</h2>
							<ul className='footer__nav-card-list'>
								{categoriesArr.map(({ value, text }) => (
									<li
										className='footer__nav-card-item'
										onClick={() => {
											console.log(value)
											nav('/exchange')
										}}
										key={value}
									>
										{text}
									</li>
								))}
							</ul>
						</div>
						<div className='footer__nav-card'>
							<h2 className='footer__nav-card-title'>О Проекте</h2>
							<ul className='footer__nav-card-list'>
								<li className='footer__nav-card-item'>О Нас</li>
								<li className='footer__nav-card-item'>Как Это Работает</li>
								<li className='footer__nav-card-item'>Политика Приватности</li>
								<li className='footer__nav-card-item'>Правила Пользования </li>
								<li className='footer__nav-card-item'>Пресса о нас </li>
							</ul>
						</div>
						<div className='footer__nav-card'>
							<h2 className='footer__nav-card-title'>Поддержка</h2>
							<ul className='footer__nav-card-list'>
								<li className='footer__nav-card-item'>Контакты</li>
								<li className='footer__nav-card-item'>Политика Безопасности</li>
								<li className='footer__nav-card-item'>FAQ</li>
							</ul>
						</div>
						<div className='footer__nav-card'>
							<h2 className='footer__nav-card-title'>Follow</h2>
							<div className='footer__nav-card-icons'>
								<span className='footer__nav-card-icon'>
									<FaFacebook />
								</span>
								<span className='footer__nav-card-icon'>
									<BsTwitter />
								</span>
								<span className='footer__nav-card-icon'>
									<BsInstagram />
								</span>
								<span className='footer__nav-card-icon'>
									<AiFillLinkedin />
								</span>
							</div>
						</div>
					</div>
					<p className='footer__bottom'>
						Copyright @ 2023 | WorkTap – Worktap.KG. All Rights Reserved
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
