import { Link } from 'react-router-dom'
import Button from '../button/Button'
import './Card.css'

function Card({ detial, className }) {
    return (
        <div className={`${className} w-full h-full rounded-2xl bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${detial.img})` }}>
            <Link to={detial.url} >
                <div className='w-full h-full gr rounded-2xl items-end flex p-3 ' >
                    <div className='flex flex-col gap-2'>
                        <p className='text-white text-xl'>{detial.title}</p>
                        <Button size='lg' ColorBackground='bg-transparent' borderColor='border-white' color='text-white' className='hover:bg-white hover:text-BLACK'>{detial.link}</Button>
                    </div>
                </div>
            </Link>
        </div>
    )
}
export default Card

