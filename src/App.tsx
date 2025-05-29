import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";
import { ArtisanProvider } from "./context/ArtisanProvider";

function App() {
  return (
    <div className="bg-light text-dark min-vh-100">
      <BrowserRouter>
        <ArtisanProvider>
          <AppRoutes />
        </ArtisanProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
