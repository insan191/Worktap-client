import React from 'react'
import {
	AiFillClockCircle,
	AiOutlineFileText,
	AiOutlineGlobal,
	AiTwotoneBank,
} from 'react-icons/ai'
import { TbLanguage } from 'react-icons/tb'

const MyProfilePopover = ({ data }) => {
	const { education, country, certificates, languages } = data
	return (
		<ul className='myProfile__info-more-popover'>
			<li className='myProfile__info-more-item'>
				<div className='myProfile__info-more-item-left'>
					<AiOutlineGlobal />
					<span className='myProfile__info-more-item-left-text'>Страна:</span>
				</div>
				<div className='myProfile__info-more-item-right'>
					<span className='myProfile__info-more-item-right-text'>
						{country}
					</span>
				</div>
			</li>
			<li className='myProfile__info-more-item'>
				<div className='myProfile__info-more-item-left'>
					<AiFillClockCircle />
					<span className='myProfile__info-more-item-left-text'>На сайте:</span>
				</div>
				<div className='myProfile__info-more-item-right'>
					<span className='myProfile__info-more-item-right-text'>3 года</span>
				</div>
			</li>
			<li className='myProfile__info-more-item'>
				<div className='myProfile__info-more-item-left'>
					<AiTwotoneBank />
					<span className='myProfile__info-more-item-left-text'>
						Образование:
					</span>
				</div>
				<div className='myProfile__info-more-item-right'>
					<ul className='myProfile__info-more-item-right-list'>
						<li className='myProfile__info-more-item-right-text'>
							{education}
						</li>
					</ul>
				</div>
			</li>
			<li className='myProfile__info-more-item'>
				<div className='myProfile__info-more-item-left'>
					<TbLanguage />
					<span className='myProfile__info-more-item-left-text'>
						Знание языков:
					</span>
				</div>
				<div className='myProfile__info-more-item-right'>
					<ul className='myProfile__info-more-item-right-list'>
						<li className='myProfile__info-more-item-right-text'>
							{languages}
						</li>
					</ul>
				</div>
			</li>
			<li className='myProfile__info-more-item'>
				<div className='myProfile__info-more-item-left'>
					<AiOutlineFileText />
					<span className='myProfile__info-more-item-left-text'>
						Сертификаты:
					</span>
				</div>
				<div className='myProfile__info-more-item-right'>
					<ul className='myProfile__info-more-item-right-list'>
						<li className='myProfile__info-more-item-right-text'>
							{certificates}
						</li>
					</ul>
				</div>
			</li>
		</ul>
	)
}

export default MyProfilePopover
