//用户管理
export const state = () => {
    return {
        userInfo: {
            token: '',
            user: {},
        }
    }
}

export const mutations = {
    //保存用户信息到state
    setUserInfo(state, data) {
        state.userInfo = data;
    },
    //清空userInfo
    clearUserInfo(state) {
        state.userInfo = {
            token: "",
            user: {}
        }
    }

}



// export const actions ={};