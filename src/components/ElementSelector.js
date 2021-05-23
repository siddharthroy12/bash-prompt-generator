import { useState } from 'react'
import { elements } from '../elements'
import CustomElementPicker from './CustomElementPicker'

import './ElementSelector.css'

export default function ElementSelector({ addElement }) {

	const [selectedTab, setSelectedTab] = useState('basic')

	return (
		<div className="element-selector container">
			<h2>Add Elements to your prompt</h2>
			<div className="element-selector-box">
				<ul className="element-nav">
					{
						Object.keys(elements.tabs).map(tab => {
							if (selectedTab === tab) {
								return <li className="selected" key={tab}>{ elements.tabs[tab].tabTitle }</li>
							}
							return <li onClick={() => setSelectedTab(tab)} key={tab}>{ elements.tabs[tab].tabTitle }</li>
						})
					}
				</ul>
				<ul className="element-list">
					{
						elements.tabs[selectedTab].elements.map(element => {
							return (
								<li onClick={() => addElement(element)} key={element.name}>
									{element.name}
									<div className="tooltip">
										{ element.hint }
									</div>
								</li>
							)
						})
					}
					{
						selectedTab === 'extra' && <CustomElementPicker addElement={addElement}/>
					}
				</ul>
			</div>
		</div>
	)
}
