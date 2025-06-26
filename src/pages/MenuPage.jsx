import React, { useState } from 'react';
import menu from '../utils/menuData';
import { sendOrder } from '../utils/firebase';
import { useSearchParams } from 'react-router-dom';

export default function MenuPage() {
  let total = 0
  const [order, setOrder] = useState([]);
  const [searchParams] = useSearchParams();
  const table = searchParams.get('table') || 'unknown';

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const confirmOrder = () => {
    sendOrder(table, order);
    alert('Buyurtmangiz yuborildi!');
    setOrder([]);
  };

  return (
    <div className="menu-page">
      <h1>Stol: {table}</h1>
      {Object.entries(menu).map(([section, items]) => (
        <div key={section}>
          <h2>{section}</h2>
          <ul>
            {items.map((item) => (
              <li key={item.name}>
                {item.name} - {item.price} so'm
                <button onClick={() => addToOrder(item)}>Qo‘shish</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      {order.length > 0 && (
        <button onClick={confirmOrder}>Buyurtmani yuborish</button>
      )}

      <div>
        <h1>Cart</h1>

        {order.map((ordered) => (
          <div key={ordered.name} style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <h2>{ordered.name}</h2>
            <p>{ordered.price}</p>
            
          {console.log(total)}
          </div>
        ))}

        <div className="total">
          <h2>Total Price</h2>
          {total =
            order.reduce((acc, initial)=>{
            return  parseInt(initial.price+acc)
            },[])
          }
        </div>

      </div>
    </div>
  );
}
