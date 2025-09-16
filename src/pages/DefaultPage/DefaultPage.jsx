import Banner from "components/Banner/Banner"
import { Outlet } from "react-router"


const DefaultPage = ({children})=>{
    return(
         <main>
            <Banner/>
            <Outlet/>
            {children}
        </main>
    )
}


export default DefaultPage