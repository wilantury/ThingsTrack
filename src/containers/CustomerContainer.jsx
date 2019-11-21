import React from 'react';
import ListMachineCards from '../components/ListMachineCards';
import DetailMachine from '../components/DetailMachine';
import HeaderCustomer from '../components/HeaderCustomer';

const CustomerContainer = () => {
  return (
    <>
      <ListMachineCards>
          <HeaderCustomer />
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
