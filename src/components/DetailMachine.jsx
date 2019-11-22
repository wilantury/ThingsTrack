import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/DetailMachine.scss';

const DetailMachine = (props) => {
  const { thing_name, address, description} = props; 
  return(
    <section className="detailMachine">
      <div  className="detailMachine-container">
        <section className="detailMachine-container__infoLine">
          <div>Nombre:</div> <div>{thing_name}</div>
        </section>
        <section className="detailMachine-container__infoLine">
          <div>Ubicación:</div> <div> {address}</div>
        </section>
        <section className="detailMachine-container__infoLine">
         <div>Descripción:</div> <div>{description}</div>
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
