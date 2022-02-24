import axios from "axios";

export const userCart = async (cart, authtoken) =>
  await axios.post(
    `http://localhost:8000/api/user/cart`,
    { cart },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getUserCart = async (authtoken) =>
  await axios.get(`http://localhost:8000/api/user/cart`, {
    headers: {
      authtoken,
    },
  });

export const emptyUserCart = async (authtoken) =>
  await axios.delete(`http://localhost:8000/api/user/cart`, {
    headers: {
      authtoken,
    },
  });


export const applyCoupon = async (authtoken, coupon) =>
  await axios.post(
    `http://localhost:8000/api/user/cart/coupon`,
    { coupon },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getUserOrders = async (authtoken) =>
  await axios.get(`http://localhost:8000/api/user/orders`, {
    headers: {
      authtoken,
    },
  });

export const getWishlist = async (authtoken) =>
  await axios.get(`http://localhost:8000/api/user/wishlist`, {
    headers: {
      authtoken,
    },
  });

export const removeWishlist = async (productId, authtoken) =>
  await axios.put(
    `http://localhost:8000/api/user/wishlist/${productId}`,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );

export const addToWishlist = async (productId, authtoken) =>
  await axios.post(
    `http://localhost:8000/api/user/wishlist`,
    { productId },
    {
      headers: {
        authtoken,
      },
    }
  );

export const createCashOrderForUser = async (
  authtoken,
  COD,
  couponTrueOrFalse
) =>
  await axios.post(
    `http://localhost:8000/api/user/cash-order`,
    { couponApplied: couponTrueOrFalse, COD },
    {
      headers: {
        authtoken,
      },
    }
  );

export const saveUSerQuestion = async (authtoken, question) =>
  await axios.post(
    `http://localhost:8000/api/user/question`,
    { question },
    {
      headers: {
        authtoken,
      },
    }
  );

export const getUserQuestions = async (authtoken) =>
  await axios.get(`http://localhost:8000/api/user/qusetions`, {
    headers: {
      authtoken,
    },
  });
