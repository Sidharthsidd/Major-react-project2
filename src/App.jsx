import { useDispatch } from 'react-redux'
import './App.css'
import { useState } from 'react'
import { logout ,login} from './Store/authSlice'
import  {Header,Footer}  from './components/index'
import { useEffect } from 'react'
import authServices from './appwrite/auth'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading,setLoading]=useState(true)
   const dispatch=useDispatch()

   useEffect(()=>{
    authServices.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))

   },[])
  return !loading?(
    <div className ="min-h-screen flex flex:wrap content=between bg-gray-400 w-full block">
      <div className="w-full block ">
        <Header/>
        <main>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ):null
}

export default App;
