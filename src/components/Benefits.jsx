import React from 'react'

export default function Benefits() {
  return (
    <div className='flex flex-wrap min-h-screen p-10 min-w-full place-items-center justify-center '>
      <div className="card bg-white border-s-4 rounded-none border-l-green-500 flex flex-row max-w-96 h-48 m-5 flex-grow place-items-center">
        <img className='max-h-24' src="/src/assets/calories-calculator.png" alt="img"/>
        <p className='p-5'> Easily track your daily nutrient intake for better health management.</p>
      </div>
      <div className="card bg-white border-s-4 rounded-none border-l-green1 flex flex-row max-w-96 h-48 m-5 flex-grow place-items-center">
        <img className='max-h-24' src="/src/assets/nutrients.png" alt="img"/>
        <p className='p-5'> Get detailed nutrient data to meet your dietary goals.</p>
      </div>
      <div className="card bg-white border-s-4 rounded-none border-l-brownish flex flex-row max-w-96 h-48 m-5 flex-grow place-items-center">
        <img className='max-h-24' src="/src/assets/calories.png" alt="img"/>
        <p className='p-5'> Access calories of each ingredient seperately.</p>
      </div>
      <div className="card bg-white border-s-4 rounded-none border-l-darker flex flex-row max-w-96 h-48 m-5 flex-grow place-items-center">
        <img className='max-h-24' src="/src/assets/nutrient.png" alt="img"/>
        <p className='p-5'> Easy to use Interface for better user experience.</p>
      </div>
    </div>
  )
}
