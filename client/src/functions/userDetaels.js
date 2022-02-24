import axios from "axios";

export const createUserDetaeils = async (
  firstName,
  lastName,
  city,
  phoneNumber,
  region,
  authtoken
) =>
  await axios.post(
    `http://localhost:8000/api/createuserdetails`,
    { firstName, lastName, city, phoneNumber, region },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getUserDetaeils = async (authtoken) =>
  await axios.get(`http://localhost:8000/api/getUserDetails`, {
    headers: {
      authtoken,
    },
  });


// export const updateUserDetaeils = async (
//   firstname,
//   lastname,
//   city,
//   phoneNumber,
//   region,
//   authtoken
// ) =>
//   await axios.put(
//     `http://localhost:8000/api/createuserdetails`,
//     { firstname, lastname, city, phoneNumber, region },
//     {
//       headers: {
//         authtoken,
//       },
//     }
//   );
