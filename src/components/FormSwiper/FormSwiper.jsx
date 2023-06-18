import React from 'react'
import { Pagination } from 'swiper'
import 'swiper/css'
import './FormSwiper.scss'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
const FormSwiper = () => {
	return (
		<div className='form__swiper'>
			<Swiper pagination={true} modules={[Pagination]} className='mySwiper'>
				<SwiperSlide>
					<div className='form__swiper-slide img1'>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='form__swiper-slide img2'></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='form__swiper-slide img3'></div>
				</SwiperSlide>
				<SwiperSlide>
					<div className='form__swiper-slide img4'></div>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}
export default FormSwiper
