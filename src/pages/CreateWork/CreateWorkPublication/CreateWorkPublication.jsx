import React from 'react'
import { useNavigate } from 'react-router-dom'
import photo from '../../../assets/assetsCreateWork/assetsCreateWorkPublication/publication.png'
import { useCreateWorkMutation } from '../../../redux/reducers/api/work'
const CreateWorkPublication = ({ setPage, publication }) => {
	const nav = useNavigate()
	const [createWork] = useCreateWorkMutation()
	const {
		packet: { economy, standard, business },
	} = publication
	const price = Math.min(
		[economy.price, standard.price, business.price].filter(
			item => item !== undefined
		)
	)	
	const pub = { ...publication, price }
	const handlePublication = async () => {
		await createWork(pub).unwrap()
		nav(-1)
	}

	return (
		<div className='createWork__publication'>
			<h2 className='createWork__publication-title'>Поздравляем!</h2>
			<h3 className='createWork__publication-subtitle'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh et
				volutpat sagittis, turpis sed cum massa.
			</h3>
			<img
				src={photo}
				alt='publication'
				className='createWork__publication-img'
			/>
			<div className='createWork__navButtons'>
				<button
					className='createWork__navButtons-prev'
					onClick={() => setPage('createWorkGallery')}
				>
					Назад
				</button>
				<button
					className='createWork__navButtons-next'
					type='button'
					onClick={handlePublication}
				>
					Опубликовать
				</button>
			</div>
		</div>
	)
}

export default CreateWorkPublication
