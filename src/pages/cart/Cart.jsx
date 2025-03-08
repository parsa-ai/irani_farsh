import Container from '../../components/container/Container'
import Button from '../../components/button/Button'
import photo from '../../assets/images/f2.png'
import { Minus, Plus } from 'lucide-react'
import { useState } from 'react'

import './Cart.css'

function Cart() {
  const [ count , setCount ] = useState(1)

  const x = { img: photo, title: "فرش ماشینی  ماهساره طرح آترینا زمینه آبی", color: 'آبی ', price: '۱۳/۵۰۰/۰۰۰', company: 'شرکت فرش سهند'   }
  return (
    <Container>
      <h2 className='text-xl font-bold mt-6 mb-7'>سبد خرید</h2>
      <div className='flex justify-between main-cart' >
        <div className='w-4/6 bg-white border border-neutral7 rounded-lg flex flex-col gap-12 px-5 py-7 h-fit'>
          <CartItem data={x} count= {count}  setCount ={ setCount}></CartItem>
          <CartItem data={x} count= {count}  setCount ={ setCount}></CartItem>
          <CartItem data={x} count= {count}  setCount ={ setCount}></CartItem>
          <CartItem data={x} count= {count}  setCount ={ setCount}></CartItem>
          <CartItem data={x} count= {count}  setCount ={ setCount}></CartItem>
          <CartItem data={x} count= {count}  setCount ={ setCount}></CartItem>
          <CartItem data={x} count= {count}  setCount ={ setCount}></CartItem>
          <CartItem data={x} count= {count}  setCount ={ setCount}></CartItem>
        </div>
        <div className='w-1/4 relative'>
          <div className='w-full sticky top-36 bg-white border border-neutral7 rounded-lg flex flex-col gap-8 px-5 py-7 ' >
            <div className='flex justify-between'>
              <p className='text-base font-semibold text-black'>تعداد فرش:</p>
              <p className='text-xl font-semibold text-black'>۱</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-base font-semibold text-black'>مجموع سبد خرید: </p>
              <p className='text-xl font-semibold text-black'>۱۳/۵۰۰/۰۰۰</p>
            </div>
            <div className='flex justify-between'>
              <p className='text-base font-semibold text-black'>ارسال توسط:</p>
              <p className='text-xl font-semibold text-black '>ایرانی فرش</p>
            </div>
            <Button ColorBackground='bg-primary' color='text-white' className='hover:text-primary hover:bg-white' size='lg'>سفارش و خرید</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

function CartItem({ data , count , setCount }) {
  
  return (
    <div className='flex items-center gap-6 w-full item-cart '>
      <div className='w-28 img'>
        <img src={data.img} alt="" />
      </div>
      <div className='flex flex-col gap-3.5 w-full  '>
        <h5 className='text-xl font-semibold '>{data.title}</h5>
        <span className='text-BLACK font-medium'>رنگ :‌ {data.color}</span>
        <span className='text-BLACK font-medium'>{data.company}</span>
        <div className='flex justify-between'>
          <div>
            <span className='text-BLACK font-medium'>قیمت‌ : {data.price}</span>
          </div>
          <div className='flex gap-3.5 items-center count-div'>
            <button onClick={()=> setCount(count +1)}><Plus size={14}/></button>
            <p className='w-2'>{count}</p>
            <button onClick={()=> {if(count > 1){setCount(count - 1)}}}><Minus size={14}/></button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cart