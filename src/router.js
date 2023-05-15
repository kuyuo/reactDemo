import { Routes, Route } from "react-router-dom";
import Home from "./home";
import ErrorPage from "./components/404";

const routes = [
  { path: '/', component: Home },
  { path: '*', component: ErrorPage },
];

const RouteConfig = () => (
  <Routes>
    {routes.map(({ path, component: Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
  </Routes>
);

export default RouteConfig;