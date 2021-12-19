import { useState } from "react";
import { Col } from "react-bootstrap";

export default function CartEquipments(props) {

   const [count, setCount] = useState(1);
   const [itemPrice, setItemPrice] = useState(props.da.price);
   const [price, setPrice] = useState(JSON.parse(localStorage.getItem("price")));
   console.log("price", price);
    return (
      <div className="card">
        <div className="dummy">
        <img className="image" src={props.da.picture} alt='' />
        </div>
        <Col md="3" className="content">
          <h2>{props.da.name}</h2>
          <p>${props.da.price}</p>
           <p className="quantity">Quantity : {count} 
           { count>1?  <div className="counter" onClick={() => {
             setCount(count-1);
             setItemPrice(+itemPrice - parseInt(props.da.price));
             setPrice(price - +itemPrice);
             }}>-</div> : ""}
           <div className="counter" onClick={() => {
             setCount(count+1);
             setItemPrice(+(itemPrice) + parseInt(props.da.price));
             setPrice(price + +itemPrice);
             }}>+</div>
           </p>
           <p>Total price for item : ${itemPrice}</p>
          <button
            onClick={() => {
              props.removeFromCart(props.da.id);
            }}
          >
            Remove Item
          </button>
        </Col>
      </div>
    );
  }