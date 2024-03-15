// PizzaForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateOrdersArr } from '../store/orderSlice';

function PizzaForm({ placeOrder }) {
  const [type, setType] = useState('veg');
  const [size, setSize] = useState('medium');
  const [base, setBase] = useState('thin');
  const [orderId, setOrderId] = useState(1);
  const dispatch = useDispatch() ;
  const orderReducer = useSelector(store => store.order)  // fetching orders onChange.

  const handleSubmit = (e) => {
    e.preventDefault();
    // placeOrder({ id: orderId, type, size, base, stage: 'Order Placed', timeSpent: '0 min' });
    let orderObject = { id: orderId, type : type, size : size, base : base, stage: 'Order Placed', timeSpentInThisStage: Date.now(), createdAt : Date.now() } ;
    if(orderReducer.orders.length < 10) {
      dispatch(updateOrdersArr([...orderReducer.orders,orderObject])) ;
    }
    // console.log(orderObject) ;
    setOrderId(orderId + 1);        //after 
    setType('');
    setSize('');
    setBase('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <p style={{fontWeight:600,fontSize:'20px'}}>Order Form</p>
      <label>
        Type:
        <select value={type} onChange={e => setType(e.target.value)}>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>
      </label>
      <br />
      <label>
        Size:
        <select value={size} onChange={e => setSize(e.target.value)}>
          <option value="Large">Large</option>
          <option value="Medium">Medium</option>
          <option value="Small">Small</option>
        </select>
      </label>
      <br />
      <label>
        Base:
        <select value={base} onChange={e => setBase(e.target.value)}>
          <option value="Thin">Thin</option>
          <option value="Thick">Thick</option>
        </select>
      </label>
      <br />
      <button type="submit">Place Order</button>
    </form>
  );
}

export default PizzaForm;
