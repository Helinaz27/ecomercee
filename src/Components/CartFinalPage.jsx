import React from 'react'

function CartFinalPage() {
  return (
    <div className='py-[10rem]'>
          <div>
            <h1 className='font-bold text-5xl text-center'>Bought Items</h1>
          </div>

          <div  className='grid grid-cols-2 grid-rows-3 gap-y-4 ml-[150px] py-11'>

            <div className='bg-black w-[30rem] h-[45px]'></div>
            <div className='bg-black w-[30rem] h-[45px]'></div>
            <div className='bg-black w-[30rem] h-[45px]'></div>
            <div className='bg-black w-[30rem] h-[45px]'></div>
            <div className='bg-black w-[30rem] h-[45px]'></div>
            <div className='bg-black w-[30rem] h-[45px]'></div>

          </div>
    </div>
  )
}

export default CartFinalPage
