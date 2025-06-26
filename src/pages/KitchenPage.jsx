import React, { useEffect, useState } from 'react';
import { listenToOrders, markOrderComplete } from '../utils/firebase';

export default function KitchenPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    listenToOrders(setOrders);
  }, []);

  console.log(orders)

  return (
    <div className="kitchen-page">
      <h1>Oshxona Paneli</h1>
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <h3>Stol: {order.table}</h3>
          <ul>
            {order.items.map((item, idx) => (
              <li key={idx}>{item.name}</li>
            ))}
          </ul>
          <button onClick={() => markOrderComplete(order.id)}>Tayyor</button>
        </div>
      ))}
    </div>
  );
}
