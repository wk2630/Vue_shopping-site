import { reqGetCode, reqLogout, reqUserInfo, reqUserLogin, reqUserRegister } from "@/api";
import { getToken, removeToken, setToken } from "@/utils/token";
//登录与注册
const state = {
    code: "",
    token: getToken(),
    userInfo: {},
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    //清除本地数据
    CLEAR(state){
        //把仓库中的用户相关信息清空
        state.token='';
        state.userInfo={};
        //本地存储数据清空
        removeToken();
    }
};
const actions = {
    //获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return '成功'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return '成功'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    // 登录
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            commit("USERLOGIN", result.data.token);
            //持久化存储数据
            setToken(result.data.token);
            return '成功'
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    //获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            commit("GETUSERINFO", result.data);
            return '成功';
        }else{
            return Promise.reject(new Error('faile'));
        }
    },
    //退出登录
    async userLogout({commit}){
        //向服务器发一次请求，通知服务器清除token
        let result=await reqLogout();
        if(result.code==200){
            commit("CLEAR");
        }else{
            return Promise.reject(new Error('faile'));
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}