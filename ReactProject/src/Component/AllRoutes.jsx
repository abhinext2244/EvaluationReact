 import {Route,Routes} from 'react-router-dom'
 import LoginPage from '../Pages/LoginPage'
 import HomePage from '../Pages/HomePage'
 import ProductPageDetails from '../Pages/ProductPageDetails'
 export default function AllRoutes(){
    return(
        <div>
            <Routes>
                <Route path="/LoginPage" element={<LoginPage/>}/>
                <Route path="/HomePage" element={<HomePage/>}/>
                <Route path="/ProductPageDetails" element={<ProductPageDetails/>}/>
            </Routes>
        </div>
    )
 }