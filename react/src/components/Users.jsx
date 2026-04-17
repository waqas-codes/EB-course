import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUser] = useState([])
  useEffect(() => {
    const getData = async () => {
      const apiData = await fetch('https://jsonplaceholder.typicode.com/users')
      const fakeData = await apiData.json()
      setUser(fakeData)
      console.log(fakeData)
    }
    getData()
  }, [])
  return (
    <div className='h-125 w-screen flex items-center justify-center bg-gray-700'>
        {
          users ? <div className='w-120 h-fit bg-white/20 backdrop-blur-lg border border-white/90 rounded-2xl p-4 shadow-lg'>
            {
              users.map((user) => 
              <h1 className='text-xl text-white'>{user.name}</h1>
            )
            }
        </div> : <h1>loading...</h1>
        }
    </div>
  )
}

export default Users