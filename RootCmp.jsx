import { AppHeader } from './cmps/AppHeader.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { BookDetails } from './pages/BookDetails.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'

const Router = ReactRouterDOM.HashRouter
const { Routes, Route, Navigate } = ReactRouterDOM

export function App() {
  return (
    <Router>
      <section className='app'>
        <AppHeader />
        <main className='main-layout'>
          <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/book' element={<BookIndex />} />
            <Route path='/book/:bookId' element={<BookDetails />} />
            {/* <Route path='/book/edit' element={<BookEdit />} /> */}

            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
        <UserMsg />
      </section>
    </Router>
  )
}
