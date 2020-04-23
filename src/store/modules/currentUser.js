import axios from "axios";

const URL = "http://pointsale.boxcode.com.mx/"
/* const URL = "http://127.0.0.1:8000/" */

const state = {
  user: {},
  loginMessage: "",
};

const getters = {};

const actions = {

  async getUser({ commit }) {
    await axios
      .get(URL + "api/user/current")
      .then((response) => {
        commit("setUser", response.data);
      })
  },

  loginUser({ commit }, user) {
    axios
      .post(URL + "api/user/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        if (response.data.access_token) {
          localStorage.setItem("blog_token", response.data.access_token);
          window.location.replace("/inicio");
        } else {
          //se envie el error a la vista
          commit("setLoginMessage", response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  logoutUser() {
    localStorage.removeItem("blog_token");
    window.location.replace("/login");
  },
};

const mutations = {
  setUser(state, data) {
    state.user = data;
  },
  setLoginMessage(state, data) {
    state.loginMessage = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
