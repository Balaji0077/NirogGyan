import { Link, useParams} from "react-router-dom"
import {useState , useEffect} from "react"
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "../Navbar"
import "./index.css"

const DetailView = ()=>{
    const {id} = useParams()
    const [loading,setLoading] = useState<boolean>(true)
    const [doctor,setDoctor] = useState<any>({})

    useEffect(()=>{
       async function list(){
            const response = await fetch(`http://localhost:3000/doctor/${id}`)
            const data = await response.json()
            if(response.ok){
                setLoading(false)
                setDoctor(data)
            }
            else{
                setLoading(true)
            }
       }
       list()
    },[])

    return (
        <div className="mt-[100px]">
            <Navbar/>
            <div className="details-bg">
                {
                    loading?
                    <div className="flex flex-row justify-center">
                        <ClipLoader color="#36d7b7" size={50} />
                    </div> 
                    :
                    <div className="flex flex-col justify-center items-center h-[80vh]">
                        <div>
                             <img src={doctor.profileImage} alt="profile" className="w-[200px] h-[200px] border-5 border-[#000000] rounded-full"/>
                        </div> 
                        <div>   
                           <p className="text-[#827fc6] font-bold text-[24px] p-1 text-center">{doctor.name}</p>
                           <p className="text-[22px] font-extrabold p-1 pl-15 font-bold">Specialization: {doctor.specialization}</p>
                           <p className="text-[22px] p-1 pl-15">Experience: {doctor.experience}</p>
                           <p className="text-[22px] font-extrabold pl-15 p-1 text-[#afafaf]">Bio: {doctor.bio}</p>
                           <p className="text-[22px] p-1 pl-15">Location:{doctor.clinicAddress}</p>
                           <p className="text-[22px] p-1 pl-15 ">Timings: {doctor.timings}</p>
                           <div className="text-center mt-3"><Link to={`/form/${doctor.id}`}><button className="cursor-pointer bg-[#827fc6] hover:bg-[#827ff9] p-3 text-[#ffffff] font-extrabold text-lg rounded-[4px]">Book Appointment</button></Link></div>
                        </div>
                    </div>    
                }
            </div>
        </div>
        
    )
}

export default DetailView