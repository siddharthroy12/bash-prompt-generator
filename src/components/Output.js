import { colors } from '../elements'
import './Output.css'

export default function Output({ elements }) {

	const generateCode = () => {
		let addons = ''
		
		elements.forEach(element => {
			addons += element.addon
			
			if (element.addon !== '') {
				addons += '\n\n'
			}
		})

		let exportLine = 'export PS1="'

		elements.forEach(element => {
			exportLine += `\\[\\e[${element.bg !== 'none' ? '4' : ''}${colors[element.bg].code};${element.fg !== 'none' ? '3' : ''}${colors[element.fg].code}m\\]`
			exportLine += element.code
			exportLine += '\\[\\e[m\\]'
		})

		exportLine += '"'

		return addons + exportLine
	}

	return (
		<div className="output container">
			<h2>Copy and past the code into your bashrc.</h2>
			<div className="output-box">
				<textarea readOnly={true} value={generateCode()}>
				</textarea>
			</div>
		</div>
	)
}