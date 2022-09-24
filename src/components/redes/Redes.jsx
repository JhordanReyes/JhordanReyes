import React from 'react';
import "./style.css";

const Redes = () => {
    return (
        <div className='redes' id='redes'>
            <div className='bola bola-1'></div>
            <div className='bola bola-2'></div>
            <div className='redes__text'>
                <h2>CONTACTAME EN MIS REDES</h2>
                <p>Podrás encontrar más información sobre mí, proyectos y mi formación.</p>
            </div>
            <a className='redes__grid1' href="https://github.com/JhordanReyes" target="_blank">
                <div className='red red__github'>
                    <i className='bx bxl-github'></i>
                    <div>
                        <h2>Github <i className='bx bx-reply'></i></h2>
                        <p>Encuentra mis proyectos personales con su código fuente.</p>
                    </div>
                </div>
            </a>
            <a className='redes__grid2' href="https://www.linkedin.com/in/jhordanreyes/" target="_blank">
                <div className='red red__linkedin'>
                    <i className='bx bxl-linkedin'></i>
                    <div>
                        <h2>Linkedin <i className='bx bx-reply'></i></h2>
                        <p>Podrás observar mis estudios, certificaciones y avances con las tecnologías.</p>
                    </div>
                </div>
            </a>
            <a className='redes__grid3' href="http://wa.me/51947162202" target="_blank">
                <div className='red red__whatsapp'>
                    <i className='bx bxl-whatsapp'></i>
                    <div>
                        <h2>Whatsapp <i className='bx bx-reply'></i></h2>
                        <p>Si desea ponerse en contacto con mi persona, puede hacerlo por este medio de esta red social.</p>
                    </div>
                </div>
            </a>
            <a className='redes__grid4' href="https://www.instagram.com/reyesjhordan4/" target="_blank">
                <div className='red red__instagram'>
                    <i className='bx bxl-instagram'></i>
                    <div>
                        <h2>Instagram <i className='bx bx-reply'></i></h2>
                        <p>De ves en cuando subo fotos relacionadas a viajes o salidas con amigos.</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default Redes