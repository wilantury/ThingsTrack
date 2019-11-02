import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/DetailMachine.scss';

const DetailMachine = () => {
  return(
    <section className="detailMachine">
      <div  className="detailMachine-container">
        <section className="detailMachine-container__infoLine">
          <p>Nombre:</p> <p> VENDING-02-Bogota</p>
        </section>
        <section className="detailMachine-container__infoLine">
         <p>Ubicación:</p> <p> Bogota-col: Carrera 10 # 20-19 CC la 20</p>
        </section>
        <section className="detailMachine-container__infoLine">
         <p>Descripción:</p> <p>Maquina vending con productos textiles: medias hombre y mujer</p>
        </section>
      </div>
      <div className="detailMachine-seeMore">
        <Link to="/machine">
          <a className="link-detalle-card">Ver detalle</a>  
        </Link>        
      </div>
    </section>
  );
}

export default DetailMachine;
