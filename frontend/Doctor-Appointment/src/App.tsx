import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./components/Home"
import DetailView from "./components/DetailView"
import Submit from "./components/Submit"
import './App.css'

function App() {
  return <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctor/:id" element={<DetailView/>}/>
        <Route path="/form/:id" element={<Submit/>}/>
     </Routes> 
     
   </BrowserRouter>
} 

export default App
