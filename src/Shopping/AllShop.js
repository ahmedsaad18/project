import { CartProvider, useCart } from "react-use-cart";
import SubHeader from "../SubHeader";
import Header from "../Header";
import { Col, Container, Row } from "reactstrap";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function Page() {
  const { addItem } = useCart();

  const products = [
    {
      id: 1,
      title: "Luxuary Villa",
      description: "18 Old Street Miami, OR 97219",
      price: 1180000,
      discountPercentage: 6,
      rating: 500,
      stock: 3,
      brand: "3",
      category: "8",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      images: [
        "/assets/new images/2-79.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      ],
    },
    {
      id: 2,
      title: "Luxuary Villa",
      description: "54 New Street Florida, OR 27001",
      price: 2000000,
      discountPercentage: 3,
      rating: 575,
      stock: 1,
      brand: "2",
      category: "5",
      thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      images: [
        "/assets/new images/357917305.jpg",
        "https://cdn.dummyjson.com/product-images/2/2.jpg",
        "https://cdn.dummyjson.com/product-images/2/3.jpg",
        "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      ],
    },
    {
      id: 3,
      title: "Luxuary Villa",
      description: "26 Mid Street Portland, OR 38540",
      price: 2500000,
      discountPercentage: 4,
      rating: 600,
      stock: 2,
      brand: "5",
      category: "4",
      thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      images: [
        "/assets/new images/fortuneindia_2021-09_933967f8-afcb-4155-ba3d-b5189587306f_Luxury_villas_1.avif",
      ],
    },
    {
      id: 4,
      title: "Arabic Design Villa",
      description: "12 Hope Street Portland, OR 12650",
      price: 2800000,
      discountPercentage: 6,
      rating: 650,
      stock: 2,
      brand: "7",
      category: "7",
      thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      images: [
        "/assets/new images/istockphoto-118322813-612x612.jpg",
        "https://cdn.dummyjson.com/product-images/4/2.jpg",
        "https://cdn.dummyjson.com/product-images/4/3.jpg",
        "https://cdn.dummyjson.com/product-images/4/4.jpg",
        "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      ],
    },
    {
      id: 5,
      title: "Luxuary Villa",
      description: "34 Hope Street Portland, OR 42680",
      price: 3000000,
      discountPercentage: 5,
      rating: 500,
      stock: 2,
      brand: "6",
      category: "6",
      thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      images: [
        "/assets/new images/istockphoto-182091803-612x612.jpg",
        "https://cdn.dummyjson.com/product-images/5/2.jpg",
        "https://cdn.dummyjson.com/product-images/5/3.jpg",
      ],
    },
    {
      id: 6,
      title: "Luxuary Villa",
      description: "22 Hope Street Portland, OR 16540",
      price: 1749000,
      discountPercentage: 4,
      rating: 350,
      stock: 1,
      brand: "5",
      category: "4",
      thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      images: [
        "/assets/new images/istockphoto-1283531946-612x612.jpg",
        "https://cdn.dummyjson.com/product-images/6/2.jpg",
        "https://cdn.dummyjson.com/product-images/6/3.png",
        "https://cdn.dummyjson.com/product-images/6/4.jpg",
      ],
    },
    {
      id: 7,
      title: "Luxuary Villa",
      description: "14 Mid Street Miami, OR 36450",
      price: 1499000,
      discountPercentage: 4,
      rating: 300,
      stock: 2,
      brand: "6",
      category: "5",
      thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      images: [
        "/assets/new images/istockphoto-1283532082-612x612.jpg",
        "https://cdn.dummyjson.com/product-images/7/2.jpg",
        "https://cdn.dummyjson.com/product-images/7/3.jpg",
        "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      ],
    },
    {
      id: 8,
      title: "Luxuary Villa",
      description: "26 Old Street Miami, OR 12870",
      price: 3500000,
      discountPercentage: 6,
      rating: 650,
      stock: 3,
      brand: "8",
      category: "8",
      thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      images: [
        "/assets/new images/luxury-villa.jpg",
        "https://cdn.dummyjson.com/product-images/8/2.jpg",
        "https://cdn.dummyjson.com/product-images/8/3.jpg",
        "https://cdn.dummyjson.com/product-images/8/4.jpg",
        "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      ],
    },
    {
      id: 9,
      title: "Luxuary Villa",
      description: "34 New Street Miami, OR 24650",
      price: 2000000,
      discountPercentage: 4,
      rating: 350,
      stock: 2,
      brand: "5",
      category: "6",
      thumbnail: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
      images: [
        "/assets/new images/4njxec.jpeg",
        "https://cdn.dummyjson.com/product-images/9/2.png",
        "https://cdn.dummyjson.com/product-images/9/3.png",
        "https://cdn.dummyjson.com/product-images/9/4.jpg",
        "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
      ],
    },
    {
      id: 10,
      title: "Luxuary Villa",
      description: "35 Hope Street Portland, OR 42680",
      price: 1500000,
      discountPercentage: 6,
      rating: 400,
      stock: 2,
      brand: "5",
      category: "7",
      thumbnail: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
      images: [
        "/assets/new images/download (1).jpeg",
        "https://cdn.dummyjson.com/product-images/10/2.jpg",
        "https://cdn.dummyjson.com/product-images/10/3.jpg",
        "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
      ],
    },
    {
      id: 11,
      title: "Luxuary Villa",
      description: "10 Hope Street Portland, OR 12650",
      price: 1200000,
      discountPercentage: 4,
      rating: 300,
      stock: 2,
      brand: "4",
      category: "6",
      thumbnail: "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
      images: [
        "/assets/new images/download (3).jpeg",
        "https://cdn.dummyjson.com/product-images/11/2.jpg",
        "https://cdn.dummyjson.com/product-images/11/3.jpg",
        "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
      ],
    },
    {
      id: 12,
      title: "Luxuary Villa",
      description: "26 Mid Street Portland, OR 38540",
      price: 2250000,
      discountPercentage: 4,
      rating: 500,
      stock: 3,
      brand: "5",
      category: "4",
      thumbnail: "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
      images: [
        "/assets/new images/download (5).jpeg",
        "https://cdn.dummyjson.com/product-images/12/2.jpg",
        "https://cdn.dummyjson.com/product-images/12/3.png",
        "https://cdn.dummyjson.com/product-images/12/4.jpg",
        "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
      ],
    },
    {
      id: 13,
      title: "Luxuary Villa",
      description: "56 New Street Florida, OR 27001",
      price: 3500000,
      discountPercentage: 6,
      rating: 600,
      stock: 3,
      brand: "8",
      category: "8",
      thumbnail: "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
      images: [
        "/assets/new images/download.jpeg",
        "https://cdn.dummyjson.com/product-images/13/2.png",
        "https://cdn.dummyjson.com/product-images/13/3.jpg",
        "https://cdn.dummyjson.com/product-images/13/4.jpg",
        "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
      ],
    },
    {
      id: 14,
      title: "Luxuary Villa",
      description: "20 New Street Miami, OR 97219",
      price: 1800000,
      discountPercentage: 2,
      rating: 420,
      stock: 2,
      brand: "6",
      category: "6",
      thumbnail: "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
      images: [
        "/assets/new images/om_sree_malabar_greens-yapral-hyderabad-om_sree_builders_and_developers.avif",
        "https://cdn.dummyjson.com/product-images/14/2.jpg",
        "https://cdn.dummyjson.com/product-images/14/3.jpg",
        "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
      ],
    },
    {
      id: 15,
      title: "Royal Woods Villa",
      description: "30 Hope Street Portland, OR 16540",
      price: 3000000,
      discountPercentage: 5,
      rating: 500,
      stock: 2,
      brand: "5",
      category: "6",
      thumbnail: "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
      images: [
        "/assets/new images/Royal-woods.png",
        "https://cdn.dummyjson.com/product-images/15/2.jpg",
        "https://cdn.dummyjson.com/product-images/15/3.jpg",
        "https://cdn.dummyjson.com/product-images/15/4.jpg",
        "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
      ],
    },
  ];

  return (
    <div className="section properties">
      <Container>
        <Row className="properties-box">
          {products.map((p) => (
            <div
              key={p.id}
              className="col-lg-4 col-md-6 text-center align-self-center mb-5 properties-items adv"
            >
              <div className="item">
                <a href="property-details.html">
                  <img style={{ height: "300px" }} src={p.images[0]} alt="" />
                </a>
                <span className="category">{p.title}</span>
                <h6>${p.price}</h6>
                <h4>
                  <a href="property-details.html">{p.description}</a>
                </h4>
                <ul>
                  <li>
                    Bedrooms: <span>{p.category}</span>
                  </li>
                  <li>
                    Bathrooms: <span>{p.brand}</span>
                  </li>
                  <li>
                    Area: <span>{p.rating}m</span>
                  </li>
                  <li>
                    Floor: <span>{p.stock}</span>
                  </li>
                  <li>
                    Parking: <span>{p.discountPercentage} spot</span>
                  </li>
                </ul>
                <div>
                  <button
                    onClick={() => addItem(p)}
                    className="btn btn-success"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Row>
      </Container>
    </div>
  );
}



function AllShop() {
  return (
    <CartProvider>
      <SubHeader />
      <Header />
      <Page />
      <Footer/>
    </CartProvider>
  );
}

export default AllShop;
