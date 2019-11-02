import React from 'react';
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
