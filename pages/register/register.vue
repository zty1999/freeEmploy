<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<m-input class="m-input" type="text" clearable focus v-model="mobile" placeholder="请输入手机号码"></m-input>
			</view>
			<view class="input-row border">
				<m-input class="m-input" type="password" clearable v-model="password" placeholder="请输入密码"></m-input>
			</view>
			<view class="input-row border">
				<m-input class="m-input" type="password" clearable v-model="comfirmPwd" placeholder="请确认密码"></m-input>
			</view>
			<view class="input-row">
				<m-input type="text" v-model="code" placeholder="请输入验证码"></m-input>
				<view class="send-code-btn" @click="sendSmsCode">{{codeDuration ? codeDuration + 's' : '发送验证码' }}</view>
			</view>
			<view class="input-row" v-show="type === 2">
				<m-input type="text" v-model="invitCode" placeholder="请输入邀请码"></m-input>
				<view class="send-code-btn" @click="sendSmsCode">{{codeDuration ? codeDuration + 's' : '邀请码' }}</view>
			</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="registerClick">注册</button>
			<view class="reg-box">已有账号？<view class="reg-btn" @click="goLoginPage">去登录</view></view>
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
				codeDuration: 0,
				comfirmPwd: '',
				type: 1
			}
		},
		computed: mapState(['forcedLogin']),
		methods: {
			...mapMutations(['login']),
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
				if (!/^1\d{10}$/.test(this.mobile)) {
					uni.showModal({
						content: '手机号码填写错误',
						showCancel: false
					})
					return
				}
				if (!/^\d{6}$/.test(this.code)) {
					uni.showModal({
						content: '验证码为6位纯数字',
						showCancel: false
					});
					return;
				}
				uni.setStorageSync('uniIdToken', '5903485306u34krtjo')
				uni.setStorageSync('username', this.mobile)
				uni.reLaunch({
					url: '../main/main',
				});
			},
			registerClick() {
				uni.navigateTo({
					url: '../tutoring/teachScope',
				});
			},
			goLoginPage () {
				uni.reLaunch({
					url: '../login/login',
				});
			},
			loginLocal(nickName) {
				uni.setStorageSync('login_type', 'local')
				uni.setStorageSync('username', nickName)
				this.toMain(nickName);
			},
			toMain(userName) {
				this.login(userName);
				/**
				 * 强制登录时使用reLaunch方式跳转过来
				 * 返回首页也使用reLaunch方式
				 */
				if (this.forcedLogin) {
					uni.reLaunch({
						url: '../main/main',
					});
				} else {
					uni.navigateBack();
				}

			}
		},
		onReady() {
			this.initPosition()
		},
		onLoad(options) {
			console.log(options)
			this.type = +options.type
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		margin-top: 15px;
		padding: 0 30px;
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
