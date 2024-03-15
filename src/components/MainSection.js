// MainSection.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrdersArr } from "../store/orderSlice";
import ElapsedTime from "./ElapsedTime";
const MainSection = () => {
  const orderReducer = useSelector((store) => store.order);
  const dispatch = useDispatch();

  const cancelOrder = (orderId) => {
    let newOrderArr = orderReducer.orders.filter((order) => {
      if (orderId !== order.id) {
        return order;
      }
    });
    dispatch(updateOrdersArr(newOrderArr));
  };

  return (
    <table className="main-section-table">
      <thead>
        <tr style={{ fontWeight: "100" }}>
          <th>Order Id</th>
          <th>Stage</th>
          <th>Total Time spent</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {orderReducer.orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.stage}</td>
            <td>
              {order.stage === "Order Picked" ? (
                <p>{order?.totalTimeSpent}</p>
              ) : (
                <ElapsedTime
                  onlyTimeNeeded={true}
                  startTime={order.createdAt}
                />
              )}
            </td>
            <td>
              <button onClick={() => cancelOrder(order.id)}>Cancel</button>
            </td>
          </tr>
        ))}
      </tbody>
      <p style={{ fontWeight: "800" }}>
        Total order delivered: {orderReducer.orderDelivered}
      </p>
    </table>
  );
};

export default MainSection;
