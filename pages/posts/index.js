import React from 'react'
import Link from 'next/link'

const post = ({posts}) => {
 
  return (
    <>
    {posts.map(item=>{
    return(
      <>
      <Link href={`posts/${item.id}`} >
    <h2>{item.id} {item.title}</h2>
    </Link>
    <hr/>
    </>
    )
    }
    )}
    </>
  ) 
}

export default post

export async function getStaticProps(){
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await response.json()


  return{
    props:{ 
      posts: data
    }
  }
}