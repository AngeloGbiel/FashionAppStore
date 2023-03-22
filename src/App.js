import { ThemeProvider } from "styled-components";
import { CSSreset } from "./components/CSSreset";
import Header from "./components/header";
import Main from "./components/main";
import Container from "./components/container";
import Menu from "./components/menu/components/Menu";
import Section from "./components/menu/components/Section";
import 'aos/dist/aos.css'
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";

export default function App(){
  const navigate = useNavigate()
  useEffect(()=>{
    navigate('/')
  },[])
  const theme = {
    backgroundColor: "#32302F",
    backgroundBase: "#1D1A18",
    navBarHover:"#3C3632",
    sectionSelected: "#ECC6A2"
  }
  return(
    <ThemeProvider theme={theme}>
      <CSSreset/>
      <Header/>
      <Main/>
      <Container/>
      <Section/>
      <Menu/>
      <Outlet/>
      <Footer/>
    </ThemeProvider>
  )
}