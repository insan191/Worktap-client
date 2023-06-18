import React from 'react'
import { useForm } from 'react-hook-form'
import CreateWorkCostCount from '../CreateWorkCostCount/CreateWorkCostCount'
import CreateWorkCostDeadline from '../CreateWorkCostDeadline/CreateWorkCostDeadline'
import CreateWorkCostDesc from '../CreateWorkCostDesc/CreateWorkCostDesc'
import CreateWorkCostPrice from '../CreateWorkCostPrice/CreateWorkCostPrice'

const CreateWorkCostEconomy = ({ setPublication, publication }) => {
	const {
		packet: {
			economy: { desc, deadline, count, price },
		},
	} = publication
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			desc,
			deadline,
			count,
			price,
		},
	})
	const handleCreateWork = economy => {
		const packet = {
			...publication.packet,
			economy,
		}
		setPublication({ ...publication, packet })
	}

	return (
		<form
			noValidate
			onSubmit={handleSubmit(handleCreateWork)}
			className='createWork__cost-package'
		>
			<h3 className='createWork__cost-package-title'>Эконом</h3>
			<CreateWorkCostDesc register={register} error={errors.desc} />
			<CreateWorkCostDeadline register={register} error={errors.deadline} />
			<CreateWorkCostCount register={register} error={errors.count} />
			<CreateWorkCostPrice register={register} error={errors.price} />
			<button type='submit' className='createWork__cost-package-btn'>
				Добавить опцию
			</button>
		</form>
	)
}

export default CreateWorkCostEconomy
