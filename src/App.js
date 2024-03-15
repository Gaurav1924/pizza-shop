import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './index.css';
import PizzaForm from './components/PizzaForm';
import MainSection from './components/MainSection';
import { updateOrdersArr } from './store/orderSlice';
import PizzaSection from './components/PizzaSection';

function App() {
  const [orders, setOrders] = useState([]);
  const orderReducer = useSelector(store => store.order) 
  // console.log(orderReducer) 
  
  // const dispatch = useDispatch()  

 

  // const getNextStage = (currentStage) => {
  //   switch (currentStage) {
  //     case 'Order Placed':
  //       return 'Order in Making';
  //     case 'Order in Making':
  //       return 'Order Ready';
  //     case 'Order Ready':
  //       return 'Order Picked';
  //     default:
  //       return currentStage;
  //   }
  // };


  
  return (

    <div className="container">
      <PizzaForm />
      <PizzaSection/>
      <div>
        <h2>Main Section</h2>
        <MainSection
          orders={orders}
        />
      </div>
    </div>
  );
}

export default App;
