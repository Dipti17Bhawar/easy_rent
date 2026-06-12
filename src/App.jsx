import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import './App.css'

import Home from './views/Home/Home'
import About from './views/About/About'
import Flowers from './views/Flowers/Flowers'
import Contact from './views/Contact/Contact'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/flowers' element={<Flowers />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App