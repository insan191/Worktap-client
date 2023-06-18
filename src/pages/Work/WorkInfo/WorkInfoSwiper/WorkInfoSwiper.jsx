import React from 'react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
const FormSwiper = ({ photos }) => {
	return (
		<div className='work__main-swiper'>
			<Swiper
				pagination={true}
				modules={([Pagination], [Navigation])}
				className='mySwiper'
				navigation
			>
				{photos.map(({ url, id }) => (
					<SwiperSlide key={id}>
						<div className='work__main-swiper-slide'>
							<img
								src={`${process.env.REACT_APP_URL}${url}`}
								alt={id}
								className='work__main-swiper-slide-img'
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
export default FormSwiper
