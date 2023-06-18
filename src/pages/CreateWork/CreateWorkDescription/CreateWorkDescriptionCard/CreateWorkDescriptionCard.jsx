import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdClose } from 'react-icons/io'
import CreateWorkDescriptionAnswer from './CreateWorkDescriptionAnswer/CreateWorkDescriptionAnswer'
import CreateWorkDescriptionQuestion from './CreateWorkDescriptionQuestion/CreateWorkDescriptionQuestion'

const CreateWorkDescriptionCard = ({
	id,
	setQuestions,
	questions,
	cards,
	setCards,

}) => {
	const [del, setDel] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
	})
	const handleCreateWork = data => {
		const obj = { ...cards.find(({ _id }) => _id === id), ...data }
		setQuestions(prev => [...prev, obj])
	}
	const deleteQuestion = () => {
		setCards(cards.filter(({ _id }) => _id !== id))
		setQuestions(questions.filter(({ _id }) => _id !== id))
	}
	return (
		<form
			className='createWork__description-card'
			onSubmit={handleSubmit(handleCreateWork)}
			onMouseEnter={() => setDel(true)}
			onMouseLeave={() => setDel(false)}
		>
			<CreateWorkDescriptionQuestion
				register={register}
				error={errors.question}
			/>
			<CreateWorkDescriptionAnswer register={register} error={errors.answer} />
			{questions.find(({ _id }) => _id === id) ? (
				<div className='createWork__description-card-added'>Добавлено</div>
			) : (
				<button className='createWork__description-card-add'>Добавить</button>
			)}
			{del && (
				<span
					className='createWork__description-card-del'
					onClick={deleteQuestion}
				>
					<IoMdClose />
				</span>
			)}
		</form>
	)
}

export default CreateWorkDescriptionCard
