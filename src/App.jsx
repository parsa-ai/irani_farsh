import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import MainLayout from './components/layout/MainLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/login'
import Single from './pages/single/Single'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <MainLayout>

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/single' element={<Single />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </>
  )
}

export default App
