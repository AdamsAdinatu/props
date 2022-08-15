import React from 'react'
import NavBar from './components/NavBar'
import Todo from './components/Todo'

function App() {

  let title ="my activities to do for the week"
  return (
    <div>
    <NavBar title={title}/>
    <main> 
    <Todo title="learning HTML" datetime="15th August 2022"/>
    <Todo title="learning Css" datetime="15th August 2022"/>
    <Todo title="learning javascript" datetime="15th August 2022"/>
    <Todo title="learning NavBAR" datetime="15th August 2022"/>
    <Todo title="learning react" datetime="15th August 2022"/>
     
    </main>
    </div>
  )
}

export default App
