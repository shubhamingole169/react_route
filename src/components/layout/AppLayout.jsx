import { Outlet, useNavigation } from "react-router-dom";
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Loading } from "./Loading";

const AppLayout = () =>{

     const navition = useNavigation();
     console.log(navition);
     if(navition.state === "loading") return <Loading />;
        return(
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        );
}

export default AppLayout;