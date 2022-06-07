import {Route} from "react-router-dom";

const generateRoutes = routes =>
  routes.map(
    ({ component: Component, path }) => {
      return <Route key={path} path={path} element={<Component />} />;
    },
  );

export default generateRoutes;
