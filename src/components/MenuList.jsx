"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const MenuList = ({mn}) => {
  const router = useRouter();
  return (
    <div>
      <Link onClick={()=> router.push(mn.url)} href={mn.url}>{mn.name}</Link>
    </div>
  )
}

export default MenuList
