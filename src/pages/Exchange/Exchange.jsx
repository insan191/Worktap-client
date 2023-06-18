import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllOrdersQuery } from '../../redux/reducers/api/order'
import './Exchange.scss'
import ExchangeCap from './ExchangeCap/ExchangeCap'
import ExchangeCard from './ExchangeCard/ExchangeCard'
import ExchangeFilter from './ExchangeFilter/ExchangeFilter'
const Exchange = () => {
	const params = useParams()
	const [search, setSearch] = useState('')
	const [category, setCategory] = useState(
		params.category ? params.category : ''
	)
	const [subcategory, setSubcategory] = useState(
		params.subcategory ? params.subcategory : ''
	)
	const [criteria, setCriteria] = useState('title,1')
	const [minNumber, setMinNumber] = useState('')
	const [maxNumber, setMaxNumber] = useState('')
	const { data = [] } = useGetAllOrdersQuery({
		category,
		search,
		subcategory,
		criteria,
		maxNumber,
		minNumber,
	})
	return (
		<div className='exchange'>
			<ExchangeCap
				search={search}
				setSearch={setSearch}
				category={category}
				setCategory={setCategory}
				setSubcategory={setSubcategory}
				params={params}
			/>
			<div className='container'>
				<div className='exchange__content'>
					<ExchangeFilter
						criteria={criteria}
						ordersCount={data.length}
						setCriteria={setCriteria}
						maxNumber={maxNumber}
						setMaxNumber={setMaxNumber}
						minNumber={minNumber}
						setMinNumber={setMinNumber}
					/>
					<div className='exchange__row'>
						{data.map(
							({ title, budget, deadline, creator, createdAt, _id }) => (
								<ExchangeCard
									key={_id}
									_id={_id}
									title={title}
									budget={budget}
									createdAt={createdAt}
									deadline={deadline}
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

export default Exchange
