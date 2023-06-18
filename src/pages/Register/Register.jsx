import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import FormSwiper from '../../components/FormSwiper/FormSwiper'
import { fillUser } from '../../redux/reducers/slice/user'
import axios from '../../utils/axios'
import RegisterEmail from '../Login/LoginEmail/LoginEmail'
import './Register.scss'
import RegisterName from './RegisterName/RegisterName'
import RegisterPassword from './RegisterPassword/RegisterPassword'
import RegisterPasswordAgain from './RegisterPasswordAgain/RegisterPasswordAgain'
import RegisterPhone from './RegisterPhone/RegisterPhone'
import RegisterRole from './RegisterRole/RegisterRole'
import RegisterSurname from './RegisterSurname/RegisterSurname'

const Register = () => {
	const dispatch = useDispatch()
	const nav = useNavigate()
	const toast = useToast()
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm({ mode: 'onTouched' })

	const handleRegisterUser = async data => {
		try {
			const { passwordAgain, ...other } = data
			const res = await axios.post('/auth/register', {
				...other,
			})
			dispatch(fillUser(res.data))
			nav('/')
		} catch ({
			response: {
				data: { message },
			},
		}) {
			toast({
				title: message,
				status: 'error',
				duration: 3000,
				isClosable: true,
				position: 'bottom-left',
			})
		}
	}
	return (
		<div className='register'>
			<div className='container'>
				<div className='register__content'>
					<div className='register__left'>
						<Link to='/'>
							<h1 className='register__logo'>
								<img src={logo} alt='Worktap' />
							</h1>
						</Link>
						<h3 className='register__subtitle'>Давайте создадим Вам аккаунт</h3>
						<form
							className='register__form'
							noValidate
							onSubmit={handleSubmit(handleRegisterUser)}
						>
							<h2 className='register__title'>Заполните все поля</h2>
							<RegisterName register={register} error={errors.name} />
							<RegisterSurname register={register} error={errors.surname} />
							<RegisterEmail register={register} error={errors.email} />
							<RegisterPhone register={register} error={errors.phone} />
							<RegisterPassword register={register} error={errors.password} />
							<RegisterPasswordAgain
								register={register}
								getValues={getValues}
								error={errors.passwordAgain}
							/>
							<RegisterRole register={register} error={errors.role} />
							<button className='register__btn' type='submit'>
								Зарегистрироваться
							</button>
						</form>
						<div className='register__question'>
							<p className='register__question-text'>
								У Вас есть аккаунт?{' '}
								<Link className='register__question-link' to={'/login'}>
									Войдите
								</Link>
							</p>
						</div>
					</div>
					<FormSwiper />
				</div>
			</div>
		</div>
	)
}

export default Register
