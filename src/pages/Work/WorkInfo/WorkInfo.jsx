import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useParams } from 'react-router-dom'
import { useGetWorkQuery } from '../../../redux/reducers/api/work'
import { categoriesArr } from '../../../utils/categoriesArr'
import './WorkInfo.scss'
import WorkInfoAccordion from './WorkInfoAccordion/WorkInfoAccordion'
import WorkInfoAsideAccordion from './WorkInfoAsideAccordion/WorkInfoAsideAccordion'
import WorkInfoProfile from './WorkInfoProfile/WorkInfoProfile'
import WorkInfoSwiper from './WorkInfoSwiper/WorkInfoSwiper'
const WorkInfo = () => {
	const { id } = useParams()
	const { data = {}, isLoading } = useGetWorkQuery(id)
	if (isLoading) {
		return <h2>loading...</h2>
	}
	const {
		main: { title, category, subcategory },
		gallery: { photos },
		description: { desc, questions },
		requirements,
		packet,
		creator,
	} = data

	const breadCategory = () => {
		return categoriesArr.find(({ value }) => value === category).text
	}
	const breadSubcategory = () => {
		return categoriesArr
			.find(({ value }) => value === category)
			.subcategories.find(({ value }) => value === subcategory).text
	}
	return (
		<div className='work__info'>
			<div className='work__main'>
				<h2 className='work__main-title'>{title}</h2>
				<div className='work__main-breadcrumbs'>
					<p className='work__main-breadcrumbs-item'>{breadCategory()}</p>
					<span>
						<IoIosArrowForward fill=' #b0aad0' />
					</span>
					<p className='work__main-breadcrumbs-item'>{breadSubcategory()}</p>
					<span>
						<IoIosArrowForward fill=' #b0aad0' />
					</span>
					<p className='work__main-breadcrumbs-item'>{title}</p>
				</div>
				<WorkInfoSwiper photos={photos} />
				<p className='work__main-desc'>{desc}</p>
				{questions && <WorkInfoAccordion questions={questions} />}
				<div className='work__main-requirements'>
					<h3 className='work__main-requirements-title'>
						Требования к заказчику
					</h3>
					<p className='work__main-requirements-text'>{requirements}</p>
				</div>
			</div>
			<div className='work__aside'>
				{packet && <WorkInfoAsideAccordion packet={packet} />}
				<WorkInfoProfile creator={creator} />
			</div>
		</div>
	)
}

export default WorkInfo
