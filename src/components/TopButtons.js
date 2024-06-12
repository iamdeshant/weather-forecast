import React from 'react'

const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id: 1,
            title: 'Guwahati'
        },
        {
            id: 2,
            title: 'Noida'
        },
        {
            id: 3,
            title: "Chennai"
        },
        {
            id: 4,
            title: 'Kolkata'
        },
        {
            id: 5,
            title: 'Shimla'
        }
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city)=>(
            <button key={city.id} className='text-white text-lg font-medium' onClick={()=>setQuery({q: city.title})}>{city.title}</button>
        ))}
    </div>
  )
}

export default TopButtons