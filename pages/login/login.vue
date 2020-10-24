<template>
	<view class="content">
		<view class="login-title">自由雇</view>
		<view class="input-group">
			<view class="input-row border">
				<m-input class="m-input" type="text" clearable focus v-model="mobile" placeholder="请输入手机号码"></m-input>
			</view>
			<view class="input-row">
				<m-input type="text" v-model="code" placeholder="请输入验证码"></m-input>
				<view class="send-code-btn" @click="sendSmsCode">{{codeDuration ? codeDuration + 's' : '发送验证码' }}</view>
			</view>
			<view class="input-row">
				<m-input type="text" v-model="invitCode" placeholder="请输入邀请码"></m-input>
				<view class="send-code-btn" @click="sendSmsCode">{{codeDuration ? codeDuration + 's' : '邀请码' }}</view>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindLogin">登录</button>
			<view class="reg-box">还没账号？<view class="reg-btn" @click="goRegister">立即注册</view></view>
		</view>
	</view>
</template>

<script>
	import service from '../../service.js';
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import mInput from '../../components/m-input.vue'

	export default {
		components: {
			mInput
		},
		data() {
			return {
				mobile: '',
				code: '',
				invitCode: '',
				providerList: [],
				hasProvider: false,
				username: '',
				password: '',
				positionTop: 0,
				isDevtools: false,
				codeDuration: 0
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login', 'setAuth']),
			initPosition() {
				/**
				 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
				 * 反向使用 top 进行定位，可以避免此问题。
				 */
				this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
			},
			sendSmsCode() {
				if(this.codeDuration) {
					uni.showModal({
						content: `请在${this.codeDuration}秒后重试`,
						showCancel: false
					})
				}
				if (!/^1\d{10}$/.test(this.mobile)) {
					uni.showModal({
						content: '手机号码填写错误',
						showCancel: false
					})
					return
				}
			},
			loginBySms() {
				// if (!/^1\d{10}$/.test(this.mobile)) {
				// 	uni.showModal({
				// 		content: '手机号码填写错误',
				// 		showCancel: false
				// 	})
				// 	return
				// }
				// if (!/^\d{6}$/.test(this.code)) {
				// 	uni.showModal({
				// 		content: '验证码为6位纯数字',
				// 		showCancel: false
				// 	});
				// 	return;
				// }
				if (this.code === '111111') {
					uni.setStorageSync('auth', JSON.stringify(2))
					this.setAuth(2)
				} else {
					uni.setStorageSync('auth', JSON.stringify(1))
					this.setAuth(1)
				}
				uni.setStorageSync('uniIdToken', '5903485306u34krtjo')
				uni.setStorageSync('username', this.mobile)
				uni.reLaunch({
					url: '../main/main',
				});
			},
			bindLogin() {
				this.loginBySms()
			},
			goRegister () {
				uni.navigateTo({
					url: '../register/choose',
				});
			},
		},
		onReady() {
			this.initPosition();
			// #ifdef MP-WEIXIN
			this.isDevtools = uni.getSystemInfoSync().platform === 'devtools';
			// #endif
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		margin-top: 15px;
		padding: 0 30px;
		.login-title {
			font-size: 30px;
			margin: 30px 0 20% 0;
			font-weight: bold;
			color: #00C97A;
			text-align: center;
			width: 100%;
		}
		.input-row {
			height: 45px;
			font-size: 15px;
			line-height: 45px;
			border-bottom: 1px solid rgba(234, 234, 234, 1);
			padding: 5px 0;
		}
	}
	
	.send-code-btn {
		width: 120px;
		text-align: right;
		color: #00E496;
		padding-right: 10px;
	}
	
	.btn-row {
		margin-top: 45px;
		padding: 10px;
	}
	
	button.primary {
		background-color: #00C97A;
	}

	.reg-box {
		margin-top: 10px;
		color: #333333;
		font-size: 13px;
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		.reg-btn {
			color: #00C97A;
		}
	}
</style>
