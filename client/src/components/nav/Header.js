import React from "react";
import "./Header.css";
import Logo from "./logo.png";
import {
  HomeOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { toast } from "react-toastify";

export default function Header() {
  const { user, cart } = useSelector((state) => ({ ...state }));

  const navigate = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate.push("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        {user && user.role === "subscriber" ? (
          <Link to="/user/history">Dashboard</Link>
        ) : (
          <Link to="/admin/dashboard">Dashboard</Link>
        )}
      </Menu.Item>
      <Menu.Item key="2" icon={<LogoutOutlined />} onClick={logout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="header">
      <Link to={"/"}>
        {" "}
        <img src={Logo} alt="logo" className="header_logo" />
      </Link>
      {user ? (
        <Link to={"/user/userdetails"}>
          {" "}
          <div className="header_text">
            <div className="header_text1">Hi, {user.name}</div>

            <div className="header_text2">
              <HomeOutlined style={{ marginRight: "5px" }} />
              Select your address
            </div>
          </div>
        </Link>
      ) : (
        <Link
          onClick={() => {
            toast.warn("Login First");
          }}
          to={"/login"}
        >
          {" "}
          <div className="header_text">
            <div className="header_text1">Hi</div>

            <div className="header_text2">
              <HomeOutlined style={{ marginRight: "5px" }} />
              Select your address
            </div>
          </div>
        </Link>
      )}

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchOutlined
          style={{ fontSize: "20px" }}
          className="headerSearchIcon"
        />
      </div>
      {user && user ? (
        <>
          {user.role && user.role === "subscriber" && (
            <Dropdown overlay={menu}>
              <div className="header_text">
                <div className="header_text1">Hi, {user.name}</div>
                <div className="header_text2">Account & Settings</div>
              </div>
            </Dropdown>
          )}

          {user.role && user.role === "admin" && (
            <Dropdown overlay={menu}>
              <div className="header_text">
                <div className="header_text1">Hi, {user.name}</div>
                <div className="header_text2">Admin dashboard & Settings</div>
              </div>
            </Dropdown>
          )}
        </>
      ) : (
        <>
          {" "}
          <Link to={"/login"}>
            <div className="header_text">
              <div className="header_text1">Hi, Sign in</div>
              <div className="header_text2">Account & Settings</div>
            </div>
          </Link>
        </>
      )}
      <Link to={"/user/history"}>
        <div className="header_text">
          <div className="header_text1">Your</div>
          <div className="header_text2">Orders</div>
        </div>
      </Link>
      <Link to={"/cart"}>
        <div className="header_cart">
          <ShoppingCartOutlined style={{ fontSize: "53px" }} />
          <span className="header_cartCount">
            <b>{cart.length}</b>
          </span>
          <span className="header_cartText">Cart</span>
        </div>
      </Link>
    </div>
  );
}
