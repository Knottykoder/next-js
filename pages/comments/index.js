import React, { useState } from 'react'

const commentList = () => {

    const [comment , setcomment] = useState([])
    const [input, setinput] = useState('')

    const fetchcomment =  async()=>{
        const res = await fetch("/api/comments")
        const data = await res.json()
        setcomment(data)
    }

    const submitcomment = async()=>{
        const res = await fetch("/api/comments",{

            method:'POST',
            body: JSON.stringify({input}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        const data = await res.json()
        console.log(data);
    }

    const deletecomment = async(commentId)=>{
       const res = await fetch (`/api/comments/${commentId}` ,{
        method: "DELETE",
       })
       const data = await res.json()
       console.log(data);
       fetchcomment()
       }
    

  return (
   <>
 
   <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
   <button onClick={submitcomment}>Submit comment</button>
   <button onClick={fetchcomment}>Load comments</button>
   {comment.map(item=>{
    return (
        <>
        <h2 key={item.id}>{item.id} {item.text}</h2>
        <button onClick={()=>deletecomment(item.id)}>Delete</button>
        </>
    )
   })}
   </> 
  )}
export default commentList



//