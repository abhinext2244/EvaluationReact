import { createContext ,useState} from "react"
 export const Logincontext=createContext()
 export default function AuthContextapi({children}){
    const [AuthDetails,setAuthDetails]=useState({
        isLoggined:false,
        token:null

    })
    const Login=()=>{
        setAuthDetails({
            isLoggined:true,
            token:token
        })
    }
    return(
        
         <Logincontext.Provider value={{AuthDetails,Login}}>
        {children}
        </Logincontext.Provider>
    )
}