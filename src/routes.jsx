import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import AboutMe from './pages/AboutMe/AboutMe'
import Home from './pages/Home/Home'
import Menu from './components/Menu/Menu'

function AppRoutes() {
  
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/aboutMe' element={<AboutMe/>}/>
        <Route path='*' element={<h1>ERROR 404 NOT FOUND</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
