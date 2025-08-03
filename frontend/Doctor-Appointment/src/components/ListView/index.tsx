import {Link} from "react-router-dom"
import "./index.css"
const ListView = (props:any)=>{
          const {value,} = props
          const {id} = value
         
          return (
            <li className="flex flex-row justify-between p-10 m-10 w-[35%]  rounded-[8px] shadow-xl/20">
                <div>
                   <img src={value.profileImage} alt="profile" className="w-[150px] h-[150px] rounded-full border-[#000000] border-2"/>
                </div>
                <div>
                      <p className="text-[#827fc6] font-bold text-[24px] p-2">{value.name}</p>
                      <p className="text-[18px] p-2">Experience: {value.experience}</p>
                      <p className="text-[22px] font-extrabold p-2">{value.specialization}</p>
                      {value.available?<p className="text-[20px] p-2 text-[green] font-bold">Available</p>:<p className="text-[20px] p-2 text-[red] font-bold">Not Available</p>}  
                     {value.available?<Link to={`/doctor/${id}`}><button className="border-2 p-2 rounded-[12px] w-30 mt-4 cursor-pointer hover:bg-[black] hover:text-[white]">View</button></Link>:
                     <button className="border-2 p-2 rounded-[12px] w-30 mt-4  disabled cursor-not-allowed">View</button>}
                </div>
               
                
            </li>
          )
}



export default ListView