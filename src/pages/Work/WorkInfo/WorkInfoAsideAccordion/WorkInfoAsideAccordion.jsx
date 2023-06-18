import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
} from '@chakra-ui/react'
import React from 'react'

const WorkInfoAsideAccordion = ({ packet }) => {
	const { economy, standard, business } = packet

	return (
		<div className='work__aside-accordion'>
			<Accordion>
				{economy && (
					<div className='work__aside-accordion-item'>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as='span' flex='1' textAlign='left'>
										Эконом пакет
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<p className='work__aside-accordion-desc'>{economy.desc}</p>
								<div className='work__aside-accordion-block'>
									<p className='work__aside-accordion-price'>
										{economy.price} KGS
									</p>
									{economy.deadline && (
										<p className='work__aside-accordion-deadline'>
											{economy.deadline}
										</p>
									)}
								</div>
								{economy.count && (
									<p className='work__aside-accordion-count'>
										Количество доработок: {economy.count}
									</p>
								)}
								<button className='work__aside-accordion-btn'>
									Купить за {economy.price} KGS
								</button>
							</AccordionPanel>
						</AccordionItem>
					</div>
				)}
				{standard && (
					<div className='work__aside-accordion-item'>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as='span' flex='1' textAlign='left'>
										Стандартный пакет
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<p className='work__aside-accordion-desc'>{standard.desc}</p>
								<div className='work__aside-accordion-block'>
									<p className='work__aside-accordion-price'>
										{standard.price} KGS
									</p>
									{standard.deadline && (
										<p className='work__aside-accordion-deadline'>
											{standard.deadline}
										</p>
									)}
								</div>
								{standard.count && (
									<p className='work__aside-accordion-count'>
										Количество доработок: {standard.count}
									</p>
								)}
								<button className='work__aside-accordion-btn'>
									Купить за {standard.price} KGS
								</button>
							</AccordionPanel>
						</AccordionItem>
					</div>
				)}
				{business && (
					<div className='work__aside-accordion-item'>
						<AccordionItem>
							<h2>
								<AccordionButton>
									<Box as='span' flex='1' textAlign='left'>
										Премиум пакет
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h2>
							<AccordionPanel pb={4}>
								<p className='work__aside-accordion-desc'>{business.desc}</p>
								<div className='work__aside-accordion-block'>
									<p className='work__aside-accordion-price'>
										{business.price} KGS
									</p>
									{business.deadline && (
										<p className='work__aside-accordion-deadline'>
											{business.deadline}
										</p>
									)}
								</div>
								{business.count && (
									<p className='work__aside-accordion-count'>
										Количество доработок: {business.count}
									</p>
								)}
								<button className='work__aside-accordion-btn'>
									Купить за {business.price} KGS
								</button>
							</AccordionPanel>
						</AccordionItem>
					</div>
				)}
			</Accordion>
		</div>
	)
}

export default WorkInfoAsideAccordion
