import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <h2 className='logo'>FlowerShop</h2>

      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/flowers'>Flowers</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar