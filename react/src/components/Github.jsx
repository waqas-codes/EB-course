import React, { useEffect, useState } from 'react'

const Github = () => {
    const [githubUser, setGithubUser] = useState([])
    useEffect(() => {
        const getData = async () => {
            const data = await fetch('https://api.github.com/users/waqas-codes')
            const record = await data.json()
            setGithubUser(record)
            // console.log(record)
        }

        getData()
    }, [])
  return (
    <div className='h-125 w-screen flex items-center justify-center bg-gray-700'>
        <div className='w-120 h-fit bg-white/20 backdrop-blur-lg border border-white/90 rounded-2xl p-4 shadow-lg'>
            <h1 className='font-bold text-white text-2xl'>Name : {githubUser.name}</h1>
            <h1 className='font-bold text-white text-2xl'>followers : {githubUser.followers}</h1>
            <h1 className='font-bold text-white text-2xl'>Location : {githubUser.location}</h1>
        </div>
    </div>
  )
}

export default Github