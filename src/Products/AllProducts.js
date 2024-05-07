import React, { Component } from "react";
import SubHeader from "../SubHeader";
import Header from "../Header";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import Footer from "../Footer";
import { CartProvider } from "react-use-cart";

export class AllProducts extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get("/assets/js/Api.json")
    .then((item) => {
      this.setState({
        products: item.data.products,
      });
    });
  }
  render() {
    return (
      <CartProvider>
        <SubHeader />
        <Header />

        <div className="section properties">
          <Container>
            <Row className="properties-box">
              {this.state.products.map((result) => (
                <Col
                  lg="4"
                  md="6"
                  className="align-self-center mb-30 properties-items adv"
                >
                  <div className="item">
                    <a href="property-details.html">
                      <img style={{height:"300px"}} src={result.images[0]} alt="" />
                    </a>
                    <span className="category">{result.title}</span>
                    <h6>${result.price}</h6>
                    <h4>
                      <a href="property-details.html">
                       {result.description}
                      </a>
                    </h4>
                    <ul>
                      <li>
                        Bedrooms: <span>{result.category}</span>
                      </li>
                      <li>
                        Bathrooms: <span>{result.brand}</span>
                      </li>
                      <li>
                        Area: <span>{result.rating}m</span>
                      </li>
                      <li>
                        Floor: <span>{result.stock}</span>
                      </li>
                      <li>
                        Parking: <span>{result.discountPercentage} spot</span>
                      </li>
                    </ul>
                    <div className="main-button">
                      <a href="property-details.html">Schedule a visit</a>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
        <Footer/>
      </CartProvider>
    );
  }
}

export default AllProducts;
