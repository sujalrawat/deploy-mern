import {Link} from "react-router-dom"
import Header from "../layout/Header.jsx"

export default function Lander(){
    return (
        <div >
            <Header/>
            <div className="mt-56 flex items-center justify-center">
            <Link to="/register"><button className="bg-white px-4 py-2 rounded-md m-3 text-3xl hover:bg-violet-600">Sign Up</button></Link>
            <Link to="/login"><button className="bg-white px-4 py-2 rounded-md m-3 text-3xl hover:bg-violet-600">Sign In</button></Link>
            </div>
        </div>
    )
}