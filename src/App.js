import { useState } from 'react'
import Header from './components/Header'
import ElementSelector from './components/ElementSelector'
import ElementSorter from './components/ElementSorter'
import PromtPreview from './components/PromtPreview'
import Footer from './components/Footer'

import './App.css';
import './Common.css'

function App() {
  // For Selected Elements
  const [elements, setElements] = useState([])
  const [selectedElement, setSelectedElement] = useState(-1)

  const [defaultFG, setDefaultFG] = useState('white')
  const [defaultBG, setDefaultBG] = useState('black')


  const resetElements = () => {
    setElements([])
    setSelectedElement(-1)
  }

  const addElement = (element) => {
    let elementTmp = element
    elementTmp.bg = defaultBG
    elementTmp.fg = defaultFG
    setElements([...elements, elementTmp])
    setSelectedElement(elements.length)
  }

  const removeSelectedElement = () => {
    let tmpElements = elements
    tmpElements.splice(selectedElement, 1)
    setElements(tmpElements)
    setSelectedElement(selectedElement-1)
  }

  const selectElement = (index) => {
    setSelectedElement(index)
  }

  const moveElementUp = (index) => {
    let upperElement = elements[index-1]
    let tmpElements = [...elements]
    tmpElements[index-1] = elements[index]
    tmpElements[index] = upperElement
    setElements(tmpElements)
    
    if ((index-1) === selectedElement) {
      setSelectedElement(index)
    }
  }

  const moveElementDown = (index) => {
    let lowerElement = elements[index+1]
    let tmpElements = [...elements]
    tmpElements[index+1] = elements[index]
    tmpElements[index] = lowerElement
    setElements(tmpElements)

    if ((index+1) === selectedElement) {
      setSelectedElement(index)
    }
  }

  const setSelectedElementFG = (color) => {
    let tmpElements = [...elements]
    tmpElements[selectedElement].fg = color
    setElements(tmpElements)
  }

  const setSelectedElementBG = (color) => {
    let tmpElements = [...elements]
    tmpElements[selectedElement].bg = color
    setElements(tmpElements)
  }

  return (
    <div className="App">
      <Header />
      <main className="vertical-layout">
        <ElementSelector addElement={addElement}/>
        <ElementSorter
          elements={elements}
          removeSelectedElement={removeSelectedElement}
          selectElement={selectElement}
          selectedElement={selectedElement}
          moveElementDown={moveElementDown}
          moveElementUp={moveElementUp}
          resetElements={resetElements}
          setSelectedElementFG={setSelectedElementFG}
          setSelectedElementBG={setSelectedElementBG}
        />
        <PromtPreview 
          elements={elements}
          setDefaultBG={setDefaultBG}
          setDefaultFG={setDefaultFG}
        />
        <Footer />
      </main>
    </div>
  );
}

export default App;
