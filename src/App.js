import { Row, Button} from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import AllEquipments from "./AllEquipments";
import CartEquipments from "./CartEquipments";
import { Ecamera, Ebike, Ecar, Ecomputer, Ecycle, Elaptops, Epainting, Eprinter } from "./Images";

function App() {
  const [data, setData] = useState([
    { id: 101, name: "Camera", price: "10.00", inCart: false, picture : Ecamera, type : "Electronic" },
    { id: 102, name: "Bike", price: "10.00", inCart: false, picture : Ebike, type : "Vehicle"   },
    { id: 103, name: "Laptop", price: "20.00", inCart: false, picture :  Elaptops, type : "Electronic"  },
    { id: 104, name: "Computer", price: "25.00", inCart: false, picture : Ecomputer, type : "Electronic"   },
    { id: 105, name: "Car", price: "25.00", inCart: false, picture : Ecar, type : "Vehicle"  },
    { id: 106, name: "Printer", price: "10.00", inCart: false, picture : Eprinter, type : "Electronic"   },
    { id: 107, name: "Bicycle", price: "15.00", inCart: false, picture : Ecycle, type : "Vehicle"  },
    { id: 108, name: "Painting Machine", price: "25.00", inCart: false, picture : Epainting, type : "Machinery"  },
  ]);

  const [cartCount, setCartCount] = useState(0);
  const [show, setShow] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [about, setAbout] = useState(false);

  const cartAction = ({ index, item }) => {
    let newData = [...data];
    setCartCount(cartCount + 1);
    newData[index].inCart = true;
    setData(newData);
    let items = [...cartItems];
    items.push(item);
    setCartItems(items);
  };

  const removeFromCart = (id) => {
    let newData = [...data];
    for (let i = 0; i < newData.length; i++) {
      if (newData[i].id === id) newData[i].inCart = false;
    }
    setData(newData);
    setCartCount(cartCount - 1);
  };

  localStorage.setItem("price",JSON.stringify(0));

  const aboutContent = `The world is moving away from ownership and towards rentals and experiences, for example, 74% of Millennial's find renting beneficial than owning.`;
  const aboutContent2 = `RentMela is India’s largest provider for Electronics, Vehicles and IT Equipment rentals most conveniently and cost-effectively. Our services are present in all metro cities like Delhi, Mumbai, Bangalore, Chennai, Hyderabad and also now Tier-II cities like Pune, Cochin, Chandigarh, Ahmedabad. In Delhi NCR, we provide in New Delhi, Gurgaon (Gurugram) and Noida. If you are looking for laptops like MacBook on rental, projectors on rent or be it speaker or projector rentals, RentSher can fulfill the request in a few clicks online. We also provide bulk office equipments rentals for businesses for both short term and long term.`;
  
  return (
    <div>
      <div className="header">
        <div className="title">RentMela</div>
        <h1>Rent your Equipments</h1>
        <h4>At cheap rate with our dealers</h4>
        <div className="OtherDetails">
          <div>Email : rentmela@rental.com</div>
          <div onClick={() => setAbout(!about)} className="aboutUsTag">
            About Us {about ? <span>&#8593;</span> : <span>&#8595;</span>}
          </div>
          <div>Contact number : +91 123456789</div>
        </div>
      </div>
      {about ? (
        <div className="aboutContent">
          <p>{aboutContent}</p>
          <p>{aboutContent2}</p>
        </div>
      ) : (
        ""
      )}
      {show ? (
        <div className="cart">
          <Button className="cartButton" onClick={() => setShow(!show)}> Cart ({cartCount}) </Button>
        </div>
      ) : (
        ""
      )}
      {show ? (
        <Row className="row">
          {data.map((da, index) => {
            return (
              <AllEquipments
                key={index}
                cartAction={cartAction}
                da={da}
                index={index}
              ></AllEquipments>
            );
          })}
        </Row>
      ) : (
        <div>
          <div>
            <Button onClick={() => setShow(!show)}>Back to Equipments</Button>
            <div className="cartDetails">
              <h1 className="cartCount">Cart Items({cartCount})</h1>
              <h4 className="cartPrice">Cart Price : ${}</h4>
            </div>
          </div>
          <Row className="row">
            {data
              .filter((da) => (da.inCart ? true : false))
              .map((da, index) => {
                return (
                  <CartEquipments
                    key={index}
                    removeFromCart={removeFromCart}
                    da={da}
                  ></CartEquipments>
                );
              })}
          </Row>
        </div>
      )}
    </div>
  );
}

export default App;
