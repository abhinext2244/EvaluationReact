import { useState } from 'react'
import Navbar from './Component/Navbar'
import AllRoutes from './Component/AllRoutes'
import { AlertDialog } from '@chakra-ui/react'
 function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <AllRoutes/>
    </>
  )
}

export default App
