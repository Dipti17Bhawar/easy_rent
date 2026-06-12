import './About.css'

function About() {
  return (
    <div className='about-page'>
      <h1>About Our Flower Shop</h1>

      <p>
        We provide fresh flowers with premium quality and affordable prices.
        Our mission is to make every occasion beautiful and memorable.
      </p>

      <div className='about-boxes'>
        <div className='box'>
          <h2>1000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className='box'>
          <h2>500+</h2>
          <p>Flower Designs</p>
        </div>

        <div className='box'>
          <h2>24/7</h2>
          <p>Support</p>
        </div>
      </div>
    </div>
  )
}

export default About