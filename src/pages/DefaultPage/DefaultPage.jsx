import Banner from "components/Banner/Banner"
import { Outlet } from "react-router"


const DefaultPage = ()=>{
    return(
         <main>
            <Banner/>
            <Outlet/>
        </main>
    )
}


export default DefaultPage