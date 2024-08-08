import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header.jsx"

export default function RegisterPage(){
    const [username,setUsername]= useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const respsonse = await axios.post("http://localhost:3000/register",{username,email,password});
            console.log(respsonse)
            setEmail("")
            setUsername("")
            setPassword("")
            alert("User registered")
            navigate('/login')
        }catch(err){
            console.log(err)
            alert("Invalid input")
        }
        
    }

    return (
      <div >
        <Header/>
        <div className="bg-slate-800 h-auto w-96 m-auto rounded-md text-center">
        <h2 className="text-white p-3 text-2xl">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input className="bg-slate-500 rounded-md ml-8 m-3   outline-none text-white px-4 py-2 block w-80" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" value={username} required/>
          <input className="bg-slate-500 rounded-md ml-8  m-3 outline-none text-white px-4 py-2 block w-80" onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email" value={email} required/>
          <input className="bg-slate-500 rounded-md ml-8  m-3 outline-none text-white px-4 py-2 block w-80" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" value={password} required/>
          <button className="bg-white px-4 py-2 rounded-md m-3">Sign Up</button>
        </form>
        </div>
      </div>
    )
  }