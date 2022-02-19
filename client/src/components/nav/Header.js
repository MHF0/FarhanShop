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
import { useNavigate } from "react-router-dom";
import firebase from "firebase";

export default function Header() {
  const { user, cart } = useSelector((state) => ({ ...state }));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    navigate("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        {user && user.role === "user" && (
          <Link to="/user/history">Dashboard</Link>
        )}

        {user && user.role === "admin" && (
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

      <div className="header_text">
        <div className="header_text1">Hi{user ? `, ${user.name}` : ""}</div>

        <div className="header_text2">
          <HomeOutlined style={{ marginRight: "5px" }} />
          Select your address
        </div>
      </div>

      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchOutlined
          style={{ fontSize: "20px" }}
          className="headerSearchIcon"
        />
      </div>
      {user && user ? (
        <>
          {user && user.role === "admin" ? (
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                href="/admin/dashboard"
              >
                <div className="header_text">
                  <div className="header_text1">Hi, {user.name}</div>
                  <div className="header_text2">Admin dashboard & Settings</div>
                </div>
              </a>
            </Dropdown>
          ) : (
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
                href="/user/history"
              >
                <div className="header_text">
                  <div className="header_text1">Hi, {user.name}</div>
                  <div className="header_text2">Account & Settings</div>
                </div>
              </a>
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
      <div className="header_text">
        <div className="header_text1">Your</div>
        <div className="header_text2">Orders</div>
      </div>
      <div className="header_text">
        <div className="header_text1"></div>
        <div className="header_text2"></div>
      </div>
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
