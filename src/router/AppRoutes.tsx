import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import Home from "../components/pages/Home";
import ArtisansList from "../components/pages/ArtisansList";
import ArtisanDetails from "../components/pages/ArtisanDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/artisan/:id" element={<ArtisanDetails />} />
        <Route path="/artisans/search/:term" element={<ArtisansList />} />
        <Route path="/artisans/:category" element={<ArtisansList />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
