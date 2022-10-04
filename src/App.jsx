import React, { useEffect, useState } from "react";
import "./App.css";
import DatosDesign from "./components/datos-design/DatosDesign";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Loader from "./components/loader/Loader";
import Nav from "./components/nav/Nav";
import Proyectos from "./components/proyectos/Proyectos";
import Redes from "./components/redes/Redes";

function App() {

  const [ loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 5000);
  }, []);

  if(loader){
    return <Loader />
  } else {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Proyectos />
        <DatosDesign />
        <Redes />
        <Footer />
      </div>
    )
  }

}

export default App
