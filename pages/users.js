import React from 'react'

const users = ({users}) => {
  return (
    <ul>
    {users.map((user)=>(
        <>
        <li><h2>{user.name}</h2></li>
        <li><h4>{user.email}</h4></li>
        <li><p>{user.address.city}</p></li>
        </>
    ))}</ul>
    )

    }
  


export default users


export async function getStaticProps(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()
  console.log(data);

  return{
    props:{
        users: data
    }
  }
}