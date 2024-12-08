import React,{useState} from 'react'
import logo from "../assets/logo.png"
import { navItems } from '../constants'
import {Menu ,X} from "lucide-react"

function Navbar(){
  
    const [mobileDrawerOpen,setMobileDrawerOpen] = useState(false)

    function toggleNavbar()
    {
        setMobileDrawerOpen(!mobileDrawerOpen)
    };


  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between item-center">
                <div className="flex item-center flex-shrink-0">
                    <img className="h-7 w-10 mr-2" src={logo} alt="logo"/>
                    <span className="text-xl tracking-tight">CodeAra</span>

                </div>
                <ul className='hidden lg:flex ml-14 space-x-12'>

                    {navItems.map((item ,index)=>

                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    )}

                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <a href="#" className="py-2 px-3 border rounded-md">
                        Sign In
                    </a>

                    <a href="#" className="bg-gradient-to-r from-purple-500 to-purple-800 py-2 px-3 rounded-md">
                        Create an account
                    </a>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">

                    <button onClick={toggleNavbar}>
                        {mobileDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {mobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex-col justify-center item-center lg:hidden">
                    <ul>
                        {navItems.map((item ,index)=>
                        <li key={index} className='py-4 '>
                            <a href={item.href}>{item.label}</a>
                        </li>
                        )}
                    </ul>
                    <div className="flex space-x-6">
                        <a href='#' className='py-2 px-3 border rounded-md'>Sign In</a>
                        <a href='#' className='py-2 px-3 bg-gradient-to-r from-purple-500 to-purple-800 border rounded-md'> Create an account</a>
                    </div>
                </div>
            )}
        </div>
    </nav>

  )
}

export default Navbar