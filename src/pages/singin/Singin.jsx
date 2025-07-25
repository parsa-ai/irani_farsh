import { Link } from "react-router-dom"

import { KeyRoundIcon, Phone, User } from "lucide-react"

import Container from "../../components/container/Container"
import FloatingInput from "../../components/FloatingInput/FloatingInput"
import loginImg from '../../assets/images/login.png'
import Button from "../../components/button/Button"
import Header from '../../components/header/Header'
import './Singin.css'

function Singin() {

  return (
    <>
      <Laptop className='laptop'></Laptop>
      <Mobile className='mobile'></Mobile>
    </>
  )
}

function Laptop({ ...rest }) {
  function onsubmitForm(e) {
    e.preventDefault()
  }
  return (
    <>
      <Container {...rest}>
        <div className="flex  py-12 h-screen justify-between items-center">
          <div className="w-1/2 flex flex-col justify-between items-center gap-7" >
            <div className="flex flex-col justify-between items-center min-h-20">
              <h2 className="text-3xl text-primary font-bold h-1/2">
                <Link to='/'>ایرانی فرش</Link>
              </h2>
              <h3 className="text-shade2 font-bold text-2xl h-1/2">
                ثبت نام
              </h3>
            </div>
            <form onSubmit={(e) => onsubmitForm(e)} className="w-full flex flex-col gap-5 items-center">
              <FloatingInput text='نام' title='name'>
                <User
                  className="absolute right-3 top-[18px] text-gray-500 peer-focus:text-primary"
                  size={16}
                />
              </FloatingInput>
              <FloatingInput text='نام خانوادگی' title='lastName'>
              <User
                  className="absolute right-3 top-[18px] text-gray-500 peer-focus:text-primary"
                  size={16}
                />
              </FloatingInput>
              <FloatingInput text='ایجاد رمز عبور' title='pass' inputType='password'>
              <KeyRoundIcon
                  className="absolute right-3 top-[18px] text-gray-500 peer-focus:text-primary"
                  size={16}
                />
              </FloatingInput>
              <FloatingInput text='تکرار رمز عبور' title='pass2' inputType='password'>
              <KeyRoundIcon
                  className="absolute right-3 top-[18px] text-gray-500 peer-focus:text-primary"
                  size={16}
                />
              </FloatingInput>
              <FloatingInput text='شماره موبایل' title='phone' inputType='tel'>
              <Phone 
                  className="absolute right-3 top-[18px] text-gray-500 peer-focus:text-primary"
                  size={16}
                />
              </FloatingInput>
              <Button ColorBackground="bg-primary" color="text-white" className='hover:text-primary hover:bg-white border-2 w-full'>ثبت نام</Button>
              <Link to="/login">
                حساب کاربری دارید <span className="text-primary text-xl">وارد</span> شوید
              </Link>
            </form>
          </div>
          <div className="w-2/5 flex flex-col items-center h-full" >
            <img src={loginImg} alt="" className="rounded-[3rem] h-full object-cover w-full" />
          </div>
        </div>
      </Container></>
  )
}
function Mobile({ className, ...rest }) {
  function onsubmitForm(e) {
    e.preventDefault()
  }
  return (
    <div className={`flex flex-col ${className} relative`} {...rest}>
      <Header></Header>
      <div className="w-full flex flex-col items-center " >
        <img src={loginImg} alt="" className=" h-72 object-cover w-full" />
      </div>
      <Container className='absolute bg-white top-72 rounded-3xl '>
        <div className="flex h-full justify-center items-start">
          <div className="flex flex-col justify-between items-center w-full py-6 gap-6 " >
            <h5 className="text-shade2 font-bold text-xl h-1/2 ">
              ثبت نام
            </h5>
            <form onSubmit={(e) => onsubmitForm(e)} className="w-full flex flex-col gap-5 items-center">
              <FloatingInput text='نام' title='name'>
                <User
                  className="absolute right-3 top-[18px] text-gray-500 peer-focus:text-primary"
                  size={16}
                />
              </FloatingInput>
              <FloatingInput text='نام خانوادگی' title='lastName'>
              <User
                  className="absolute right-3 top-[18px] text-gray-500 peer-focus:text-primary"
                  size={16}
                />
              </FloatingInput>
              <FloatingInput text='ایجاد رمز عبور' title='pass' inputType='password'>
              <KeyRoundIcon
                  className="absolute right-3 top-[18px] text-gray-500 peer-focus:text-primary"
                  size={16}
                />
              </FloatingInput>
              <FloatingInput text='تکرار رمز عبور' title='pass2' inputType='password'>
              <KeyRoundIcon
                  className="absolute right-3 top-[18px] text-gray-500 peer-focus:text-primary"
                  size={16}
                />
              </FloatingInput>
              <FloatingInput text='شماره موبایل' title='phone' inputType='tel'>
              <Phone 
                  className="absolute right-3 top-[18px] text-gray-500 peer-focus:text-primary"
                  size={16}
                />
              </FloatingInput>
              <Button ColorBackground="bg-primary" color="text-white" className='hover:text-primary hover:bg-white border-2 w-full'>ثبت نام</Button>
              <Link to="/login">
                حساب کاربری دارید <span className="text-primary text-xl">وارد</span> شوید
              </Link>
            </form>
          </div>

        </div>
      </Container>
    </div>
  )
}

export default Singin