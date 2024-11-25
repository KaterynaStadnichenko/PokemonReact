import { Outlet } from "react-router-dom";
import Header from "../Header/header";
import HomePage from "../HomePage/HomePage";

export default function Layout(){
    return(
        <div>
            <Header />
            <HomePage />
            <Outlet />
        </div>
    )
}