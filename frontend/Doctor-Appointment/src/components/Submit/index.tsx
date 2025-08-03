import { UNSAFE_RSCDefaultRootErrorBoundary, useParams } from "react-router-dom"
import {useState,useEffect} from "react"
import "./index.css"
import Navbar from "../Navbar"
const Submit = ()=>{
    const {id} = useParams()
    const [doctor,setDoctor] = useState<any>({})
    const [confirmation,setConfirmation] = useState<boolean>(false)
    const [loading,setLoading] = useState<boolean>(true)
    const [result,setResult] = useState<boolean>(false)
    const [email,setEmail] = useState<string>("")
    const [name,setName] = useState<string>("")
    const [nameRequire,setNameRequire] = useState<boolean>(false)
    const [emailRequire,setEmailRequire] = useState<boolean>(false)
    
     useEffect(()=>{
           async function list(){
                const response = await fetch(`http://localhost:3000/doctor/${id}`)
                const data = await response.json()
                if(response.ok){
                    setDoctor(data)
                    setLoading(false)
                }
                else{
                    setLoading(true)
                }
                
           }
           list()
        },[])

    const formSubmit = (event:any)=>{
        event.preventDefault();
        if(name===""){
           setNameRequire(true)
          
        }
        else if(email===""){
            setEmailRequire(true)
             
        }
        else 
        {  
            setNameRequire(false)  
        setConfirmation(true);
           setEmailRequire(false)
        }
    }
    const yesConfirm=()=>{
          setConfirmation(false)
          setResult(true)
    }
    const noConfirm = ()=>{
        setConfirmation(false)
    }
    const emailChange = (event:any)=>{
         setEmail(event.target.value)
    }
    const nameChange = (event:any)=>{
         setName(event.target.value)
    }
    return (
        <div className={confirmation||result?"bg-[#dcdcdc]":""}>
        <Navbar/>
        {loading?
        <h1 className="text-center mt-[120px]">Loading ...</h1>:
        <div className="mt-[120px] flex flex-col items-center justify-center h-[90vh] p-10">
            {result && <div className="fixed top-80 bg-[#ffffff] p-10">
                   <img className="w-20 margin-auto" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FdT8%2F5e6%2FdT85e6aqc.png&f=1&nofb=1&ipt=c699620d98ea39a2e9a25e474db7e28dc39700e34747d424fac64a76f6ca5534" alt="right"/>
                   <h1 className="text-xl">Thank You for Your Appointment!</h1>
                   <p className="text-lg">Check your mails for Confirmation!</p>
                </div>
                }
             {confirmation&&<div className="fixed top-80 bg-[#ffffff] p-10">
                   <h1 className="font-extrabold text-3xl">Are you sure you want to confirm this appointment?</h1>
                   <div className="flex flex-row justify-center">
                   <button className="bg-[green] p-2 mr-4" onClick={yesConfirm}>Yes</button>
                   <button className="bg-[red] p-2 cursor-pointer" onClick={noConfirm}>No</button>
                   </div>
                </div>}
             <form className="shadow-xl/30 w-[40%] flex flex-col p-5" onSubmit={formSubmit}>
                <h1 className="text-3xl text-[#827fc6] font-extrabold self-center p-3 mb-5">Appointment Details</h1>
                <div className="m-5">
                    <label htmlFor="name" className="w-1/4 text-lg font-bold mr-5">Doctor Name: </label>
                    <input type="text" id="name" value={doctor.name} className="bg-[#efefef] cursor-not-allowed w-[60%] border-2 border-[#000000] p-1 rounded-[4px] " disabled/>
                </div>
                <div className="m-5">
                    <label htmlFor="spec" className="w-1/4 text-lg font-bold mr-5">
                        Specialization:
                    </label>
                    <input type="text" id="spec" value={doctor.specialization} className="cursor-not-allowed bg-[#efefef] w-[60%] border-2 border-[#000000] p-1 rounded-[4px]"  disabled/>
                </div>
                <div className="m-5">
                    <label htmlFor="p-name" className="w-1/4 text-lg font-bold mr-5">Patient Name:</label>
                    <input value={name} onChange={nameChange} type="text" placeholder="Enter Patient Name" id="p-name" className="w-[60%] border-2 border-[#000000] p-1 rounded-[4px]" />
                    {nameRequire&&<p className="text-[red]">*Required</p>}
                </div>
                <div className="m-5">
                     <label htmlFor="email" className="w-1/3 text-lg font-bold mr-15">Email Id:</label>
                     <input value={email} onChange={emailChange} type="email" placeholder="Enter Email Id" id="email" className="w-[60%] border-2 border-[#000000] p-1 rounded-[4px]" />
                     {emailRequire&&<p className="text-[red]">*Required</p>}
                </div>
                <div className="m-5">
                    <label htmlFor="date" className="w-1/4 text-lg font-bold mr-3">Date And Time:</label>
                    <input type="datetime-local" id="date" className="w-[60%] border-2 border-[#000000] p-1 rounded-[4px]" />
                </div>
                <button type="submit" className="cursor-pointer bg-[#827fc6] p-2 rounded-[8px] font-bold text-[#ffffff] hover:bg-[#857ff6] text-[18px]">Submit</button>
             </form>
        </div>
         }
        </div>
    )
}

export default Submit