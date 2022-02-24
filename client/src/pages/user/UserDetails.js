import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import UserNav from "../../components/nav/UserNav";
import { createUserDetaeils } from "../../functions/userDetaels";

export default function UserDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [region, setRegion] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log({ firstname, lastname, city, phoneNumber, region });
    createUserDetaeils(
      firstName,
      lastName,
      city,
      phoneNumber,
      region,
      user.token
    )
      .then((result) => {
        toast.success("Your address is saved");
      })
      .catch((err) => {
        throw err;
      });

    //
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-0 mt-4">
          <UserNav />
        </div>
        <div className="col text-center mt-4">
          <h4>User Address Details</h4>
          <form onSubmit={handelSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Your Firstname"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Your LastName"
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Your Phonenumber"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Your Region"
              />
            </div>

            <div class="input-group mb-3">
              <select
                class="custom-select"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option selected>City...</option>
                <option>Amman</option>
                <option>Zarqa</option>
                <option>Salt</option>
              </select>
            </div>
            <button className="btn btn-primary mt-2">
              <b>Submit</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
