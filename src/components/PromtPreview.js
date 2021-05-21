import { colors } from '../elements'
import './PromtPreview.css'

export default function PromtPreview({ elements }) {
	return (
		<div className="promt-preview container">
			<h2>Promt Preview</h2>
			<div className="promt-preview-box">
			{
				elements.map(element => {
					return <span style={{
						color: colors[element.fg].shade,
						backgroundColor: colors[element.bg].shade
					}}>{element.preview}</span>
				})
			}
			{
				elements.length < 1 ? <span style={{visibility:'hidden'}}>a</span> : null
			}
			</div>
		</div>
	)
}