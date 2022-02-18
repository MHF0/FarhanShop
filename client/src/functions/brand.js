import axios from "axios";

export const getBrands = async () =>
  await axios.get(`http://localhost:5000/api/brands`);

export const getBrand = async (slug) =>
  await axios.get(`http://localhost:5000/api/brand/${slug}`);

export const removeBrand = async (slug, authtoken) =>
  await axios.delete(
    `http://localhost:5000/api/brand/${slug}`,
    {
      headers: {
        authtoken,
      },
    }
  );

export const updateBrand = async (slug, brand, authtoken) =>
  await axios.put(
    `http://localhost:5000/api/brand/${slug}`,
    brand,
    {
      headers: {
        authtoken,
      },
    }
  );

export const createBrand = async (brand, authtoken) =>
  await axios.post(`http://localhost:5000/api/brand`, brand, {
    headers: {
      authtoken,
    },
  });
