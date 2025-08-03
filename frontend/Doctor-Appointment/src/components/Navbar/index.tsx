import { Link } from "react-router-dom"
import DoctorImage from "../../assets/doctorIMage.jpg"
import "./index.css"
const Navbar = ()=>{
    return (
        <nav className="fixed w-full text-s flex flex-row justify-between top-0 left-0 p-4 bg-[#efefef]">
            <Link to="/">
           <div className="flex flex-row justify-between w-110 items-center">
            
             <img src={DoctorImage} alt="doctor" className="w-15 rounded-full"/>
             <h1 className="font-bold text-2xl">NirogGyan Doctor Appointment</h1>
            
            </div> 
         </Link>
        <div className="flex flex-row justify-between items-center w-1/3">
             <h1 className="font-bold text-2xl">24/7 Appointment Available</h1>
             <h1 className="font-bold text-2xl">Contact </h1>
        </div>      
         
        </nav>
    )
}

export default Navbar