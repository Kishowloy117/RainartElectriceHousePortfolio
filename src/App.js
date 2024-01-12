import logo from './logo.svg';
import './App.css';
// import Home from './Component/Home/home';
import Header from './Component/Header/header';
import Home from './Component/Home/home';
// import ProductComponent from './Component/AllProduct/AulmoProducts/products';
import AulmoWhiteProducts from './Component/AllProduct/AulmoWhiteProducts/products'
import AulmoGoldenProducts from './Component/AllProduct/AulmoGoldenProducts/products'
import LedLightProducts from './Component/AllProduct/LedLightProducts/products'
import FloodLightProducts from './Component/AllProduct/FloodLightProducts/products'
import SweProducts from './Component/AllProduct/SWEProducts/products'
import LedPannelProducts from './Component/AllProduct/LedPannelProducts/products'
import SpotLightProducts from './Component/AllProduct/SpotLightProducts/products'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Component/Footer/footer';
import AulmoProductDetail from './Component/Product/AulmoSwitch/product';
import AulmoGolenSwitchDetail from './Component/Product/AulmoGolden/product';
import LightProductDetail from './Component/Product/Light/product';
import SWEProductDetail from './Component/Product/SweSwitch/product';
import LedPannelDetail from './Component/Product/LedPannel/product';
import SpotLightDetail from './Component/Product/SpotLight/product';
import FloodLightProductDetails from './Component/Product/FloodLight/product';
import About from './Component/About/about';
import ScrollToTop from './Component/ScrollToTop/scrolltotop';
import Messenger from './Component/MessengerLink/messengerlink'
import Aulmo from './Component/AulmoBrand/aulmo'
import SWE from './Component/SWEBrand/SWE'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet"; 

function App() {
  
  return (
    <div >
      <Helmet>  
        <html lang="en" />  
        <title>Rainart Electric House</title>  
        <meta name="description" content="Shop Electric Switch and Light" />  
        {/* <meta name="keywords" content="bulb, switch, flat light, shop, Aulmo, SWE, VR, light, electronic" />   */}
      </Helmet> 
      <Header/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<AulmoProductDetail />} />
          <Route path="/aulmo-golden/:id" element={<AulmoGolenSwitchDetail />} />
          <Route path="/flood-light/:id" element={<FloodLightProductDetails />} />
          <Route path="/swe-switch/:id" element={<SWEProductDetail />} />
          <Route path="/led-pannel/:id" element={<LedPannelDetail />} />
          <Route path="/spot-light/:id" element={<SpotLightDetail />} />
          <Route path="/aulmo-products-gl" element={<AulmoGoldenProducts />} />
          <Route path="/aulmo-products-wh" element={<AulmoWhiteProducts />} />
          <Route path="/spot-lights" element={<SpotLightProducts />} />
          <Route path="/swe-products" element={<SweProducts />} />
          <Route path="/led-pannel" element={<LedPannelProducts />} />
          <Route path="/flood-light" element={<FloodLightProducts />} />
          <Route path="/led-light" element={<LedLightProducts />} />
          <Route path="/aulmo" element={<Aulmo />} />
          <Route path="/swe" element={<SWE />} />
          <Route path="/led-light/:id" element={<LightProductDetail />} />
      </Routes>
    </BrowserRouter>
      {/* <Header/>
      <Showbar/>
      <Home/>
      <ProductComponent/>
      <ProductDetail/>
      <About/>
      <Aulmo/>
      <Footer/>
      <ScrollToTop/>
      <Messenger/> */}
      <Footer/>
      <ScrollToTop/>
      <Messenger/>
    </div>
  );
}

export default App;
