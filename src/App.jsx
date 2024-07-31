import React from 'react'
import Random from './components/Random.jsx'
import Tag from './components/Tag.jsx'

function App(){
  return (
    <div className='w-full background  flex flex-col items-center '>
        <h1 className='bg-white w-11/12 text-center mt-[40px] py-5 rounded-[15px] text-3xl font-bold '>RANDOM GIFS</h1>
        <div className='flex flex-col w-full items-center mt-6'>
          <Random/>
          <Tag/>
        </div>

    </div>
  )
}

export default App