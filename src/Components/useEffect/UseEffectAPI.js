import React, { useEffect, useState } from 'react'
import GithubUsers from '../github/githubUsers'
import Loading from '../github/Loading'

const UseEffectapi = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const getUsers = async () => {
        try {
            setLoading(false)
            const response = await fetch('https://api.github.com/users')
            setUsers(await response.json())
        } catch (error) {
            setLoading(false)
            console.log('My Error is : ',error)
        }
       
      
    }
    useEffect(()=>{
        getUsers()
    },[])

    if(loading){
        return <Loading />
    }

    return (
        <>
            <GithubUsers users={users} />
        </>
    )
}

export default UseEffectapi
