import React from 'react'
import { Link } from 'react-router-dom'
import { useGetAllWorksQuery } from '../../../redux/reducers/api/work'
import './HomeActual.scss'
import HomeActualCard from './HomeActualCard.jsx/HomeActualCard'
const HomeActual = () => {
		const search = ''
		const category = ''
		const subcategory = ''
		const criteria = ''
		const minNumber = ''
		const maxNumber = ''
	const { data = [] } = useGetAllWorksQuery({
		search,
		category,
		subcategory,
		criteria,
		minNumber,
		maxNumber,
	})
	return (
		<div className='home__actual'>
			<div className='container'>
				<div className='home__actual-content'>
					<h2 className='home__actual-title'>Актуальные ворки</h2>
					<div className='home__actual-row'>
						{data.map(
							({ creator, _id, description: { desc }, main: { title } }) => (
								<HomeActualCard
									title={title}
									creator={creator}
									key={_id}
									id={_id}
									desc={desc}
								/>
							)
						)}

						<Link className='home__actual-card-more' to={'/works'}>
							<p className='home__actual-card-more-text'>Смотреть все ворки</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeActual
