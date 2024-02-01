import React  from 'react';
import {useState} from 'react'
import Users from './component/Users'

const App=()=>{

  const[users,setuser] =useState([
    {id:1, firstname:"ram", lastname:"singh",age:22},
    {id:2,firstname:"john",lastname:"doe",age:24},
    {id:3,firstname:"michael",lastname:"jordan",age:26}
  ])

  const increase=(id)=>{
    setuser(users.map((user)=>{
      return (user.id===id) ? {...user,age:user.age+1}:user
    }))
     }

     const deletes=(id)=>{
      setuser((prev)=>{
        return prev.filter((userf)=>{
          return userf.id !==id
        })
      })
     }

  return( 
    <>
    <Users Users={users} increse={increase} deletes={deletes}/>
    </>
  )
}
export default App;