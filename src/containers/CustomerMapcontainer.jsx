import React from 'react'
import { connect } from 'react-redux'
import ListMachineCards from "../components/ListMachineCards";
import DetailMachineMap from '../components/DetailMachineMap';
import HeaderCustomer from '../components/HeaderCustomer';
import '../assets/styles/components/CustomerMapContainer.scss';

const CustomerMapcontainer = ( { customer_things }) => {
  return (
    <>
      <ListMachineCards>
        <HeaderCustomer />
        <div className="mapContainer">
          <DetailMachineMap locations={customer_things}/>
        </div>
        
      </ListMachineCards>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    customer_things: state.customer_things,
  };
};

//export default CustomerMapcontainer;
export default connect(mapStateToProps, null)(CustomerMapcontainer);
