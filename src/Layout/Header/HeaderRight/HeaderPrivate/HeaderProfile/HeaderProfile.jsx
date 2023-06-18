import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { userSelector } from '../../../../../redux/reselect'
import { textLengthLimit } from '../../../../../utils/textLengthLimit'
import HeaderPopover from './HeaderPopover/HeaderPopover.jsx'

const HeaderProfile = () => {
	const {
		user: { name, surname, photo },
	} = useSelector(userSelector)
	const [showPopover, setShowPopover] = useState(false)
	const popoverRef = useRef(null)
	const handleClick = () => {
		setShowPopover(prev => !prev)
	}
	const handleClickOutside = event => {
		if (popoverRef.current && !popoverRef.current.contains(event.target)) {
			setShowPopover(false)
		}
	}
	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div className='header__right-private-profile'>
			<div
				className={
					showPopover === true
						? 'header__right-private-profile-trigger active'
						: 'header__right-private-profile-trigger'
				}
				onClick={handleClick}
			>
				<p className='header__right-private-profile-name'>
					{textLengthLimit(`${name} ${surname}`, 14)}
				</p>
				<img
					src={`${process.env.REACT_APP_URL}${photo}`}
					alt='Avatar'
					className='header__right-private-profile-avatar'
				/>
				<span
					className={`header__right-private-profile-arrow ${
						showPopover && 'active'
					}`}
				>
					<IoIosArrowDown />
				</span>
			</div>
			{showPopover && <HeaderPopover popoverRef={popoverRef} />}
		</div>
	)
}

export default HeaderProfile
