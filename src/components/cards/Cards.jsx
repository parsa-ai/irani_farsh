import Card from "../card/Card"

function Cards() {
    let arr = [{
        title: 'پادری دستبافت',
        link: 'مشاهده  و خرید پادری',
        url: '/posts',
        img: '../../assets/images/'
    },
    {
        title: 'موکت اتاق',
        link: 'مشاهده  و خرید موکت',
        url: '/posts',
        img: '../../assets/images/'
    },
    {
        title: 'فرش های رنگارنگ',
        link: 'مشاهده  و خرید فرش رنگارنگ',
        url: '/posts',
        img: '../../assets/images/'
    },
    {
        title: 'فرش های جدید',
        link: 'مشاهده  و خرید فرش جدید',
        url: '/posts',
        img: '../../assets/images/'
    }
]
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-6">
            <Card detial={arr[0]} />
            <Card className="col-start-1 row-start-2" detial={arr[1]} />
            <Card className="row-span-2 col-start-2 row-start-1" detial={arr[2]} />
            <Card className="row-span-2 col-start-3 row-start-1" detial={arr[3]} />
        </div>
    )
}

export default Cards