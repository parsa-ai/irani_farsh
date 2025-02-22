import Footer from '../footer/Footer';
import Header from '../header/Header';
function MainLayout({ children }) {
  return (
    <>
      <Header></Header>
      <main>
        {children}
      </main>
      <Footer></Footer>
    </>
  )
}

export default MainLayout