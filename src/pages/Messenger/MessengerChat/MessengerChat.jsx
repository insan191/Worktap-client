import React, { useEffect, useRef, useState } from 'react'
import { AiOutlinePaperClip } from 'react-icons/ai'
import defaultProfile from '../../../assets/assetsProfile/defaultProfile.jpg'
import EmojiPicker from 'emoji-picker-react'
import { BsFillEmojiLaughingFill } from 'react-icons/bs'

const MessengerChat = () => {
	const [message, setMessage] = useState('')
	const [showPopover, setShowPopover] = useState(false)
	const popoverRef = useRef(null)
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
		<div className='messenger__chat'>
			<div className="messenger__chat-cap">
				<img src={defaultProfile} alt="avatar" className="messenger__chat-cap-avatar" />
				<div className="messenger__chat-cap-info">
					<p className="messenger__chat-cap-name">Никита Евреев
					</p>
					<p className="messenger__chat-cap-status">
						Онлайн
					</p>
				</div>
			</div>
			<div className="messenger__chat-messages">
			</div>
			<div className="messenger__chat-footer">
				<button className="messenger__chat-footer-clip">
					<AiOutlinePaperClip fill='#ffffff' size='20px' />
				</button>
				<div className="messenger__chat-footer-block">
					<textarea value={message} onChange={(e) => setMessage(e.target.value)} className="messenger__chat-footer-field" type='text' placeholder='Введите Ваше сообщение' />
					<button className="messenger__chat-footer-emojiButton" onClick={() => setShowPopover(prev => !prev)}>
						<BsFillEmojiLaughingFill fill='#656084' size='20px' />
					</button>
					{showPopover && <div ref={popoverRef} className='messenger__chat-footer-emoji' >
						<EmojiPicker
							onEmojiClick={e => setMessage(message + e.emoji)}
							theme='light'
							emojiStyle='google'
							height='300px'
							skinTonePickerLocation='PREVIEW'
							searchDisabled='true'
							lazyLoadEmojis='trues'
						/>
					</div>}
				</div>


				<button className="messenger__chat-footer-send">
					Отправить
				</button>
			</div>
		</div>
	)
}

export default MessengerChat