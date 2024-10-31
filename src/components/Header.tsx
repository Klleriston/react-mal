import { useContext, useEffect, useState } from 'react';
import { HiOutlineSearch, HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {
    const [toggle] = useState(true);
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className='flex items-center p-3'>
            <h1 className='text-[30px] font-mono dark:text-white font-bold'>MAL</h1>
            <div className='flex bg-slate-50 p-2 w-full items-center mx-5 rounded-full'>
                <HiOutlineSearch className='m-2' />
                <input type='text'
                    className='bg-transparent outline-none px-2'
                    placeholder='Busque um titulo'></input>
            </div>
            <div>
                {theme == 'ligth' ?
                    <HiOutlineMoon className='text-[45px] bg-[#fff] text-gray-500 p-1 rounded-full cursor-pointer'
                        onClick={() => {
                            setTheme('dark');
                            localStorage.setItem('theme', 'dark');
                        }} /> :
                    <HiOutlineSun className='text-[45px] bg-[#1e1e1e] text-gray-500 p-1 rounded-full cursor-pointer'
                        onClick={() => {
                            setTheme('ligth');
                            localStorage.setItem('theme', 'ligth');
                        }} />
                }
            </div>
        </div>
    )
}