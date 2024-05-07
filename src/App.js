import Contact2 from "./Contact2";
import Header from "./Header";
import Banner from "./Home/Banner";
import Best from "./Home/Best";
import Contact from "./Home/Contact";
import Features from "./Home/Features";
import Footer from "./Footer";
import Fun from "./Home/Fun";
import Properties from "./Home/Properties";
import VedioContent from "./Home/VedioContent";
import VedioSection from "./Home/VedioSection";
import SubHeader from "./SubHeader";
import ScrollToTop from "react-scroll-to-top";
import { CartProvider } from "react-use-cart";



function App() {
  return (
    <CartProvider className='App'>
    <SubHeader/>
    <Header/>
    <br/>
    <br/>
    <br/>
    <br/>
    <Banner/>
    <Features/>
    <VedioSection/>
    <VedioContent/>
    <Fun/>
    <Best/>
    <Properties/>
    <Contact/>
    <Contact2/>
    <Footer/>
    
    </CartProvider>
  );
}

export default App;
