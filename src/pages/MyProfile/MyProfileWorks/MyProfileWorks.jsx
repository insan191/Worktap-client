import React from 'react'
import { IoMdAddCircle } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetMyWorksQuery } from '../../../redux/reducers/api/work'
import { userSelector } from '../../../redux/reselect.js'
import './MyProfileWorks.scss'
import MyProfileWorksCard from './MyProfileWorksCard/MyProfileWorksCard'
const MyProfileWorks = () => {
	const nav = useNavigate()
	const {
		user: { _id },
	} = useSelector(userSelector)
	const { id } = useParams()
	const { data = [], isLoading } = useGetMyWorksQuery(id)
	if (isLoading) {
		return <h2>loading...</h2>
	}
	const arrWorks = [...data].reverse().slice(0, 11)
	return (
		<div className='myProfile__works'>
			<div className='container'>
				<h2 className='myProfile__works-title'>
					{id === _id ? 'Мой ворки' : 'Ворки'}
				</h2>
				<div className='myProfile__works-row'>
					{id === _id && (
						<div
							className='myProfile__works-card-add'
							onClick={() => nav('/creatework')}
						>
							<IoMdAddCircle fill='#1DBF73' size='70px' />
							<span className='myProfile__works-card-add-text'>
								Создать ворк
							</span>
						</div>
					)}

					{arrWorks.map(
						({ _id, main: { title }, gallery: { photos }, price }) => (
							<MyProfileWorksCard
								title={title}
								price={price}
								_id={_id}
								photo={photos.length ? photos[0].url : ''}
								key={_id}
							/>
						)
					)}
				</div>
				{data.length > 11 && (
					<div className='myProfile__works-more'>
						<button className='myProfile__works-more-btn'>Загрузить еще</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default MyProfileWorks
