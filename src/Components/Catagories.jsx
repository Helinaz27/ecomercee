import React from 'react'

function Categories() {
  return (
    <div>
        <div className='flex mx-auto mt-4 flex-col w-3/4 gap-6 items-center py-10'>
        <h1 className='font-bold text-[32px]'>Categories</h1>
        <p className='text-center'>Explore our beautiful selection of bags, shoes, and clothes for women. Find stylish bags to carry your essentials, like totes and crossbody bags. Step out confidently in our range of shoes, including heels and sneakers. Discover trendy and comfortable clothing, from basics to standout pieces. Express your style effortlessly with our curated collection. </p>
        <button className='bg-black text-white px-[38px] py-[12px] rounded-md'>Button</button>

        </div>

        <div className='flex justify-center  items-center my-6 mx-auto gap-12'>
            <div className="bg-black w-[300px] h-[250px] ">

              <img src="bag1.jpg" alt="" className='h-[250px] w-[300px]'/>

            </div>
            <div className="bg-black w-[300px] h-[250px] ">

             <img src="shoe1.jpg" alt=""  className='h-[250px] w-[300px]' />

            </div>
            <div className="bg-black w-[300px] h-[250px] ">

              <img src="dress1.jpg" alt="" className='h-[250px] w-[300px]' />
            </div>
        </div>
        
      
    </div>
  )
}

export default Categories
