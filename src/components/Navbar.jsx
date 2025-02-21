import React from 'react'

const Navbar = () => {
    return (

        <nav className='flex justify-between items-center bg-slate-900 text-white h-12 p-9'>
        <div className="logo w-12 flex items-center gap-2 border-black">
        <img src="https://i.pinimg.com/736x/31/14/5e/31145e7925e59e8fb344f13422435dba.jpg"
        alt=""/> 
       <div className="name font-serif font-bold cursor-pointer">iTask</div>
        </div>
           <ul className='flex gap-3 absolute right-4 '>
                <li  className=' hover:font-bold cursor-pointer hover:underline'>Home</li>
                <li className='  hover:font-bold cursor-pointer hover:underline '>Your Task </li>
            </ul>
        
        </nav>

    )
}

export default Navbar
