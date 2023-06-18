import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { IoMdSettings } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useChangeProfileMutation } from '../../../../redux/reducers/api/profile.js'
import { userSelector } from '../../../../redux/reselect.js'
import './MyProfileChange.scss'
import MyProfileChangeCertificates from './MyProfileChangeCertificates/MyProfileChangeCertificates'
import MyProfileChangeCountry from './MyProfileChangeCountry/MyProfileChangeCountry'
import MyProfileChangeDescription from './MyProfileChangeDescription/MyProfileChangeDescription'
import MyProfileChangeEducation from './MyProfileChangeEducation/MyProfileChangeEducation'
import MyProfileChangeLanguages from './MyProfileChangeLanguages/MyProfileChangeLanguages'
import MyProfileChangeName from './MyProfileChangeName/MyProfileChangeName'
import MyProfileChangePhone from './MyProfileChangePhone/MyProfileChangePhone'
import MyProfileChangePhoto from './MyProfileChangePhoto/MyProfileChangePhoto'
import MyProfileChangeProfession from './MyProfileChangeProfession/MyProfileChangeProfession'
import MyProfileChangeSurname from './MyProfileChangeSurname/MyProfileChangeSurname'
import MyProfileChangeTechnologies from './MyProfileChangeTechnologies/MyProfileChangeTechnologies'
const MyProfileChange = () => {
	const {
		user: {
			name,
			surname,
			profession,
			description,
			phone,
			education,
			languages,
			country,
			certificates,
			_id,
		},
		user,
	} = useSelector(userSelector)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [photo, setPhoto] = useState(user.photo)
	const [technologies, setTechnologies] = useState(user.technologies)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onTouched',
		defaultValues: {
			name,
			surname,
			profession,
			description,
			education,
			languages,
			country,
			certificates,
		},
	})
	const [changeProfile] = useChangeProfileMutation()

	const handleChangeProfile = async data => {
		const arg = {
			...data,
			photo,
			technologies,
		}
		await changeProfile({ _id, arg }).unwrap()
		onClose()
	}
	return (
		<>
			<Button onClick={onOpen} className='myProfile__change-trigger'>
				<IoMdSettings />
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Профиль</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<form
							className='myProfile__change'
							onSubmit={handleSubmit(handleChangeProfile)}
						>
							<MyProfileChangeName register={register} error={errors.name} />
							<MyProfileChangeSurname register={register} surname={surname} />
							<MyProfileChangeProfession
								register={register}
								error={errors.profession}
							/>
							<MyProfileChangeDescription
								register={register}
								error={errors.description}
							/>
							<MyProfileChangePhone
								register={register}
								error={errors.phone}
								phone={phone}
							/>
							<MyProfileChangePhoto photo={photo} setPhoto={setPhoto} />
							<MyProfileChangeTechnologies
								technologies={technologies}
								setTechnologies={setTechnologies}
							/>
							<MyProfileChangeCountry
								register={register}
								error={errors.country}
							/>
							<MyProfileChangeEducation
								register={register}
								error={errors.education}
							/>
							<MyProfileChangeLanguages
								register={register}
								error={errors.languages}
							/>
							<MyProfileChangeCertificates
								register={register}
								error={errors.certificates}
							/>
						</form>
					</ModalBody>
					<ModalFooter>
						<button
							className='myProfile__change-btn'
							onClick={handleSubmit(handleChangeProfile)}
						>
							Сохранить
						</button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export default MyProfileChange
