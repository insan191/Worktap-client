import React from 'react'

const CreateWorkNav = ({ pageArr, page }) => {
	return (
		<div className='createWork__nav'>
			{pageArr.map(({ text, value }, idx) => (
				<div key={text} className='createWork__nav-block'>
					{idx !== 0 && <div className='createWork__nav-line'></div>}
					<div className={'createWork__nav-item'}>
						<div
							className={
								value === page
									? 'createWork__nav-item-count active'
									: 'createWork__nav-item-count'
							}
						>
							{idx + 1}
						</div>
						<p className='createWork__nav-item-text'>{text}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default CreateWorkNav
