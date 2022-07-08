import React from 'react'

const postid = ({post}) => {
  return (
    <>
    <h2>{post.id} {post.title}</h2>
    <p>{post.body}</p>
    </>
  )
}

export default postid


export async function getStaticPaths(){
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()

    const paths = data.map(item=>{
        return{
            params:{
                postid: `${item.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
      }
}

export async function getStaticProps(context){

    const {params} = context
    const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
    const data = await response.json()
     
    return {
        props:{
            post: data
        }
    }
}
// export async function getServerProps(context){
    
//     console.log(context);
//     const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${query.postid}`)
//     const data = await response.json()
     
//     return {
//         props:{
//             post: data
//         }
//     }
// }