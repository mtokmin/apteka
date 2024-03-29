import { Route, Routes, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { useContext } from "react";
import { Context } from "../index";

function AppRouter() {
  const { user } = useContext(Context);

  return (
    <Routes>
      {user.isAuth && authRoutes.map(({ path, Element }) =>
        <Route key={path} path={path} element={<Element />} />
      )}
      {publicRoutes.map(({ path, Element }) =>
        <Route key={path} path={path} element={<Element />} />
      )}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;