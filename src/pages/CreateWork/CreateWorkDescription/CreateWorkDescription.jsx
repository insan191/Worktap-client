import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdAddCircle } from 'react-icons/io'
import { v4 as uuidv4 } from 'uuid'
import CreateWorkDescriptionCard from './CreateWorkDescriptionCard/CreateWorkDescriptionCard'
import CreateWorkDescriptionDesc from './CreateWorkDescriptionDesc/CreateWorkDescriptionDesc'

const CreateWorkDescription = ({ setPublication, setPage, publication }) => {
	const {
		description: { desc },
	} = publication
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			desc,
		},
	})
	const [cards, setCards] = useState([])
	const [questions, setQuestions] = useState([])
	const handleCreateWork = data => {
		const description = questions.length ? { ...data, questions } : data
		setPublication({ ...publication, description })
		setPage('createWorkRequirements')
	}
	return (
		<div className='createWork__description'>
			<h2 className='createWork__description-title'>Описание</h2>
			<div className='createWork__description-desc'>
				<CreateWorkDescriptionDesc register={register} error={errors.desc} />
			</div>
			<h2 className='createWork__description-title'>
				Часто задаваемые вопросы
			</h2>
			<div className='createWork__description-questions'>
				{cards.map(({ _id }) => (
					<CreateWorkDescriptionCard
						key={_id}
						id={_id}
						cards={cards}
						setCards={setCards}
						questions={questions}
						setQuestions={setQuestions}
					/>
				))}
				<div
					className='createWork__description-addQuestion'
					onClick={() => setCards(prev => [...prev, { _id: uuidv4() }])}
				>
					<IoMdAddCircle fill='#FBA457' size='70px' />
					<p className='createWork__description-addQuestion-text'>
						Добавить вопрос-ответ
					</p>
				</div>
			</div>
			<div className='createWork__navButtons'>
				<div>
					<button
						className='createWork__navButtons-prev'
						onClick={() => setPage('createWorkCost')}
					>
						Назад
					</button>
				</div>
				<button
					className='createWork__navButtons-next'
					type='submit'
					onClick={handleSubmit(handleCreateWork)}
				>
					Дальше
				</button>
			</div>
		</div>
	)
}

export default CreateWorkDescription
