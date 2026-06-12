import './FlowerCard.css'

function FlowerCard({ image, name, price }) {
  return (
    <div className='flower-card'>
      <img src={image} alt={name} className='flower-image' />

      <div className='flower-info'>
        <h3>{name}</h3>
        <p>₹ {price}</p>

        <button className='buy-btn'>Buy Now</button>
      </div>
    </div>
  )
}

export default FlowerCard