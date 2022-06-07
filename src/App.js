import { useEffect } from "react";
import { Routes, useNavigate } from "react-router-dom";

import routes from "./config/routes";
import generateRoutes from "./routes/index";

const App = () => {
  const navigate = useNavigate();

  const str = window.location.search;
  const savedRoute = str.slice(str.indexOf("=") + 1);

  useEffect(() => {
    savedRoute && navigate(savedRoute);
  }, []);

  return <Routes>{generateRoutes(routes)}</Routes>;
};

export default App;
