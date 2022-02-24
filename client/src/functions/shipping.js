import axios from "axios";

export const getShippings = async () =>
    await axios.get(`http://localhost:8000/api/shippings`);

export const getShipping = async (slug) =>
    await axios.get(`http://localhost:8000/api/shipping/${slug}`);

export const removeShipping = async (slug, authtoken) =>
    await axios.delete(`http://localhost:8000/api/shipping/${slug}`, {
        headers: {
            authtoken,
        },
    });

export const updateShipping = async (slug, shipping, authtoken) =>
    await axios.put(`http://localhost:8000/api/shipping/${slug}`, shipping, {
        headers: {
            authtoken,
        },
    });

export const createShipping = async (shipping, authtoken) =>
    await axios.post(`http://localhost:8000/api/shipping`, shipping, {
        headers: {
            authtoken,
        },
    });
