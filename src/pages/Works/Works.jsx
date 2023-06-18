import React, { useState } from 'react'

import { useGetAllWorksQuery } from '../../redux/reducers/api/work'
import './Works.scss'
import WorksCap from './WorksCap/WorksCap'
import WorksCard from './WorksCard/WorksCard'
import WorksFilter from './WorksFilter/WorksFilter'
const Works = () => {
	const [search, setSearch] = useState('')
	const [category, setCategory] = useState('')
	const [subcategory, setSubcategory] = useState('')
	const [criteria, setCriteria] = useState('title,1')
	const [minNumber, setMinNumber] = useState('')
	const [maxNumber, setMaxNumber] = useState('')
	const { data = [] } = useGetAllWorksQuery({
		category,
		search,
		subcategory,
		criteria,
		maxNumber,
		minNumber,
	})
	return (
		<div className='works'>
			<WorksCap
				search={search}
				setSearch={setSearch}
				category={category}
				setCategory={setCategory}
				setSubcategory={setSubcategory}
			/>
			<div className='container'>
				<div className='works__content'>
					<WorksFilter
						criteria={criteria}
						setCriteria={setCriteria}
						maxNumber={maxNumber}
						setMaxNumber={setMaxNumber}
						minNumber={minNumber}
						setMinNumber={setMinNumber}
						worksCount={data.length}
					/>
					<div className='works__row'>
						{data.map(
							({
								gallery: { photos },
								main: { title },
								price,
								creator,
								_id,
								
							}) => (
								<WorksCard
									key={_id}
									price={price}
									image={photos[0].url}
									title={title}
									id={_id}
									creator={creator}
								/>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Works
