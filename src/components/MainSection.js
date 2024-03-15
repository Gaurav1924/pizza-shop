// MainSection.js
import React from 'react';
import { useSelector } from 'react-redux';

// function MainSection({ orders, cancelOrder, moveToNextStage }) {
//   return (
//     <div>
//       <ul>
//         {orders.map(order => (
//           ((order.stage === 'Order Placed') || (order.stage === 'Order In Making')) &&  <li key={order.id}>
//             <p>Order Id: {order.id}</p>
//             <p>Stage: {order.stage}</p>
//             <p>Time Spent: {order.timeSpent}</p>
//             {/* <button onClick={() => moveToNextStage(order.id)}>Next Stage</button> */}
//             <button onClick={() => cancelOrder(order.id)}>Cancel</button>
//           </li>
//         ))}
//       </ul>
      
//     </div>
//   );
// }

const MainSection = () => {
  const orderReducer = useSelector(store => store.order)
  return (
    <table className='main-section-table'>
      <thead>
        <tr>
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
            <td>{order.email}</td>
            <td><button>Cancel</button></td>
          </tr>
        ))}
      </tbody>
      {/* <p>Total order delivered: {orderReducer.orders.length}</p>  */}
    </table>
  );
};

export default MainSection;
