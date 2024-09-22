import { Outlet } from "react-router-dom"
import { Footer } from "../UI/Footer"
import { Header } from "../UI/Header"

export const Layout=()=>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}