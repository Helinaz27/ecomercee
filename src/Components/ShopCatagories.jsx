import React from 'react'

function ShopCatagories() {
  return (
    <div className='mx-11 mt-11'>

       <h2 className='font-bold text-3xl'  >Shop</h2>
       <p className='mr-2 pr-[50rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae facilis optio soluta molestias corporis tempore quos ad suscipit quas, quasi illum est voluptatibus fugit porro, nam delectus repellendus reiciendis iure culpa iusto provident voluptates, praesentium accusantium temporibus? Tenetur, blanditiis eveniet?</p>

       <h2 className='text-right font-bold text-5xl'>Search functionality</h2>
        <div className=' flex flex-row space-x-5 mt-9 mb-9 justify-center'>
            <div className='w-[80px] h-5 bg-blue-950'></div>
            <div className='w-[80px] h-5 bg-blue-950'></div>
            <div className='w-[80px] h-5 bg-blue-950'></div>
            <div className='w-[80px] h-5 bg-blue-950'></div>
            <div className='w-[80px] h-5 bg-blue-950'></div>
            <div className='w-[80px] h-5 bg-blue-950'></div>
            <div className='w-[80px] h-5 bg-blue-950'></div>
        </div>

        <div className='flex justify-center  items-center my-6 mx-auto gap-12 '>
            <div className="bg-black w-[190px] h-[150px] ">

              <img src="https://palava.co/cdn/shop/files/Cynthia-MustardWildflowers-Front-Ccreambg_2048x2048.jpg?v=1708701888" alt="" className=' w-[190px] h-[150px]' />

            </div>
            <div className="bg-black w-[190px] h-[150px] ">
            <img src="https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/P/V/141731_1674227762.jpg" alt="" className=' w-[190px] h-[150px]' />
            </div>
            <div className="bg-black w-[190px] h-[150px] ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuu9jsyhSUP29ZoeJTxaUuh3XK-QVqEJ5jJZSjpaJJg&s" alt="" className=' w-[190px] h-[150px]' />
            </div>
        </div>

        <div className='flex justify-center  items-center my-6 mx-auto gap-12'>
            <div className="bg-black w-[190px] h-[150px] ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREH53zM4uyr3_XrPWMEpczrRsmwO7BY9e9Sy5BY2wvIg&s" alt="" className=' w-[190px] h-[150px]' />
            </div>
            <div className="bg-black w-[190px] h-[150px] ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrRruCjXhTE2vUzgjb7AJT8TnM6fw7pWPqQOGS9S3hczudK9Z8Cc5&usqp=CAE&s" alt="" className=' w-[190px] h-[150px]' />
            </div>
            <div className="bg-black w-[190px] h-[150px] ">
            <img src="https://cdn.pixabay.com/photo/2013/07/12/15/06/stiletto-149451_640.png" alt="" className=' w-[190px] h-[150px]' />
            </div>
        </div>
          
          <div className="flex justify-center">

        <button className='bg-black text-white px-[38px] py-[12px] rounded-md font-bold text-xl '>Button</button>
        </div>
    </div>
  )
}

export default ShopCatagories
