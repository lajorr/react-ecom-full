import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
