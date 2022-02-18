import React from "react";
import "./Header.css";
import Logo from "./logo.png";
import {
  HomeOutlined,
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

export default function Header() {
  return (
    <div className="header">
      {/* <div className="header_menuicon">
        <MenuOutlined />
      </div> */}
      <img src={Logo} alt="logo" className="header_logo" />

      <div className="header_text">
        <div className="header_text1">Hi</div>

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
      <div className="header_text">
        <div className="header_text1">Hi, Sign in</div>
        <div className="header_text2">Account & Settings</div>
      </div>
      <div className="header_text">
        <div className="header_text1">Your</div>
        <div className="header_text2">Orders</div>
      </div>
      <div className="header_text">
        <div className="header_text1"></div>
        <div className="header_text2"></div>
      </div>
      <div className="header_cart">
        <ShoppingCartOutlined style={{ fontSize: "50px" }} />
        <span className="header_cartCount">0</span>
        <span className="header_cartText">Cart</span>
      </div>
    </div>
  );
}
