import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCreateOrderMutation } from '../../redux/reducers/api/order'
import { userSelector } from '../../redux/reselect'
import './CreateOrder.scss'
import CreateOrderBudget from './CreateOrderBudget/CreateOrderBudget'
import CreateOrderCategory from './CreateOrderCategory/CreateOrderCategory'
import CreateOrderDeadline from './CreateOrderDeadline/CreateOrderDeadline'
import CreateOrderDescription from './CreateOrderDescription/CreateOrderDescription'
import CreateOrderDoc from './CreateOrderDoc/CreateOrderDoc'
import CreateOrderSubcategory from './CreateOrderSubcategory/CreateOrderSubcategory'
import CreateOrderTitle from './CreateOrderTitle/CreateOrderTitle'
const CreateOrder = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
	})
	const {
		user: { _id },
	} = useSelector(userSelector)
	const [createOrder] = useCreateOrderMutation()
	const nav = useNavigate()
	const [docs, setDocs] = useState([])
	const handleCreateOrder = async data => {
		const order = { ...data, creator: _id }
		await createOrder(order).unwrap()
		nav(-1)
	}
	return (
		<div className='createOrder'>
			<div className='container'>
				<form
					className='createOrder__content'
					onSubmit={handleSubmit(handleCreateOrder)}
				>
					<h2 className='createOrder__title'>Опубликуйте ваш заказ</h2>
					<CreateOrderTitle register={register} error={errors.title} />
					<CreateOrderDescription
						register={register}
						error={errors.description}
					/>
					<div className='createOrder__block'>
						<CreateOrderCategory register={register} error={errors.category} />
						<CreateOrderSubcategory
							register={register}
							error={errors.subcategory}
							watch={watch}
						/>
					</div>
					<CreateOrderDeadline register={register} error={errors.deadline} />
					<CreateOrderBudget register={register} error={errors.budget} />
					<h2 className='createOrder__subtitle'>Документы</h2>
					<CreateOrderDoc docs={docs} setDocs={setDocs} />
				</form>
				<div className='createOrder__navButtons'>
					<button
						className='createOrder__navButtons-prev'
						onClick={() => nav(-1)}
					>
						Назад
					</button>
					<button
						className='createOrder__navButtons-next'
						type='submit'
						onClick={handleSubmit(handleCreateOrder)}
					>
						Опубликовать
					</button>
				</div>
			</div>
		</div>
	)
}

export default CreateOrder
