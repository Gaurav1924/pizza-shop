import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOrderDelivered, updateOrdersArr } from "../store/orderSlice";
import ElapsedTime from "./ElapsedTime";

function PizzaSection({ orders }) {
  const orderReducer = useSelector((store) => store.order);
  const dispatch = useDispatch();

  const getNextStage = (currentStage) => {
    switch (currentStage) {
      case "Order Placed":
        return "Order in Making";
      case "Order in Making":
        return "Order Ready";
      case "Order Ready":
        return "Order Picked";
      default:
        return currentStage;
    }
  };

  function getTimeSpent(startDate) {
    const elapsedTime = Date.now() - startDate;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    return `${hours}h ${minutes}m ${seconds}s`;
  }

  const handleNextStage = (orderId) => {
    let isOrderDelivered = false;
    let newOrderArr = orderReducer.orders.map((item) => {
      if (orderId === item.id) {
        if (getNextStage(item.stage) === "Order Picked") {
          isOrderDelivered = true;
          return {
            ...item,
            stage: getNextStage(item.stage),
            timeSpentInThisStage: Date.now(),
            totalTimeSpent: getTimeSpent(item.createdAt),
          };
        }
        return {
          ...item,
          stage: getNextStage(item.stage),
          timeSpentInThisStage: Date.now(),
        };
      }
      return item;
    });
    if (isOrderDelivered) {
      dispatch(setOrderDelivered());
    }
    dispatch(updateOrdersArr(newOrderArr));
  };
  const sortByDelay = (order) => {
    let temp = [...order];
    temp.sort((a, b) => a.timeSpentInThisStage - b.timeSpentInThisStage);
    return temp;
  };
  return (
    <div className="pizza-section">
      <h2>Pizza Stages Section</h2>

      <div className="orders-section">
        <div className="order-placed">
          <p>Order Placed</p>
          {sortByDelay(orderReducer?.orders)?.map((order) => (
            <>
              {order.stage === "Order Placed" && (
                <div key={order.id} className={`pizza-card`}>
                  <ElapsedTime
                    id={order.id}
                    handleStage={handleNextStage}
                    startTime={order.timeSpentInThisStage}
                  />
                </div>
              )}
            </>
          ))}
        </div>

        <div className="order-making">
          <p>Order In Making</p>
          {orderReducer?.orders?.map((order) => (
            <>
              {order.stage === "Order in Making" && (
                <div key={order.id} className={`pizza-card`}>
                  <ElapsedTime
                    id={order.id}
                    handleStage={handleNextStage}
                    startTime={order.timeSpentInThisStage}
                  />
                </div>
              )}
            </>
          ))}
        </div>

        <div className="order-ready">
          <p>Order Ready</p>
          {orderReducer?.orders?.map((order) => (
            <>
              {order.stage === "Order Ready" && (
                <div key={order.id} className={`pizza-card`}>
                  <ElapsedTime
                    id={order.id}
                    handleStage={handleNextStage}
                    startTime={order.timeSpentInThisStage}
                  />
                </div>
              )}
            </>
          ))}
        </div>

        <div className="order-picked">
          <p>Order Picked</p>
          {orderReducer?.orders?.map((order) => (
            <>
              {order.stage === "Order Picked" && (
                <div key={order.id} className={`pizza-card`}>
                  <p>Order Id: {order.id}</p>
                  <p>Picked</p>
                </div>
              )}
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PizzaSection;
