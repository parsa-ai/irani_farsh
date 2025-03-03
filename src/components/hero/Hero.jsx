import Button from "../button/Button"
import Container from "../../components/container/Container"
import Group from '../../assets/images/Group 3.png'
import vactorArrow from '../../assets/images/Vector 641.svg'

import './Hero.css'
function Hero() {
    return (
        <Container>
            <div className="  w-full flex justify-between items-center gap-24 py-20  hero-img">
                <div>
                    <div className="w-xl text-center flex flex-col gap-6 justify-center items-center hero-text">
                        <h2 className="text-BLACK text-[40px] font-bold hero-h2">
                            خرید راحت فرش،در
                            <span className="text-primary">ایرانی فرش</span>
                        </h2>
                        <p className="text-BLACK text-2xl font-semibold mb-6 hero-p">
                            با ایـــرانی فرش در سریع ترین زمان ممکن فرش خودت رو سفارش بده
                            و از تنوع بی نظیر فرش ها لذت ببر.
                        </p>
                        <div className="flex gap-10 hero-btn">
                            <Button size="lg" className='hero-btn-lg'>محصولات ویژه ایرانی فرش</Button>
                            <Button size="lg" ColorBackground="bg-primary" color="text-white" className='hover:text-primary hover:bg-white hero-btn-lg '>عضویت در باشگاه مشتریان</Button>
                            <Button size="sm" className='hero-btn-sm py-5'>محصولات ویژه ایرانی فرش</Button>
                            <Button size="sm" ColorBackground="bg-primary" color="text-white" className='hover:text-primary hover:bg-white hero-btn-sm py-5'>عضویت در باشگاه مشتریان</Button>
                        </div>
                    </div>
                </div>
                <div className=" w-full h-full flex items-center justify-center relative ">
                    <div className="h-full flex items-center justify-end relative ">
                        <img src={Group} alt='Group' />
                        <img src={vactorArrow} alt="vactorArrow" className="absolute bottom-8 w-1/5" />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero