import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import About from "./pages/About.jsx";
import Billing from "./pages/Billing.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail.jsx";
import SignUp from "./pages/SignUp.jsx";
import CartProvider from "./provider/CartProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="cart" element={<Cart />} />
      <Route path="billing" element={<Billing />} />
    </Route>
  )
);

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <CartProvider>
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </div>
  );
}

export default App;
