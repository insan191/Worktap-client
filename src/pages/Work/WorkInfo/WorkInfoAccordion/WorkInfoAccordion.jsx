import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
} from '@chakra-ui/react'
import React from 'react'

const WorkInfoAccordion = ({ questions }) => {
	return (
		<Accordion className='work__main-accordion'>
			<h3 className='work__main-accordion-title'>Часто задаваемые вопросы</h3>
			{questions.map(({ answer, question, _id }) => (
				<div className='work__main-accordion-item' key={_id}>
					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box as='span' flex='1' textAlign='left'>
									{question}
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>{answer}</AccordionPanel>
					</AccordionItem>
				</div>
			))}
		</Accordion>
	)
}

export default WorkInfoAccordion
