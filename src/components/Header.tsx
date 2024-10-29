import { useState } from 'react';
import MalLogo from '../assets/images/MalLogo.png'
import { HiOutlineSearch, HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";

export default function Header() {
    const [toggle, setToggle] = useState(true)
    return (
        <div className='flex items-center p-3'>
            <img src={MalLogo} width={60} height={60} className='rounded-full' />
            <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
                <HiOutlineSearch className='m-2' />
                <input type='text' className='bg-transparent outline-none px-2' placeholder='Busque um titulo'></input>
            </div>
            <div>
                {toggle ? <HiOutlineMoon className='text-[45px] bg-slate-200 text-gray-500 p-1 rounded-full cursor-pointer' onClick={() => setToggle(!toggle)} /> :
                    <HiOutlineSun className='text-[45px] bg-slate-200  text-gray-500 p-1 rounded-full cursor-pointer' onClick={() => setToggle(!toggle)} />}
            </div>
        </div>
    )
}