import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../components/pages/Home";
import ArtisansList from "../components/pages/ArtisansList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/artisans/:category" element={<ArtisansList />} />
        <Route path="/artisans/search/:term" element={<ArtisansList />} />
        {/* <Route path="/artisans/:id" element={<ArtisanDetail />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
