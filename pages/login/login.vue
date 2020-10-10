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
		<view class="oauth-row" v-if="hasProvider" v-bind:style="{top: positionTop + 'px'}">
			<view class="oauth-image" v-for="provider in providerList" :key="provider.value">
				<image :src="provider.image" @tap="oauth(provider.value)"></image>
				<!-- #ifdef MP-WEIXIN -->
				<button v-if="!isDevtools" open-type="getUserInfo" @getuserinfo="getUserInfo"></button>
				<!-- #endif -->
			</view>
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
			...mapMutations(['login']),
			initProvider() {
				const filters = ['weixin', 'qq', 'sinaweibo'];
				uni.getProvider({
					service: 'oauth',
					success: (res) => {
						if (res.provider && res.provider.length) {
							for (let i = 0; i < res.provider.length; i++) {
								if (~filters.indexOf(res.provider[i])) {
									this.providerList.push({
										value: res.provider[i],
										image: '../../static/img/' + res.provider[i] + '.png'
									});
								}
							}
							this.hasProvider = true;
						}
					},
					fail: (err) => {
						console.error('获取服务供应商失败：' + JSON.stringify(err));
					}
				});
			},
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
				// uniCloud.callFunction({
				// 	name: 'user-center',
				// 	data: {
				// 		action: 'sendSmsCode',
				// 		params: {
				// 			mobile: this.mobile
				// 		}
				// 	},
				// 	success: (e) => {
				// 		if (e.result.code == 0) {
				// 			uni.showModal({
				// 				content: '验证码发送成功，请注意查收',
				// 				showCancel: false
				// 			})
				// 			this.codeDuration = 60
				// 			this.codeInterVal = setInterval(() => {
				// 				this.codeDuration--
				// 				if (this.codeDuration === 0) {
				// 					if (this.codeInterVal) {
				// 						clearInterval(this.codeInterVal)
				// 						this.codeInterVal = null
				// 					}
				// 				}
				// 			}, 1000)
				// 		} else {
				// 			uni.showModal({
				// 				content: '验证码发送失败：' + e.result.msg,
				// 				showCancel: false
				// 			})
				// 		}

				// 	},
				// 	fail(e) {
				// 		uni.showModal({
				// 			content: '验证码发送失败',
				// 			showCancel: false
				// 		})
				// 	}
				// })
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
					console.log('xxxx')
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
			bindLogin() {
				this.loginBySms()
			},
			goRegister () {
				uni.navigateTo({
					url: '../register/choose',
				});
			},
			oauth(value) {
				console.log('三方登录只演示登录api能力，暂未关联云端数据');
				uni.login({
					provider: value,
					success: (res) => {
						uni.getUserInfo({
							provider: value,
							success: (infoRes) => {
								/**
								 * 实际开发中，获取用户信息后，需要将信息上报至服务端。
								 * 服务端可以用 userInfo.openId 作为用户的唯一标识新增或绑定用户信息。
								 */
								this.loginLocal(infoRes.userInfo.nickName);
							},
							fail() {
								uni.showToast({
									icon: 'none',
									title: '登陆失败'
								});
							}
						});
					},
					fail: (err) => {
						console.error('授权登录失败：' + JSON.stringify(err));
					}
				});
			},
			getUserInfo({
				detail
			}) {
				console.log('三方登录只演示登录api能力，暂未关联云端数据');
				if (detail.userInfo) {
					this.loginLocal(detail.userInfo.nickName);
				} else {
					uni.showToast({
						icon: 'none',
						title: '登陆失败'
					});
				}
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
			this.initPosition();
			this.initProvider();
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
	
	.oauth-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.oauth-image {
		position: relative;
		width: 50px;
		height: 50px;
		border: 1px solid #dddddd;
		border-radius: 50px;
		margin: 0 20px;
		background-color: #ffffff;
	}

	.oauth-image image {
		width: 30px;
		height: 30px;
		margin: 10px;
	}

	.oauth-image button {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
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
