import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/DetailMachine.scss';

const DetailMachine = () => {
  return(
    <section className="detailMachine">
      <div  className="detailMachine-container">
        <section className="detailMachine-container__infoLine">
          <div>Nombre:</div> <div> VENDING-02-Bogota</div>
        </section>
        <section className="detailMachine-container__infoLine">
         <div>Ubicación:</div> <div> Bogota-col: Carrera 10 # 20-19 CC la 20</div>
        </section>
        <section className="detailMachine-container__infoLine">
         <div>Descripción:</div> <div>Maquina vending con productos textiles: medias hombre y mujer</div>
        </section>
      </div>
      <div className="detailMachine-action">
        <Link to="/service">
          <p className="link-detalle-card">Solicitar servicio</p>  
        </Link>
        <Link to="/machine">
          <p className="link-detalle-card">Ver detalle</p>  
        </Link>         
      </div>
    </section>
  );
}

export default DetailMachine;
