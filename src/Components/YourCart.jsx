import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

function YourCart() {
    const navigate = useNavigate()
  return (
 <div className='mx-[100px] my-10' >

    {/* Top Section */}
    <div>
        <h1 className='font-bold text-xl' >Your Cart</h1>
        <p>Now read to checkout ? Coninue Shopping</p>
    </div>


    {/* Bottom Section */}
    <div className='flex gap-12  max-md:flex-col'>

        {/* Left Section */}
        <div  className='w-[50%] max-md:w-full flex flex-col gap-[10%]'>
            {/* Items 1 */}
            <div className='flex gap-6 items-center'>
                <div   className='w-[200px] h-[200px] bg-black'  >

                <img src="https://lakethompsonhoney.com/wp-content/uploads/2022/01/2lb-Honey-Jug.jpg" alt="" className='w-[200px] h-[200px]' />

                </div>

                <div className='w-[80%]'>
                    <h1 className='font-bold text-xl' >
                        Natural Honey Bottle
                    </h1>
                    <span> Size L</span>

                    <div className='flex justify-between items-center' >
                            <span>Quantity 1</span>
                            <span>Vendor Name</span>
                    </div>
                    

                    <div className='flex justify-between items-center' >
                            <h1 className='font-bold text-xl' >
                                $99
                            </h1>


                            <span>                            Remove
                            </span>

                    </div>
                    
                </div>

            </div>

            <hr />

            {/* Seccond Item */}

            <div className='flex gap-6 items-center'>
                <div   className='w-[200px] h-[200px] bg-black'  >

                <img src="https://lakethompsonhoney.com/wp-content/uploads/2022/01/2lb-Honey-Jug.jpg" alt="" className='w-[200px] h-[200px]' />

                </div>

                <div className='w-[80%]'>
                    <h1 className='font-bold text-xl' >
                        Natural Honey Bottle
                    </h1>
                    <span> Size L</span>

                    <div className='flex justify-between items-center' >
                            <span>Quantity 1</span>
                            <span>Vendor Name</span>
                    </div>
                    

                    <div className='flex justify-between items-center' >
                            <h1 className='font-bold text-xl' >
                                $99
                            </h1>


                            <span>                            Remove
                            </span>

                    </div>
                    
                </div>

            </div>


        </div>


        {/* Right Section */}
        <div className='w-[50%] max-md:w-full flex flex-col h-[100px'>

            <div className='flex justify-between' >
                <span>Subtotal</span>
                <span>120</span>
            </div>

            <div className='flex justify-between' >
                <span>Shipping</span>
                <span>Calculated at the next step</span>

                <hr />

                <div className='flex justify-between' >
              
            </div>

            <div className='flex justify-between'>
            <span>Total</span>
                <span>120</span>
            </div>

            
            </div>

        <NavLink to='items'>

            <button className='px-12 font-bold text-white mt-[30px] py-4 bg-red-700 hover:bg-red-800 active:bg-red-900'>Continue to checkout</button>

           
            </NavLink>

            

        </div>


    </div>

 </div> 
  )
}

export default YourCart
