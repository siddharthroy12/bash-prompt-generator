import { colors } from '../elements'
import { useState } from 'react'
import './ColorPicker.css'

export default function ColorPicker({ selectedElement, setColor, elements, showColor }) {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<button className="color-picker" onClick={() => setIsOpen(!isOpen)}>
			<div
				className="color-box" 
				style={{
					backgroundColor: selectedElement > -1 ?
						colors[elements[selectedElement].[showColor]].shade :
						showColor === 'fg' ? colors['white'].shade : colors['black'].shade
				}}
			>
				{/* Gura reference */}
				<span style={{visibility: 'hidden'}}>a</span>
			</div>
			<div className="color-picker-arrow">
				&gt;
			</div>
			{
				isOpen && (
					<div className="colors-box">
						{Object.keys(colors).map(color => {
							return (
								<div
									className="color-btn" 
									style={{backgroundColor: colors[color].shade}}
									onClick={() => setColor(color)}
								/>
							)
						})}
					</div>
				)
			}
		</button>
	)
}