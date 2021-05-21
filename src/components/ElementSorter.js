import ColorPicker from './ColorPicker'
import './ElementSorter.css'

export default function ElementSortor({
		elements, moveElementUp, moveElementDown,
		selectedElement, selectElement,
		removeSelectedElement, resetElements,
		setSelectedElementFG, setSelectedElementBG
	}) {
	return (
		<div className="element-sorter container">
			<h2>Rearrange and select color here</h2>
			<div className="element-sorter-box">
				<ul>
					{
						elements.map((element, index) => {
							if (index === selectedElement) {
								return (
									<li className="element-selected" key={index}>
										{
											(index !== 0) ? (
												<div className="move-element-arrow" onClick={() => moveElementUp(index)}>
													&lt;
												</div>
											) : null
										}
										<div className="element-name">
											{element.name}
										</div>
										{
											(index !== elements.length - 1) ? (
												<div className="move-element-arrow" onClick={() => moveElementDown(index)}>
													&gt;
												</div>
											) : null
										}
									</li>
								)
							}
							return (
								<li key={index}>
									{
										(index !== 0) ? (
											<div className="move-element-arrow" onClick={() => moveElementUp(index)}>
												&lt;
											</div>
										) : null
									}
									<div className="element-name" onClick={() => selectElement(index)}>
										{element.name}
									</div>
									{
										(index !== elements.length - 1) ? (
											<div className="move-element-arrow" onClick={() => moveElementDown(index)}>
												&gt;
											</div>
										) : null
									}
								</li>
							)
						})
					}
				</ul>
			</div>
			<div className="element-sorter-controls">
				<div className="buttons-left">
					<button onClick={() => removeSelectedElement()} className="button danger">Delete</button>
					<button onClick={() => resetElements()} className="button">Reset</button>
				</div>
				<div className="buttons-right">
					<span className="button-label">FG</span>
					<ColorPicker 
						selectedElement={selectedElement}
						setColor={setSelectedElementFG}
						elements={elements}
						showColor={'fg'}
					/>
					<span className="button-label">BG</span>
					<ColorPicker
						selectedElement={selectedElement}
						setColor={setSelectedElementBG}
						elements={elements}
						showColor={'bg'}
					/>
				</div>
			</div>
		</div>
	)
}
