import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  return (
    <div className=' bg-slate-100 items-center flex justify-between'>

      <NavLink to='/' className="text-center" >

      <h1 className='text-black text-xl hover:bg bg-slate-200 block mx-auto w-4/5 text-center' > Header</h1>

      </NavLink>
        
        <NavLink to='cart'>
        <button  className='px-16 h-[45px] bg-black text-white'>Cart</button>
        </NavLink>
    
    </div>
  )
}

export default Header
