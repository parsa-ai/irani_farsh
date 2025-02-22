import { Link } from "react-router-dom"
import Container from "../container/Container"
import Button from "../button/Button"
import { ArrowLeft } from "lucide-react"

import "./Products.css";
function Products({ title , ipaa }) {
    let items = ipaa?.items  
    return (
        <>
            <Container >
                <div className='flex flex-col gap-8'>
                    <div className="flex justify-between items-center">
                        <h4 className="text-2xl font-bold products-text ">{title}</h4>
                        <Link to={`/${ipaa.id}`}>
                            <Button size="lg">
                                <h5>مشاهده بیشتر</h5>
                                <ArrowLeft />
                            </Button>
                        </Link>
                    </div>
                    <div className="flex gap-6 products-lg">
                        {items.map((item, index) => (
                            <Product detial={item} className=' border border-neutral5 rounded-xl p-4 flex flex-col gap-6' key={index} />
                        ))}
                    </div>

                </div>
            </Container>
            <div className="flex mr-[5%] gap-6 products-md overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide mt-8 ">
                {items.map((item, index) => (
                    <Product detial={item} className=' border border-neutral5 rounded-xl p-4 flex flex-col gap-6 snap-center shrink-0  w-72' key={index} />
                ))}
            </div>

        </>
    )
}

function Product({ detial, ...rest }) {
    return (
        <>
            <div {...rest}>
                <img src={detial.img} alt="" className="w-full " />
                <p className="text-lg">{detial.title}</p>
                <div className="w-full flex justify-between ">
                    <span className="text-sm">قیمت</span>
                    <span className="text-lg">{detial.price} تومان</span>
                </div>
                <Link to={`/single/${detial.id}`}>
                    <Button className='w-full' size="md">
                        مشاهده بیشتر
                    </Button>
                </Link>
            </div>
        </>
    )
}
export default Products