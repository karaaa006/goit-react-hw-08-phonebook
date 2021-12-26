import axios from "axios";
const api = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

export const apiTokenConfig = {
  set(token) {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
  },
  unset() {
    api.defaults.headers.common["Authorization"] = "";
  },
};

export const signUp = async function (user) {
  try {
    const res = await api.post("/users/signup", user);

    apiTokenConfig.set(res.token);

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const login = async function (credentials) {
  try {
    const res = await api.post("/users/login", credentials);
    apiTokenConfig.set(res.data.token);

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const logout = async function () {
  try {
    const res = await api.post("/users/logout");

    apiTokenConfig.unset();

    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getContacts = async function () {
  try {
    const res = await api.get("/contacts");

    return res;
  } catch (err) {
    return err;
  }
};

export const setContact = async function (contact) {
  try {
    const res = await api.post("/contacts", contact);

    return res;
  } catch (err) {
    return err;
  }
};

export const delContact = async function (id) {
  try {
    const res = await api.delete(`contacts/${id}`);

    return res;
  } catch (err) {
    return err;
  }
};

export const editContact = async function (id, contact) {
  try {
    const res = await api.patch(`contacts/${id}`, contact);

    return res;
  } catch (err) {
    return err;
  }
};
