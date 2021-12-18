import axios from "axios";

const api = axios.create({
  baseURL: "https://61bde76d2a1dd4001708a185.mockapi.io/",
});

export const getContacts = async function () {
  try {
    const data = api.get("contacts");

    return data;
  } catch (err) {
    return err;
  }
};

export const setContact = async function (contact) {
  try {
    const data = api.post("contacts", contact);

    return data;
  } catch (err) {
    return err;
  }
};

export const delContact = async function (id) {
  try {
    const data = api.delete(`contacts/${id}`);

    return data;
  } catch (err) {
    return err;
  }
};
