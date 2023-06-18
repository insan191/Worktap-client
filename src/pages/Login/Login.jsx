import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import FormSwiper from '../../components/FormSwiper/FormSwiper'
import { fillUser } from '../../redux/reducers/slice/user'
import axios from '../../utils/axios.js'
import './Login.scss'
import LoginEmail from './LoginEmail/LoginEmail'
import LoginPassword from './LoginPassword/LoginPassword'
const Login = () => {
	const nav = useNavigate()
	const dispatch = useDispatch()
	const toast = useToast()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onTouched' })

	const handleLoginUser = async data => {
		try {
			const res = await axios.post('/auth/login', data)
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
		<div className='login'>
			<div className='container'>
				<div className='login__content'>
					<div className='login__left'>
						<Link to='/'>
							<h1 className='login__logo'>
								<img src={logo} alt='Worktap' />
							</h1>
						</Link>
						<h3 className='login__subtitle'>Добро пожаловать!</h3>
						<form
							className='login__form'
							noValidate
							onSubmit={handleSubmit(handleLoginUser)}
						>
							<h2 className='login__title'>Войдите в свой аккаунт</h2>
							<LoginEmail register={register} error={errors.email} />
							<LoginPassword register={register} error={errors.password} />
							<button className='login__btn' type='submit'>
								Войти
							</button>
						</form>
						<div className='login__question'>
							<p className='login__question-text'>
								У Вас все еще нет аккаунта?{' '}
								<Link className='login__question-link' to={'/register'}>
									Зарегистрируйтесь бесплатно!
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

export default Login
