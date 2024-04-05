import React from 'react'

const Datas = () => {
  return (
    <div className='grid place-items-center grid-cols-2 lg:grid-cols-3 w-screen md:px-15 lg:px-32 mt-48 gap-16'>
        <div className='flex flex-col items-center'>
            <h1 className='text-[4rem] font-poppins font-bold'>1<span className='text-base'> year</span></h1>
            <p className='text-lg font-quicksand text-center text-nowrap'>Web Dev Exp</p>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-[4rem] font-poppins font-bold'>3<span className='text-base'> langs</span></h1>
            <p className='text-lg font-quicksand text text-nowrap'>JS | TS | Python</p>
        </div>
        <div className='flex flex-col items-center col-span-2 lg:col-span-1'>
            <h1 className='text-[4rem] font-poppins font-bold'>0<span className='text-base'> client</span></h1>
            <p className='text-lg font-quicksand text-nowrap'>be the first pls</p>
        </div>
    </div>
  )
}

export default Datas