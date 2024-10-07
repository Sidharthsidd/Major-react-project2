import Reacct from "react"
import { useDispatch } from "react-redux"
import authServices from "../../appwrite/auth"
import { logout } from "../../Store/authSlice"



function LogoutBtn({width='100px'}){

    const dispatch=useDispatch()
    const logouthandler=()=>{
        authServices.logout().then(()=>{
            dispatch(logout())
        })
    }
    return (
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue rounded-full">Logout</button>
    )
}

export default LogoutBtn