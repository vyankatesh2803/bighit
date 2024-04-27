import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import CartPage from "./pages/CartPage";
import LandingPage from './pages/LandingPage';
import ProductPage from "./pages/ProductPage";
import NoPage from "./pages/NoPage";


function App() {
  // const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   // Fetch data from the API
  //   fetch('https://dummyjson.com/products')
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setProductList(data);
  //     })
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/"> */}
          <Route index element={ <LandingPage/>} />
          <Route path="cart" element={<CartPage />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
