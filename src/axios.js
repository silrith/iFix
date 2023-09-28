import axios from "axios";
// import store from "../store";
export default {
  install: (app) => {
    const instance = axios.create({
      baseURL: "https://localhost:2132/api/",
    });

    // const addHeader = () => {
    //     let config = {
    //       headers: {},
    //     };
    //     const token = store.state.session.token;
    //     if (token) {
    //       config.headers["Authorization"] = "Bearer " + token;
    //     }
    //     return config;
    //   };

    let ajax = {
      get: function (url) {
        return instance.get(url);
      },
      post: function (url, data) {
        return instance.post(url, data);
      },
      delete: function (url) {
        return instance.delete(url);
      },
      put: function (url, data) {
        return instance.put(url, data);
      },
    };
    app.config.globalProperties.$ajax = ajax;
  },
};

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';