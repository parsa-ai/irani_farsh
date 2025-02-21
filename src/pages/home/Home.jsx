import Cards from "../../components/cards/Cards"
import Hero from "../../components/hero/Hero"

import s1 from '../../assets/images/s1.png'
import s2 from '../../assets/images/s2.png'
import s3 from '../../assets/images/s3.png'
import s4 from '../../assets/images/s4.png'


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
  }
  ]
  return (
    <>
      <Hero />
      <Cards items={arr} />
    </>
  )
}

export default Home