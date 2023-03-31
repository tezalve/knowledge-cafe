import { useState } from 'react'
import './App.css'
import Answers from './components/Answers/Answers'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Answers></Answers>
    </div>
  )
}

export default App
