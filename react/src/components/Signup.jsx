import React, { useState } from 'react'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [subject, setSubject] = useState("")
    const [phone, setPhone] = useState("")
    

    const handleClick = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(subject)
        console.log(phone)
        setName("")
        setEmail("")
        setPhone("")
        setSubject("")
    }
  return (
    <div className='h-125 w-screen flex items-center justify-center bg-gray-700'>
        <div className='w-90 h-fit bg-white/20 backdrop-blur-lg border border-white/90 rounded-2xl p-4 shadow-lg'>
            <div className='mb-8'>
                <h1 className='text-white text-center font-bold text-2xl'>Form</h1>
            </div>
            <form action="submit" className='flex flex-col gap-6 items-center'>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className='w-full bg-white px-3 py-2 rounded outline-0' placeholder='Name'/>
                <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" className='w-full bg-white px-3 py-2 rounded outline-0' placeholder='Subject'/>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" className='w-full bg-white px-3 py-2 rounded outline-0' placeholder='Phone'/>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className='w-full bg-white px-3 py-2 rounded outline-0' placeholder='Email'/>
                
                <button type="button"  onClick={handleClick} className='w-1/2 bg-white px-3 py-2 rounded outline-0 mt-8 cursor-pointer hover:bg-gray-200'>
                Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Signup