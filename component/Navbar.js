import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <><div className="navbar">
      <Link href="/users"><a>Users</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="/posts"><a>Post</a></Link>
      <Link href="/contact"><a>Contact Us</a></Link>
      <Link href="/comments"><a>Comments</a></Link>
      </div>
    </>
  )
}

export default Navbar