import Dashboard from './component/Dashboard'
import Contact from './component/Contact'
import Project from './component/Project'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <div className='bg-black'>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element = {<Dashboard/>} />
            <Route path='/Dashboard' element={<Dashboard/>}/>
            <Route path='/Project' element={<Project/>} />
            <Route path='/Contact' element= {<Contact/>}/>
            
          </Routes>
        </BrowserRouter>
        
        
        
      </div>
    </div>
  )
}

export default App
