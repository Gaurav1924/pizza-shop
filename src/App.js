import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './index.css';
import PizzaForm from './components/PizzaForm';
import MainSection from './components/MainSection';
import { updateOrdersArr } from './store/orderSlice';
import PizzaSection from './components/PizzaSection';

function App() {
  const [orders, setOrders] = useState([]);
  const orderReducer = useSelector(store => store.order) // only fetch the store.order
  console.log(orderReducer) 
  
  const dispatch = useDispatch() 
  // useEffect based on some dependency, not on usual re-render
  
  const placeOrder = (order) => {
    if (orders.length < 10) {                     
      setOrders([...orders, order]);      // can't use push. need to use Setorders. additional order getting stored

    } else {
      alert("Not taking any order for now");
    }
  };

  const cancelOrder = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  const moveToNextStage = (orderId) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, stage: getNextStage(order.stage) } : order
    ));
  };

  const getNextStage = (currentStage) => {
    switch (currentStage) {
      case 'Order Placed':
        return 'Order in Making';
      case 'Order in Making':
        return 'Order Ready';
      case 'Order Ready':
        return 'Order Picked';
      default:
        return currentStage;
    }
  };


  
  return (

    <div className="container">
      <PizzaForm />
      <PizzaSection/>
      <div>
        <h2>Main Section</h2>
        <MainSection
          orders={orders}
          cancelOrder={cancelOrder}
          moveToNextStage={moveToNextStage}
        />
      </div>
    </div>
  );
}

export default App;
