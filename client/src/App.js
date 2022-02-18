import React, { useEffect, lazy, Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";

import { auth } from "./firebase";
import { currentUser } from "./functions/auth";
import { ToastContainer } from "react-toastify";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import Header from "./components/nav/Header";

// Using lazy
// const Header = lazy(()=> import(""))

import "./App.css";
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
      <Header />
    </div>
  );
};

export default App;
