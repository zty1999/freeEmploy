import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: "187****8956",
		auth: 1 // 1：家教, 2雇主
	},
	mutations: {
		login(state, userName) {
			
			state.userName = userName || '新用户';
			state.hasLogin = true;
			if (+state.auth === 2) {
				state.userName = '雇主：' + state.userName
			} else {
				state.userName = '家教：' + state.userName
			}
		},
		logout(state) {
			state.userName = "";
			state.hasLogin = false;
			state.auth = 1
		},
		setAuth (state, auth) {
			state.auth = auth
		}
	}
})

export default store
