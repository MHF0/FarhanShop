import React, { useEffect, useState } from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getUserDetaeils } from "../../functions/userDetaels";
import { useSelector } from "react-redux";

const UserDetails = () => {
  const [userDetails, setUserDetails] = useState([]);

  const { user } = useSelector((state) => ({ ...state }));

  const loadUserFirstNames = () =>
    getUserDetaeils(user.token).then((res) => {
      console.log(res.data);
      setUserDetails(res.data.userAddress);
    });
  useEffect(() => {
    loadUserFirstNames();
    // eslint-disable-next-line
  }, []);

  const showDetailsInTable = () => (
    <table className="table caption-top">
      <thead>
        <tr>
          <th scope="col">User ID</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">City</th>
          <th scope="col">PhoneNumber</th>
          <th scope="col">Region</th>
        </tr>
      </thead>
      <tbody>
        {userDetails &&
          userDetails.map((element, i) => {
            return (
              <tr key={i}>
                <th> {element.user}</th>
                <th> {element.firstName}</th>
                <th> {element.lastName}</th>
                <th> {element.city}</th>
                <th> {element.phoneNumber}</th>
                <th> {element.region}</th>
              </tr>
            );
          })}
      </tbody>
    </table>
  );

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <AdminNav />
          </div>

          <div className="col-md-10">
            <h4>User Details</h4>
            {showDetailsInTable()}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
