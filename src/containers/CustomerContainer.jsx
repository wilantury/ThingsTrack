import React from 'react';
import { connect } from 'react-redux';
import ListMachineCards from '../components/ListMachineCards';
import DetailMachine from '../components/DetailMachine';
import HeaderCustomer from '../components/HeaderCustomer';

const CustomerContainer = ({ customer_things }) => {
  return (
    <>
      <ListMachineCards>
          <HeaderCustomer />
          {customer_things.map( item => 
            <DetailMachine key={item.id} {...item}/> 
          )}  
      </ListMachineCards>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    customer_things: state.customer_things,
  };
};

//export default CustomerContainer;
//export default connect(props, dispatch - actions)
export default connect(mapStateToProps, null)(CustomerContainer);
