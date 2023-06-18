import React from 'react'
import { useForm } from 'react-hook-form'
import CreateWorkRequirementsField from './CreateWorkRequirementsField/CreateWorkRequirementsField'

const CreateWorkRequirements = ({ setPage, setPublication, publication }) => {
	const { requirements } = publication
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			requirements,
		},
	})
	const handleCreateWork = ({ requirements }) => {
		setPublication({ ...publication, requirements })
		setPage('createWorkGallery')
	}
	return (
		<form
			className='createWork__requirements'
			onSubmit={handleSubmit(handleCreateWork)}
		>
			<div className='createWork__requirements-content'>
				<h2 className='createWork__requirements-title'>
					Расскажите покупателю, что вам нужно для начала работы над заказом.
				</h2>
				<h3 className='createWork__requirements-subtitle'>
					Структурируйте свои инструкции для покупателя в виде произвольного
					текста.
				</h3>
				<div className='createWork__requirements-field'>
					<CreateWorkRequirementsField
						register={register}
						error={errors.requirements}
					/>
				</div>
			</div>
			<div className='createWork__navButtons'>
				<div>
					<button
						className='createWork__navButtons-prev'
						onClick={() => setPage('createWorkDescription')}
					>
						Назад
					</button>
				</div>
				<button className='createWork__navButtons-next' type='submit'>
					Дальше
				</button>
			</div>
		</form>
	)
}

export default CreateWorkRequirements
