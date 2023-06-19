import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-1/2 m-auto mt-10 font-semibold' >
        <ul className='flex  justify-evenly ' >
          <Link href='/'><li>Home</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/blogs'><li>Blogs</li></Link>
          <Link href='/content'><li>Content</li></Link>
        </ul>
    </div>
  )
}

export default Navbar
