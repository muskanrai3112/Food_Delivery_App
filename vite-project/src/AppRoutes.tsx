import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => (
    
  <Routes>
    <Route path="/" element={<span>Home Page</span>} />
    <Route path="/" element={<span>User profile Page</span>} />
    <Route path="*" element={Navigate to="/"}/>
  </Routes>
);
export default AppRoutes;
