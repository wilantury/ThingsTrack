import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/HeaderCustomer.scss';

const HeaderCustomer = ()=>{
  return  (<section>
            <h2>Antury Electrónica SAS</h2>
          
            <section className="header-customer">
              <Link to="/traerMapa">
                <h3>Ver mapa</h3>
              </Link>
              <h3>|</h3>
              <Link to="/traerLista">
              <h3>Ver lista</h3>
              </Link>            
            </section>
          </section>
    )
  };

export default HeaderCustomer;