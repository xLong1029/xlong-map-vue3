import Api from "api/user/index.js";
import { resetRouter } from "router";
import { strToArr, delLocalS } from "utils";
import { getToken, removeToken, setToken } from "utils/auth";

const defaultUser = {
  userId: 0,
  avatar: "",
  gender: "",
  username: "",
  realName: "",
  nickName: "",
  roles: [],
};

// 清空账户信息
function clearAccount(_commit) {
  delLocalS("bmob");
  removeToken();
  resetRouter();
  _commit("SET_TOKEN", null);
  _commit("SET_USER", { ...defaultUser });
}

const state = {
  token: getToken(),
  user: { ...defaultUser },
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USER: (state, user) => {
    state.user = user;
  },
};

const actions = {
  // 获取用户信息
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      const token = getToken();

      Api.GetUser(token)
        .then((res) => {
          const { code, data } = res;

          // 登录成功
          if (code == 200 && data) {
            const {
              realName,
              username,
              nickName,
              gender,
              objectId,
              userFace,
              role,
            } = data;

            const info = {
              avatar: userFace,
              roles: role ? strToArr(role, ",") : null,
              realName,
              username,
              nickName,
              gender,
              userId: objectId,
            };

            commit("SET_USER", info);
            resolve(info);
          }
          // 登录失败
          else {
            clearAccount(commit);
            reject(res);
          }
        })
        .catch((err) => {
          clearAccount(commit);
          reject(err);
        });
    });
  },

  // 登出
  logout({ commit }) {
    return new Promise((resolve) => {
      // Api.Logout();
      clearAccount(commit);
      resolve();
    });
  },

  // 登录
  login({ commit }, from) {
    return new Promise((resolve, reject) => {
      Api.Login(from)
        .then((res) => {
          const { code, data } = res;
          if (code == 200) {
            // 存储token
            setToken(data.token);
            commit("SET_TOKEN", data.token);
            resolve(data);
          } else reject(res);
        })
        .catch((err) => reject(err));
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
