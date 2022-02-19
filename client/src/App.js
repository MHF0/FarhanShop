import React, { useEffect, lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "./firebase";
import { currentUser } from "./functions/auth";
import { ToastContainer } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import Header from "./components/nav/Header";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Using lazy
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const RegisterComplete = lazy(() => import("./pages/auth/RegisterComplete"));
const AdminRoute = lazy(() => import("./components/routes/AdminRoute"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const CategoryCreate = lazy(() =>
  import("./pages/admin/category/CategoryCreate")
);
const ColorUpdate = lazy(() => import("./pages/admin/color/ColorUpdate"));
const ColorCreate = lazy(() => import("./pages/admin/color/ColorCreate"));
const CategoryUpdate = lazy(() =>
  import("./pages/admin/category/CategoryUpdate")
);
const SubCreate = lazy(() => import("./pages/admin/sub/SubCreate"));
const SubUpdate = lazy(() => import("./pages/admin/sub/SubUpdate"));
const BrandCreate = lazy(() => import("./pages/admin/brand/BrandCreate"));
const BrandUpdate = lazy(() => import("./pages/admin/brand/BrandUpdate"));
const ProductCreate = lazy(() => import("./pages/admin/product/ProductCreate"));
const Home = lazy(() => import("./pages/Home"));
const SideDrawer = lazy(() => import("./components/drawer/SideDrawer"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const History = lazy(() => import("./pages/user/History"));
const UserRoute = lazy(() => import("./components/routes/UserRoute"));
const Password = lazy(() => import("./pages/user/Password"));
const Wishlist = lazy(() => import("./pages/user/Wishlist"));
// const UserDetails = lazy(() => import("./components/order/UserDetails"));
const AllProducts = lazy(() => import("./pages/admin/product/AllProducts"));
const ProductUpdate = lazy(() => import("./pages/admin/product/ProductUpdate"));
const Product = lazy(() => import("./pages/Product"));
const CategoryHome = lazy(() => import("./pages/category/CategoryHome"));
const SubHome = lazy(() => import("./pages/sub/SubHome"));
const BrandHome = lazy(() => import("./pages/brandHome/BrandHome"));
const Shop = lazy(() => import("./pages/Shop"));
const Cart = lazy(() => import("./pages/Cart"));
const CreateCouponPage = lazy(() =>
  import("./pages/admin/coupon/CreateCouponPage")
);

const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        currentUser(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="col text-center p-5">
            ___ Farhan
            <LoadingOutlined />
            Shop ___
          </div>
        }
      >
        <Header />
        <SideDrawer />
        <ToastContainer />
        {/* Route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/complete" element={<RegisterComplete />} />
          <Route path="/forgot/password" element={<ForgotPassword />} />

          <Route path="/product/:slug" element={<Product />} />
          <Route path="/category/:slug" element={<CategoryHome />} />
          <Route path="/sub/:slug" element={<SubHome />} />
          <Route path="/brand/:slug" element={<BrandHome />} />
        </Routes>

        {/* Admin Route */}
        <AdminRoute path="/admin/dashboard" element={<AdminDashboard />} />
        <AdminRoute path="/admin/product" element={<ProductCreate />} />
        <AdminRoute path="/admin/coupon" element={<CreateCouponPage />} />
        <AdminRoute path="/admin/product/:slug" element={<ProductUpdate />} />
        <AdminRoute path="/admin/products" element={<AllProducts />} />

        <AdminRoute path="/admin/category" element={<CategoryCreate />} />
        <AdminRoute path="/admin/category/:slug" element={<CategoryUpdate />} />

        <AdminRoute path="/admin/sub" element={<SubCreate />} />
        <AdminRoute path="/admin/sub/:slug" element={<SubUpdate />} />

        <AdminRoute path="/admin/color" element={<ColorCreate />} />
        <AdminRoute path="/admin/color/:slug" element={<ColorUpdate />} />

        <AdminRoute path="/admin/brand" element={<BrandCreate />} />
        <AdminRoute path="/admin/brand/:slug" element={<BrandUpdate />} />

        {/* User Route */}
        <UserRoute path="/user/history" element={<History />} />
        <UserRoute path="/user/password" element={<Password />} />
        <UserRoute path="/user/wishlist" element={<Wishlist />} />

        {/* <UserRoute path="/checkout" element={<Checkout />} /> */}
      </Suspense>
    </div>
  );
};

export default App;
