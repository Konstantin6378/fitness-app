// import { useAuth } from "../hooks/useAuth"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import NotFound from "../components/layout/screens/not-found/NotFound";
import { routes } from "./routes.data";

const Router = () => {

  return <BrowserRouter>
    <Routes path="/">
      {/*TODO: Auth routes */}
      {routes.map(route => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter >
}

export default Router