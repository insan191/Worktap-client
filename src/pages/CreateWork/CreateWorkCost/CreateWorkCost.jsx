import React from 'react'
import CreateWorkCostBusiness from './CreateWorkCostBusiness/CreateWorkCostBusiness'
import CreateWorkCostEconomy from './CreateWorkCostEconomy/CreateWorkCostEconomy'
import CreateWorkCostStandard from './CreateWorkCostStandard/CreateWorkCostStandard'

const CreateWorkCost = ({ setPage, publication, setPublication }) => {
	return (
		<div className='createWork__cost'>
			<h2 className='createWork__cost-title'>Пакеты</h2>
			<div className='createWork__cost-packages'>
				<CreateWorkCostEconomy
					publication={publication}
					setPublication={setPublication}
				/>
				<CreateWorkCostStandard
					publication={publication}
					setPublication={setPublication}
				/>
				<CreateWorkCostBusiness
					publication={publication}
					setPublication={setPublication}
				/>
			</div>
			<div className='createWork__navButtons'>
				<div>
					<button
						className='createWork__navButtons-prev'
						onClick={() => setPage('createWorkMain')}
					>
						Назад
					</button>
				</div>
				<button
					className='createWork__navButtons-next'
					onClick={() => setPage('createWorkDescription')}
				>
					Дальше
				</button>
			</div>
		</div>
	)
}

export default CreateWorkCost
