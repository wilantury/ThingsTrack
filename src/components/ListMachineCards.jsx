import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/ListMachineCards.scss'

const ListMachineCards = ( { children } ) => {
  return (
    <section className="list-machine-cards">
      <div className="list--container">
        {children}
      </div>
    </section>
  );
}

export default ListMachineCards;
