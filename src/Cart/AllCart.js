import React from "react";
import SubHeader from "../SubHeader";
import Header from "../Header";
import { CartProvider, useCart } from "react-use-cart";
import Footer from "../Footer";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalItems,
    cartTotal,
  } = useCart();

  if (isEmpty) {
    return <h3 className="text-center">Your cart is empty</h3>;
  }

  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        <h3 className="text-center">Cart({totalUniqueItems})</h3>
      </div>
      <div className="d-flex justify-content-center mb-3">
      <button onClick={()=>emptyCart()} className="btn btn-danger">Remove Items</button>
      </div>
      <Container>
        <Row>
          <Col className="m-auto">
            <table className="table table-light pt-10 text-center">
              <thead>
                <tr>
                  <th>Images</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Opreation</th>
                </tr>
              </thead>

              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.images[0]} style={{ width: "70px" }}></img>
                    </td>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-success mx-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>

              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>{totalUniqueItems}</td>
                  <td>{totalItems}</td>
                  <td>{cartTotal}</td>
                  <td>
                    <Link to="/shop" className="btn btn-primary">
                      Continue Shopping{" "}
                    </Link>
                  </td>
                </tr>
              </tfoot>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function AllCart() {
  return (
    <CartProvider>
      <SubHeader />
      <Header />
      <br />
      <br />
      <br />
      <Cart />
      <Footer />
    </CartProvider>
  );
}

export default AllCart;
