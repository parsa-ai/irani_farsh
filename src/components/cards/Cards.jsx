import Card from "../card/Card"
import Container from "../container/Container"
import './Cards.css'

function Cards({ items, rest }) {
    return (
        <div>
            <Container>
                <div className="grid grid-cols-3 grid-rows-2 gap-4 h-72 Cards-gride-xl" {...rest}>
                    <Card className="row-span-2" detial={items[0]} />
                    <Card className="row-span-2" detial={items[1]} />
                    <Card detial={items[2]} />
                    <Card className="col-start-3" detial={items[3]} />
                </div>
            </Container>

            <div className="flex gap-4 h-72 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide Cards-gride-lg "  {...rest}>
                {items.map((item, index) => (
                    <div key={index} className="snap-center shrink-0 w-full">
                        <Card detial={item} className=' mr-[5%]' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards