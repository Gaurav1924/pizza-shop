import React,{useState, useEffect}  from 'react' ;
import { useDispatch,useSelector } from 'react-redux';
import { updateOrdersArr } from '../store/orderSlice';
import ElapsedTime from './ElapsedTime';

// only imports outside.

function PizzaSection() {
     
    const orderReducer = useSelector(store => store.order)
    const dispatch = useDispatch() 
    // console.log(dispatch) ;
    // console.log(useDispatch) ;

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
    
      const handleNextStage = (orderId) => {
          let newOrderArr = orderReducer.orders.map((item) => {
            if (orderId === item.id) {
              return {
                ...item, 
                stage : getNextStage(item.stage) ,
                timeSpentInThisStage : Date.now()
              }
            }
            return item ;
          }) 
          dispatch(updateOrdersArr(newOrderArr))
      }
    
    return (
        <div className='pizza-section'>
        <h2>Pizza Stages Section</h2>
        
        <div className='orders-section'>
        <div className='order-placed'>
        <p>Order Placed</p>
        {orderReducer?.orders?.map(order => (
          <>
          {order.stage === 'Order Placed' && <div key={order.id} className={`pizza-card ${order.stage === 'Order Ready' ? 'red' : ''}`}>
                <p>Order Id: {order.id}</p>
                {/* <p>{order.stage}</p> */}
                <ElapsedTime title='time spent in this stage' startTime={order.timeSpentInThisStage} />
                {/* <ElapsedTime title='total time since order created' startTime={order.createdAt} /> */}
                <button onClick={() => {
                  handleNextStage(order.id);
                } }>Next</button>
              </div> 
          }
          </>
          ))}
          </div>

          <div className='order-making'>
          <p>Order In Making</p>
          {orderReducer?.orders?.map(order => (
          <>
          {order.stage === 'Order In Making' && 
          <div key={order.id} className={`pizza-card ${order.stage === 'Order Ready' ? 'red' : ''}`}>
              <p>Order Id: {order.id}</p>
              {/* <p>{order.stage}</p> */}
              <ElapsedTime title='time spent in this stage' startTime={order.timeSpentInThisStage} />
              {/* <ElapsedTime title='total time since order created' startTime={order.createdAt} /> */}
              <button onClick={() => {
                handleNextStage(order.id);
              } }>Next</button>
            </div>
            }
          
          </>
          ))}
          </div>

          <div className='order-ready'>
          <p>Order Ready</p>
          {orderReducer?.orders?.map(order => (
          <> 
          {order.stage === 'Order Ready' && <div key={order.id} className={`pizza-card ${order.stage === 'Order Ready' ? 'red' : ''}`}>
                <p>Order Id: {order.id}</p>
                {/* <p>{order.stage}</p> */}
                <ElapsedTime title='time spent in this stage' startTime={order.timeSpentInThisStage} />
                {/* <ElapsedTime title='total time since order created' startTime={order.createdAt} /> */}
                <button onClick={() => {
                  handleNextStage(order.id);
                } }>Next</button>
              </div> 
          }
          
          </>
          ))}
          </div>

          <div className='order-picked'>
          <p>Order Picked</p>
          {orderReducer?.orders?.map(order => (
          <>
          
          {order.stage === 'Order Picked' && <div key={order.id} className={`pizza-card ${order.stage === 'Order Ready' ? 'red' : ''}`}>
                <p>Order Id: {order.id}</p>
                {/* <p>{order.stage}</p> */}
                <ElapsedTime title='time spent in this stage' startTime={order.timeSpentInThisStage} />
                {/* <ElapsedTime title='total time since order created' startTime={order.createdAt} /> */}
                <button onClick={() => {
                  handleNextStage(order.id);
                } }>Next</button>
              </div> 
          }
            </>
        ))}
        </div>
        </div>
      </div>
    )
}

export default PizzaSection ;