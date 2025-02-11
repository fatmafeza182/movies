"use client"
import React, { useState } from 'react'
import ThemeChange from './ThemeChange'
import { CiUser } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import MenuList from './MenuList';
import { useRouter } from 'next/navigation';



const Header = () => {
    const [keyword,setKeyword] = useState('');
    const router = useRouter();
    const menu = [
        {
            name :<CiUser size={25}/>,
            url:"/login"
        },
        {
            name:<IoMdPersonAdd size={25}/>,
            url:"/register"
        }
    ]
    const searchFunc = (e)=>{
        if(e.key === "Enter" && keyword.length >= 2){
            router.push(`search/${keyword}`)
            setKeyword('');
        }
    }
  return (
    <div className='flex items-center gap-3 h-20 p-3'>
        <div onClick={() => router.push("/")} className='text-5xl text-orange-400 font-serif font-bold cursor-pointer'>MOVİE ...</div>
        <div className='flex flex-1 items-center gap-2 p-3 border rounded-md '>
            <input value={keyword} onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} className=' bg-transparent w-full flex outline-none ' type='text' placeholder='Bir şeyler ara...'></input>
        </div>
        <ThemeChange/>
        {
            menu?.map((mn,i)=>(
                <MenuList mn={mn} key={i} />
            ))
        }
        
    </div>
  )
}

export default Header
