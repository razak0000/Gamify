import React from 'react'


const Propsample = ({cars}) => {
  return (
    <div>
        {cars.map((car,index) => (
            <div className='cards'>
            <h1 key={index}>{car}</h1>
      </div>
        ))}
    </div>
  )
}

export default Propsample
