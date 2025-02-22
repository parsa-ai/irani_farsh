import Cards from "../../components/cards/Cards"
import Hero from "../../components/hero/Hero"

import s1 from '../../assets/images/s1.png'
import s2 from '../../assets/images/s2.png'
import s3 from '../../assets/images/s3.png'
import s4 from '../../assets/images/s4.png'
import d1 from '../../assets/images/d1.png'

import Products from "../../components/products/Products"


function Home() {
  let arr = [{
    title: 'پادری دستبافت',
    link: 'مشاهده  و خرید پادری',
    url: '/posts',
    img: s4
  },
  {
    title: 'موکت اتاق',
    link: 'مشاهده  و خرید موکت',
    url: '/posts',
    img: s3
  },
  {
    title: 'فرش های رنگارنگ',
    link: 'مشاهده  و خرید فرش رنگارنگ',
    url: '/posts',
    img: s1
  },
  {
    title: 'فرش های جدید',
    link: 'مشاهده  و خرید فرش جدید',
    url: '/posts',
    img: s2
  }]
  let arr2 = {
    id: 0,
    items: [{
      id: 0,
      title: 'فرش ماشینی فرش رادین طرح شاه عباسی آرامش زمینه کرم',
      price: '۶/۳۰۳/۰۰۰',
      img: d1
    },
    {
      id: 1,
      title: 'فرش ماشینی فرش رادین طرح شاه عباسی آرامش زمینه کرم',
      price: '۶/۳۰۳/۰۰۰',
      img: d1
    }, {
      id: 2,
      title: 'فرش ماشینی فرش رادین طرح شاه عباسی آرامش زمینه کرم',
      price: '۶/۳۰۳/۰۰۰',
      img: d1
    }, {
      id: 3,
      title: 'فرش ماشینی فرش رادین طرح شاه عباسی آرامش زمینه کرم',
      price: '۶/۳۰۳/۰۰۰',
      img: d1
    }]
  }
  return (
    <>
      <div className="flex flex-col gap-[7.5rem]">
        <Hero />
        <Cards items={arr} />
        <Products title='فرش های ماشینی' ipaa={arr2} />
        <Cards items={arr} />
        <Products title='فرش های دستبافت' ipaa={arr2} />
      </div>
    </>
  )
}

export default Home