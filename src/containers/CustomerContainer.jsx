import React from 'react';
import ListMachineCards from '../components/ListMachineCards';
import DetailMachine from '../components/DetailMachine';

const CustomerContainer = () => {
  return (
    <>
      <ListMachineCards>        
          <DetailMachine />
          <DetailMachine />
          <DetailMachine />
          <DetailMachine />  
          <DetailMachine />
          <DetailMachine />       
      </ListMachineCards>
    </>
  );
};

export default CustomerContainer;
