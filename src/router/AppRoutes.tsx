import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<h1>Home</h1>} />
        {/* <Route path="/artisans" element={<AtisansList />} /> */}
        {/* <Route path="/artisans/:id" element={<ArtisanDetail />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
