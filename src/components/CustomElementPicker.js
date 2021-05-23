import { useState } from 'react'
import './CustomElementPicker.css'

export default function CustomElementPicker({ addElement }) {
	const [customText, setCustomText] = useState('')

	const createAndAddCustomElement = () => {
		if (customText.lenght > 0) {
			let customElement = {
				name: customText,
				hint: 'Custom Element',
				code: customText,
				addon: '',
				preview: customText,
				fg: 'white',
				bg: 'black'
			}
	
			addElement(customElement)
		}
	}

	const onTextInput = e => {
		// Regex is my weakness
		if (
			e.target.value.indexOf('\\') < 0 &&
			e.target.value.indexOf('$') < 0 &&
			e.target.value.indexOf('(') < 0 &&
			e.target.value.indexOf(')') < 0 &&
			e.target.value.indexOf('{') < 0 &&
			e.target.value.indexOf('}') < 0
			) {
			setCustomText(e.target.value)
		}
	}

	return (
		<div className="custom-element-picker">
			<p>Enter custom text</p>
			<div className="custom-element-input-form">
				<input
					type="text"
					value={customText}
					onChange={onTextInput}
				/>
				<button onClick={createAndAddCustomElement}>+</button>
			</div>
		</div>
	)
}