import { Col, Button } from "react-bootstrap";

export default function AllEquipments(props) {
    return (
      <div className="card">
        <div className="dummy">
        <img className="image" src={props.da.picture} alt='' />
        </div>
        <Col md="3" className="content">
          <h2>{props.da.name}</h2>
          <p>${props.da.price}</p>
          {props.da.inCart === true ? (
            <Button disabled>Add to cart</Button>
          ) : (
            <Button
              onClick={() => {
                props.cartAction({
                  index: props.index,
                  da: props.da,
                });
                let oldPrice = JSON.parse(localStorage.getItem("price"));
                localStorage.setItem("price", oldPrice + +props.da.price)
              }
              }
            >
              Add to cart
            </Button>
          )}
        </Col>
      </div>
    );
  }