import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import MainLayout from './components/layout/MainLayout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/login'
import Single from './pages/single/Single'
import Blog from './pages/blog/Blog'
import Contact from './pages/contact/Contact'
import Cart from './pages/Cart/Cart'
import NotFound from './components/notfound/NotFound'
import Singin from './pages/singin/Singin'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/singin' element={<Singin />}></Route>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/products/:id' element={<Single />}></Route>
            <Route path='/blog' element={<Blog />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
