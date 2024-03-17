import { createBrowserHistory } from "history";
import React from "react";
import ReactDOM from "react-dom/client";
//cấu hình react router dom
import {
  unstable_HistoryRouter as HistoryRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import HomeTemplate from "./templates/HomeTemplate";

//cấu hình redux
import {store} from './redux/store'
import { Provider } from "react-redux";
import ResponsiveItem from "./templates/ResponsiveItem";
import HomeMobile from "./pages/Mobile/HomeMobile";
import DemoAntd from "./pages/DemoAntd";
import AdminTemplate from "./templates/AdminTemplate";
import DashBoard from "./pages/Admin/DashBoard";
import UserManagement from "./pages/Admin/UserManagement";
import OrderManagement from "./pages/Admin/OrderManagement";
import ProductManagement from "./pages/Admin/ProductManagement";

export const history: any = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<ResponsiveItem Component={<Home/>} MobileComponent={<HomeMobile/>} />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="detail">
          <Route path=":id" element={<Detail />}></Route>
        </Route>
        <Route path="search" element={<Search />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="demoantd" element={<DemoAntd />}></Route>
      </Route>
      <Route path="admin" element= {<AdminTemplate/>}>
        <Route index element={<DashBoard/>}></Route>
        <Route path="users" element={<UserManagement/>}></Route>
        <Route path="orders" element={<OrderManagement/>}></Route>
        <Route path="products" element={<ProductManagement/>}></Route>
        <Route path="*" element={<Navigate to={'/'}/>}></Route>
      </Route>
    </Routes>
  </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
