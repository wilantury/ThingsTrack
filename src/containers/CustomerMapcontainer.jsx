import React from 'react'
import ListMachineCards from "../components/ListMachineCards";
import DetailMachineMap from '../components/DetailMachineMap';
import HeaderCustomer from '../components/HeaderCustomer';
import '../assets/styles/components/CustomerMapContainer.scss';

const CustomerMapcontainer = () => {
  return (
    <>
      <ListMachineCards>
        <HeaderCustomer />
        <div className="mapContainer">
          <DetailMachineMap />
        </div>
        
      </ListMachineCards>
    </>
  );
}

export default CustomerMapcontainer;