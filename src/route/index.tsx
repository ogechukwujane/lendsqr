import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Users } from "../pages";
import { Layout } from "../components";

export const RouterConfig = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
