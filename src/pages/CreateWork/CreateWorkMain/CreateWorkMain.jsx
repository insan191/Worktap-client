import React from 'react'
import { useForm } from 'react-hook-form'
import CreateWorkMainCategory from './CreateWorkMainCategory/CreateWorkMainCategory.jsx'
import CreateWorkMainSubcategory from './CreateWorkMainSubcategory/CreateWorkMainSubcategory.jsx'
import CreateWorkMainTitle from './CreateWorkMainTitle/CreateWorkMainTitle.jsx'
const CreateWorkMain = ({ setPage, setPublication, publication }) => {
	const { main } = publication
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			category: main.category,
			title: main.title,
			subcategory: main.subcategory,
		},
	})

	const handleCreateWork = main => {
		setPublication({ ...publication, main })
		setPage('createWorkCost')
	}
	return (
		<form
			className='createWork__main'
			onSubmit={handleSubmit(handleCreateWork)}
		>
			<div className='createWork__block'>
				<CreateWorkMainTitle register={register} error={errors.title} />
			</div>
			<div className='createWork__block'>
				<CreateWorkMainCategory register={register} error={errors.category} />
				<CreateWorkMainSubcategory
					register={register}
					error={errors.subcategory}
					watch={watch}
					main={main}
				/>
			</div>
			<div className='createWork__navButtons'>
				<div></div>
				<button className='createWork__navButtons-next' type='submit'>
					Дальше
				</button>
			</div>
		</form>
	)
}

export default CreateWorkMain
