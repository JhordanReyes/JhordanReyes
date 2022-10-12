import React from 'react';
import Proyecto from './proyecto/Proyecto';
import "./style.css";
import img1 from "../../assets/admin-veterinaria.jpeg";
import img2 from "../../assets/page-snap.jpeg";
import img3 from "../../assets/loopstudios.jpeg";
import img4 from "../../assets/car-razer.jpeg";
import img5 from "../../assets/original-trombones.jpeg";
import img6 from "../../assets/shop.jpeg";

const Proyectos = () => {
  return (
    <div className='proyectos' id='projects'>
      <div className='proyectos-text'>
        <h2>website projects</h2>
        <p>Mi colección de paginas web, seleccione una de las tarjetas para poder ver el código fuente o ingresar a la página.</p>
      </div>
        <div className="proyectos-container">
          <Proyecto
            title="Shop."
            img={img6}
            url={"https://jhordanreyes.github.io/Shop/"}
            urlCode={"https://github.com/JhordanReyes/Shop"}
          />
          <Proyecto
            title="Loopstudios"
            img={img3}
            url={"https://jhordanreyes.github.io/Loopstudios/"}
            urlCode={"https://github.com/JhordanReyes/Loopstudios"}
          />
            <Proyecto
              title="Admin Pacientes"
              img={img1}
              url={"https://adminpacientesveterinaria.netlify.app/"}
              urlCode={"https://github.com/JhordanReyes/Pacientes-Veterinaria"}
            />
            <Proyecto
              title="Snap"
              img={img2}
              url={"https://jhordanreyes.github.io/snap/"}
              urlCode={"https://github.com/JhordanReyes/snap"}
            />
            <Proyecto
              title="Car Razer"
              img={img4}
              url={"https://jhordanreyes.github.io/Carrazer/"}
              urlCode={"https://github.com/JhordanReyes/Carrazer"}
            />
            <Proyecto
              title="Original Trombones"
              img={img5}
              url={"https://jhordanreyes.github.io/OriginalTrombones/"}
              urlCode={"https://github.com/JhordanReyes/OriginalTrombones"}
            />
        </div>
    </div>
  )
}

export default Proyectos