import React from "react";
import { Link } from "react-router-dom";

const ProductListItems = ({ product }) => {
  const { price, category, subs, shipping, colors, brands, quantity, sold } =
    product;

  return (
    <ul className="list-group">
      <li className="list-group-item">
        Price{" "}
        <span className="label label-default label-pill pull-xs-right">
          {price} JD
        </span>
      </li>

      {category && (
        <li className="list-group-item">
          Category{" "}
          <Link
            to={`/category/${category.slug}`}
            className="label label-default label-pill pull-xs-right"
          >
            {category.name}
          </Link>
        </li>
      )}

      {subs && (
        <li className="list-group-item">
          Sub Categories
          {subs.map((s) => (
            <Link
              key={s._id}
              to={`/sub/${s.slug}`}
              className="label label-default label-pill pull-xs-right"
            >
              {s.name}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item">
        Shipping{" "}
        <span className="label label-default label-pill pull-xs-right">
          {shipping}
        </span>
      </li>

      {colors && (
        <li className="list-group-item">
          Color
          {colors.map((c) => (
            <div
              key={c._id}
              className="label label-default label-pill pull-xs-right"
            >
              {c.name}
            </div>
          ))}
        </li>
      )}

      {brands && (
        <li className="list-group-item">
          Brand
          {brands.map((b) => (
            <Link
              key={b._id}
              to={`/brand/${b.slug}`}
              className="label label-default label-pill pull-xs-right"
            >
              {b.name}
            </Link>
          ))}
        </li>
      )}

      <li className="list-group-item">
        Available{" "}
        <span className="label label-default label-pill pull-xs-right">
          {quantity}
        </span>
      </li>

      <li className="list-group-item">
        Sold{" "}
        <span className="label label-default label-pill pull-xs-right">
          {sold}
        </span>
      </li>
    </ul>
  );
};

export default ProductListItems;
