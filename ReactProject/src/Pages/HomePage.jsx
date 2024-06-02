import axios from 'axios'
import { Card, CardHeader, CardBody, CardFooter,Stack,StackDivider,Box,Heading, Img } from '@chakra-ui/react'
import {useState,useEffect} from 'react'
function DisplayCard({title}){
    <Card>
      <CardHeader>
        <Heading size='md'>Client Report</Heading>
      </CardHeader>
    
      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Summary
            </Heading>
            <Text pt='2' fontSize='sm'>
              View a summary of all your clients over the last month.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Overview
            </Heading>
            <Text pt='2' fontSize='sm'>
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Analysis
            </Heading>
            <Text pt='2' fontSize='sm'>
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
        }
export default function HomePage(){
    const [data,setdata]=useState([])

    async function DisplayData(){
    try {
        let res=await axios({
            method:'get',
            url:"https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
        })
        setdata(res.data.data)
        console.log(res.data.data)
    } catch (error) {
        
    }
    }
    useEffect(()=>{
        DisplayData()
    },[])
    return(
        
        <>
        
        {data.map((e)=>(
    <div display="grid">
<p>{e.brand}</p>
<p>{e.title}</p>
<p><img src={e.image} alt="" /></p>
        </div>
))}
    </>
    )
}