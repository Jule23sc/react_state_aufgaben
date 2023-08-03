import { useState } from 'react'
import './App.css'
import Question from './assets/components/task1faq/FaqAufgabe1'
import Counter from './assets/components/task2counter/CounterAufgabe2'
import TagNacht from './assets/components/task3daynight/TagNacht'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Question/>
      <Counter/>
      <TagNacht/>
    </div>
  )
}

export default App