import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../components/pages/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="/artisans" element={<AtisansList />} /> */}
        {/* <Route path="/artisans/:id" element={<ArtisanDetail />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
