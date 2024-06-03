import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import ListPage from './pages/ListPage'

const Loyaut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <h1>NOT FOUND</h1>,
    element: <Loyaut />,
    children: [
      {
        path: "/",
        element: <MainPage />
      },
      {
        path: "/list/:id",
        element: <ListPage />
      },
    ]
  },

]);


function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
