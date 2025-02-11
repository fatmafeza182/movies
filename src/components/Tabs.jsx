"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre')|| 'popular';
  
    const tabs =[
        {
            name:"En popüler",
            url:"popular",
        },
        {
            name:"En yüksek reyting",
            url:"top_rated",
        },
        {
            name:"Yakında gelecekler",
            url:"upcoming"
        }
    ]
  return (
    <div className='flex items-center gap-7 justify-center bg-slate-300 dark:bg-slate-700 h-20 '>
      {
        tabs?.map((tab,i)=>(
            <Link className={` font-bold text-xl font-serif ${genre === tab.url ? "text-orange-900" : "text-orange-400"}`} href={`/?genre=${tab.url}`} key={tab.url}>{tab.name}</Link>
        ))
      }
    </div>
  )
}

export default Tabs
