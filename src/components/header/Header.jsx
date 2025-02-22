import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { LogIn, LucideShoppingCart, Menu, Search, X } from "lucide-react"

import Container from "../container/Container"
import Button from "../button/Button"

import './Header.css'

function Header() {
  const [isOpen , setIsOpen]= useState(false)
  const [exitAnimtion , setExitAnimtion]= useState(false)

  function OnHumberClick() {
    if(isOpen){
      setTimeout(()=>{
        setIsOpen(false)
      },400)
      setExitAnimtion(true)
    }
    else{
      setExitAnimtion(false)
      setIsOpen(true)
    }
  }
  return (
    <Container className='fixed top-0 bg-white h-[7.5rem] z-50'>
      <header className="flex justify-between items-center pt-6 ">
        <div className="flex justify-between items-center gap-6">
          <Button size="sm" isIcon={true} ColorBackground="bg-neutral3" color="text-BLACK" className='Humber_menu hover:text-neutral3 hover:bg-BLACK' borderColor="border-neutral3" onClick={OnHumberClick}>
            <Menu size={20} ></Menu>
          </Button>
          <h2 className="text-2xl text-primary font-bold logo">
            <Link to='/'>ایرانی فرش</Link>
          </h2>
          <div className="bg-neutral3 p-3 rounded-xl gap-2 max-w-md w-md h-12 flex items-center search_lg">
            <Search size={24} className="text-neutral9"></Search>
            <input type="text" name="" id="" className="text-neutral9 text-lg font-semibold w-full focus:outline-0" placeholder="جستجو فرش" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4 btn_lg">
          <NavLink to='/cart' >
            <Button >
              <LucideShoppingCart></LucideShoppingCart>
            </Button>
          </NavLink>
          <NavLink to='/login'>
            <Button>
              <LogIn></LogIn>
              <p className="font-semibold ">ورود/ثبت نام</p>
            </Button>
          </NavLink>
        </div>
        <div className="flex justify-between items-center gap-2 btn_md">
          <NavLink to='/cart'>
            <Button size="sm" isIcon={true}>
              <LucideShoppingCart></LucideShoppingCart>
            </Button>
          </NavLink>
          <NavLink to='/login'>
            <Button size="sm" isIcon={true}>
              <LogIn></LogIn>
              </Button>
          </NavLink>
        </div>
      </header>
      <nav className='border-b border-neutral6'>
        <ul className={`flex gap-8 py-2 nav_ul ${isOpen ? 'nav_ul_active' : ''} ${exitAnimtion ? 'nav_ul_Unactive' : ''}`}  >
          <li hidden={!isOpen} onClick={OnHumberClick}>
            <X />
          </li>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'text-primary' : '')}>
              صفحه اصلی
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
              وبلاگ
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
              تماس با ما
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
              درباره ما
            </NavLink>
          </li>
        </ul>
        <div className="bg-neutral3 p-3 rounded-xl gap-2  w-full h-10 flex items-center search_md my-3">
          <Search size={20} className="text-neutral9"></Search>
          <input type="text" name="search" id="search" className="text-neutral9 text-lg font-semibold w-full focus:outline-0" placeholder="جستجو فرش" />
        </div>
      </nav>
    </Container>
    
  )
}

export default Header