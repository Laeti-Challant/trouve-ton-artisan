import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-light text-dark min-vh-100">
      <BrowserRouter>
        <Header />
        <h1 className="text-bg-primary">Trouve ton artisan</h1>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
