import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  colorOptions,
  brandOptions,
  showSub,
}) => {
  // destructure
  const {
    title,
    description,
    others,
    price,
    categories,
    subs,
    quantity,
    colors,
    brands,
    shipping,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Others</label>
        <textarea
          type="text"
          name="others"
          className="form-control"
          value={others}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Count</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCatagoryChange}
        >
          <option>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group">
        <label>Shipping</label>
        <input
          type="number"
          name="shipping"
          className="form-control"
          value={shipping}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Color</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={colors}
          onChange={(value) => setValues({ ...values, colors: value })}
        >
          {colorOptions.length &&
            colorOptions.map((q) => (
              <Option key={q._id} value={q._id}>
                {q.name}
              </Option>
            ))}
        </Select>
      </div>

      <div>
        <label>Brand</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={brands}
          onChange={(value) => setValues({ ...values, brands: value })}
        >
          {brandOptions.map((b) => (
            <Option key={b._id} value={b._id}>
              {b.name}
            </Option>
          ))}
        </Select>
      </div>

      {showSub && (
        <div>
          <label>Sub category</label>
          <Select
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Please select"
            value={subs}
            onChange={(value) => setValues({ ...values, subs: value })}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
      )}

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductCreateForm;
