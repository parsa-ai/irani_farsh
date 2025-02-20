import Header from '../header/Header';
function MainLayout({ children }) {
  return (
    <>
      <Header></Header>
      <main>
        {children}
      </main>
    </>
  )
}

export default MainLayout