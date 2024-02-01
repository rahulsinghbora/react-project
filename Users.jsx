import React from 'react'
import Sample from './Sample'
import './greeting.css'

const Users=({Users, increse,deletes})=>{
    return (
        <>
            { Users.map((u)=>{
                return  <Sample increase={increse} key={u.id} details={u} deletes={deletes}/>
            })}
        </>
    )
}
export default Users;