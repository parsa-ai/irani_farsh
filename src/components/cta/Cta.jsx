import Button from "../button/Button"
import Container from "../container/Container"
import cta from '../../assets/images/cta.png'

import './Cta.css'
import { Link } from "react-router-dom"

function Cta() {
    return (
        <Container>
            <Container>
                <div className='flex justify-center items-center gap-36 h-auto cta'>
                    <div className="flex flex-col items-center justify-center gap-5 text-center w-1/2" >
                        <p className="text-[41px] cta-title ">عضویت در باشگاه مشتریان
                            <span className="text-primary "> ایـــرانی فرش</span></p>
                        <p className="text-xl/relaxed cta-text">با عضویت در باشگاه مشتریان ایرانــی فرش زودتر از تخفیفات با خبر شوید و از امکان تحویل رایگان فرش های خود بهره مند شوید.</p>
                        <Link to='/login' className="w-full">
                            <Button className='w-full hover:bg-primary hover:text-white cta-btn-lg'>ایجاد عضویت</Button>
                            <Button className='w-full hover:bg-primary hover:text-white cta-btn-md' size="sm">ایجاد عضویت</Button>
                        </Link>
                    </div>
                    <div className="w-1/2 flex items-center relative ">
                        <img src={cta} alt="" className="w-full h-fit" />
                        <div className="w-full h-1 absolute bg-white top-1/2"></div>
                        <div className="w-1 h-full absolute bg-white right-1/2"></div>
                    </div>
                </div>
            </Container>
        </Container>
    )
}

export default Cta