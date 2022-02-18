import axios from "axios";

export const getColors = async () =>
  await axios.get(`http://localhost:5000/api/colors`);

export const getColor = async (slug) =>
  await axios.get(`http://localhost:5000/api/color/${slug}`);

export const removeColor = async (slug, authtoken) =>
  await axios.delete(
    `http://localhost:5000/api/color/${slug}`,
    {
      headers: {
        authtoken,
      },
    }
  );

export const updateColor = async (slug, color, authtoken) =>
  await axios.put(
    `http://localhost:5000/api/color/${slug}`,
    color,
    {
      headers: {
        authtoken,
      },
    }
  );

export const createColor = async (color, authtoken) =>
  await axios.post(`http://localhost:5000/api/color`, color, {
    headers: {
      authtoken,
    },
  });

export const createSallerColor = async (color, authtoken) =>
  await axios.post(
    `http://localhost:5000/api/saller/color`,
    color,
    {
      headers: {
        authtoken,
      },
    }
  );
