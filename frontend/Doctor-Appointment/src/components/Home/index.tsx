import {useState,useEffect} from "react"
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "../Navbar"
import findDoctor from "../../assets/finddoctor.jpg"
import ListView from "../ListView";
import "./index.css"


const Home = ()=>{
    
    const [list,setList] = useState<Array<any>>([])
    const [loading,setLoading] = useState<boolean>(true)
    const [doctorName,setDoctorName] = useState<string>("")
    useEffect(()=>{
        async function listData(){
            const response = await fetch("http://localhost:3000/");
            const data = await response.json();
            if(response.ok){
                setLoading(false)
                setList(data)
            }
            else{
                setLoading(false)

            }
        }

        listData()
    },[])

  
   const nameSearch = (event:any)=>{
        setDoctorName(event.target.value)
   }
   
   const filterData = list.filter((each)=>{
          if(each.name.includes(doctorName)){
            return each
          }  
   })

    return (<>
    <Navbar/>
    <div className="mt-[100px] p-10">
        <p className="text-2xl text-[#827fc6] mb-5 font-bold">Find and select your preferred doctor</p>
       <div className="flex flex-row justify-around">
           <img src={findDoctor} alt="find" className="w-35"/>
           <div className="flex flex-col">
            <label htmlFor="name" className="text-xl mb-5 font-semibold">Search by preferred doctors name</label>
            <input value={doctorName} onChange={nameSearch} type="text" id="name" placeholder="Search by Doctor..." className="border-b-black-300 border-b-2 outline-0 text-lg text-[#000005]"/>
           </div>
          
           
       </div>
      
    </div>
    <div className="p-10 pt-[0px]">
          <h1 className="text-2xl text-[#827fc6] mb-2 font-bold">Find Doctors</h1>
       
          {
             loading===true?
                <div className="flex flex-row justify-center">
                 <ClipLoader color="#36d7b7" size={50} />
                </div> 
             :
           <ul className="flex flex-row justify-evenly flex-wrap">   
                 {  filterData.length===0?
                    <h1 className="mt-10 text-5xl font-extrabold">No Data Found</h1>
                    :
                    filterData.map((each)=>{
                        return <ListView value={each} key={each.id}/>
                    })
                 }
            </ul>
          }
        

    </div>
    </>
    )
}

export default Home