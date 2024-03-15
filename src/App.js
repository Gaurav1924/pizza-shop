import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";
import PizzaForm from "./components/PizzaForm";
import MainSection from "./components/MainSection";
import { updateOrdersArr } from "./store/orderSlice";
import PizzaSection from "./components/PizzaSection";

function App() {
  const [orders, setOrders] = useState([]);
  const orderReducer = useSelector((store) => store.order);
  return (
    <div className="container">
      <PizzaForm />
      <PizzaSection />
      <div>
        <h2>Main Section</h2>
        <MainSection orders={orders} />
      </div>
    </div>
  );
}

export default App;
