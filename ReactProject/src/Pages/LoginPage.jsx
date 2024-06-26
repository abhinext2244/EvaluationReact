import {Input,Text,Container,VStack,Stack,Button} from '@chakra-ui/react'
import { useContext,useState,useRef,useEffect } from 'react'
import { Logincontext } from '../ContextApi/AuthContextapi'
import axios from 'axios'
export default function LoginPage(){
    const inputRef=useRef(null)
    const[email,setEmail]=useState()
    const [password,setPassword]=useState()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
   const {AuthDetails,Login}=useContext(Logincontext)
          async function handleLogin(){
            try {
                let res=await axios({
                    method:'post',
                    url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/login",
                    data:{
                        email,
                        password
                    },
                });
                Login(res.data.token)
            } catch (error) {
                console.log(error)
            }
         }
    if(AuthDetails.isLoggined){
        return <Navigate to="/HomePage"/>
    }
    return(
        <Stack spacing={7}>
        <VStack >
        <Container>
             <Text fontSize="30px" align="center" >LoginPage</Text>
            <Input placeholder='Enter your Email'value={email} ref={inputRef}onChange={(e)=>{
                setEmail(e.target.value)
            }} />
            <Input placeholder='Enter your Password' value={password} ref={inputRef} onChange={(e)=>{
                setPassword(e.target.value)
            }} />
            <Button onClick={handleLogin} align="center">Login</Button>
        </Container>
        </VStack>
        </Stack>
    )
}
