import { LogIn, LucideShoppingCart, Search } from "lucide-react"
import Container from "../container/Container"
import Button from "../button/Button"
import { Link, NavLink } from "react-router-dom"

function Header() {
  return (
    <Container >
      <header className="flex pt-6 justify-between items-center ">
        <div className="flex justify-between items-center gap-6">
          <h2 className="text-2xl text-primary font-bold">ایرانی فرش</h2>
          <div className="bg-neutral3 p-3 rounded-xl gap-2 max-w-md w-md h-12 flex items-center">
            <Search size={24} className="text-neutral9"></Search>
            <input type="text" name="" id="" className="text-neutral9 text-lg font-semibold w-full focus:outline-0" placeholder="جستجو فرش" />
          </div>
        </div>
        <div className="flex justify-between items-center gap-4">
          <Button><LucideShoppingCart></LucideShoppingCart></Button>
          <Button>
            <LogIn></LogIn>
            <p className="font-semibold">ورود/ثبت نام</p>
          </Button>
        </div>
      </header>
      <nav className='border-b border-neutral6'>
        <ul className="flex gap-8 py-2">
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
      </nav>
    </Container>
  )
}

export default Header