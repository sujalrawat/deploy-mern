import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header.jsx"

export default function LoginPage(){
    const [username,setUsername]= useState("");
    const [password,setPassword]= useState("");
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault()
        try{
            const respsonse = await axios.post("https://deploy-mern-beryl.vercel.app/login",{username,password},{withCredentials:true});
            console.log(respsonse)
            setUsername("")
            setPassword("")
            alert("Logged In")
            navigate("/home")
        }catch(err){
            console.log(err)
            alert("Invalid credentials")
        }
        
    }

    return (
      <div>
        <Header/>
        <div className="bg-slate-800 h-auto w-96 m-auto rounded-md text-center">
        <h2 className="text-white p-3 text-2xl">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input className="bg-slate-500 rounded-md ml-8  m-3 outline-none text-white px-4 py-2 block w-80" onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username or email" value={username} required/>
          <input className="bg-slate-500 rounded-md ml-8  m-3 outline-none text-white px-4 py-2 block w-80" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" value={password} required/>
          <button className="bg-white px-4 py-2 rounded-md m-3" type="submit">Sign In</button>
        </form>
        </div>
      </div>
    )
  }
