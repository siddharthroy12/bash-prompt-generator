import { useState } from 'react'
import { colors } from '../elements'
import './PromtPreview.css'

export default function PromtPreview({ elements, setDefaultBG, setDefaultFG }) {
	
	const [themeToggle, setThemeToggle] = useState(false)

	const onToggle = () => {
		if (!themeToggle) {
			setDefaultBG('white')
			setDefaultFG('black')
		} else {
			setDefaultBG('black')
			setDefaultFG('white')
		}
		

		// Change the theme of elements
		for (let i = 0; i < elements.length; i++) {
			// If Light Theme
			if (!themeToggle) {
				if (elements[i].fg === 'white') {
					elements[i].fg = 'black'
				}
	
				if (elements[i].bg === 'black') {
					elements[i].bg = 'white'
				}
			}

			// If Dark Theme
			if (themeToggle) {
				if (elements[i].fg === 'black') {
					elements[i].fg = 'white'
				}
	
				if (elements[i].bg === 'white') {
					elements[i].bg = 'black'
				}
			}
		}

		setThemeToggle(!themeToggle)
	}

	return (
		<div className="promt-preview container">
			<h2>Promt Preview</h2>
			<div className="promt-preview-box"
				style={{
					border: themeToggle ? '2px solid black' : null,
					backgroundColor: themeToggle ? colors['white'].shade: null
				}}>
			{
				elements.map((element, index) => {
					return (<span
						style={{
							color: colors[element.fg].shade,
							backgroundColor: colors[element.bg].shade
						}}
						key={index}>{element.preview}
					</span>)
				})
			}
			{
				elements.length < 1 ? <span style={{visibility:'hidden'}}>a</span> : null
			}
			</div>
			<div className="promt-preview-controls">
				<span style={{ marginLeft: 'auto', marginRight: '1rem'}}>Toggle Theme</span>
				<label className="switch">
					<input type="checkbox" checked={themeToggle} onClick={onToggle} />
					<span className="slider round"></span>
				</label>
			</div>
		</div>
	)
}