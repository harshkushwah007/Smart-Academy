import {Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Course from './Pages/Course'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/course' element={<Course />}/>
        </Routes>
    </div>
  )
}

export default App