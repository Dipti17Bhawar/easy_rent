import './Flowers.css'
import { useState } from 'react'
import flowersData from '../../data'

import FlowerCard from '../../components/FlowerCard/FlowerCard'
import SearchBar from '../../components/SearchBar/SearchBar'

function Flowers() {
  const [search, setSearch] = useState('')

  const filteredFlowers = flowersData.filter((flower) =>
    flower.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='flowers-page'>
      <h1>Available Flowers</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <div className='flowers-container'>
        {
          filteredFlowers.map((flower) => {
            return (
              <FlowerCard
                key={flower.id}
                image={flower.image}
                name={flower.name}
                price={flower.price}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default Flowers