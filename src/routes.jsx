import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import AboutMe from './pages/AboutMe/AboutMe'
import Home from './pages/Home/Home'
import Menu from './components/Menu/Menu'
import Footer from 'components/Footer/Footer'
import DefaultPage from 'pages/DefaultPage/DefaultPage'
import Post from 'pages/Post/Post'

function AppRoutes() {
  
  return (
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path='/' element={<DefaultPage/>}>
          <Route index element={<Home/>}/>
          <Route path='aboutMe' element={<AboutMe/>}/>
          <Route path='post/:id' element={<Post/>}/>
        </Route>
        <Route path='*' element={<h1>ERROR 404 NOT FOUND</h1>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default AppRoutes
