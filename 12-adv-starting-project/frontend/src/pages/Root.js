import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout(){

    const navigation = useNavigation(); // way to know if we're currently wait for data or not

    
    return<>

    <MainNavigation />
 
    <main>
        {navigation.state === 'loading' && <p>Loanding...</p> }
        <Outlet />
    </main>

    
    </>

}

export default RootLayout;