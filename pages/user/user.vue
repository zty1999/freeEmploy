<template>
	<view class="user">
		<view class="center">
			<view class="logo" @click="bindLogin" :hover-class="!hasLogin ? 'logo-hover' : ''">
				<image class="logo-img" :src="avatarUrl"></image>
				<view class="logo-title">
					<text class="uer-name">Hi，{{hasLogin ? userName : '您未登录'}}</text>
					<text class="go-login navigat-arrow" v-if="!hasLogin">&#xe65e;</text>
				</view>
				<view class="invite-box">
					<text class="txt">开通VIP享受高品质服务</text>
					<view class="btn-box">
						<view class="btn">立即开通</view>
					</view>
				</view>
				<view class="info-box" v-if="isOwner">
					<view class="item">
						<view class="num">129</view>
						<view class="txt">我的需求</view>
					</view>
					<view class="item">
						<view class="num">129</view>
						<view class="txt">我的关注</view>
					</view>
				</view>
				<view class="info-box" v-else>
					<view class="item">
						<view class="num">129</view>
						<view class="txt">我的余额</view>
					</view>
					<view class="item">
						<view class="btn">提现</view>
					</view>
				</view>
			</view>
			<view class="nav-list" v-if="!isOwner">
				<view class="nav-item">
					<image src="../../static/img/user_1.png" mode=""></image>
					<view>实名认证</view>
				</view>
				<view class="nav-item">
					<image src="../../static/img/user_2.png" mode=""></image>
					<view>我的银行卡</view>
				</view>
				<view class="nav-item">
					<image src="../../static/img/user_3.png" mode=""></image>
					<view>评价中心</view>
				</view>
				<view class="nav-item">
					<image src="../../static/img/user_4.png" mode=""></image>
					<view>分享给好友</view>
				</view>
				<view class="nav-item">
					<image src="../../static/img/user_5.png" mode=""></image>
					<view>个人简历</view>
				</view>
				<view class="nav-item">
					<image src="../../static/img/user_6.png" mode=""></image>
					<view>申请代理</view>
				</view>
				<view class="nav-item">
					<image src="../../static/img/user_7.png" mode=""></image>
					<view>我的邀请码</view>
				</view>
				<view class="nav-item">
					<image src="../../static/img/user_8.png" mode=""></image>
					<view>我的下线</view>
				</view>
			</view>
			<view class="center-list">
				<view class="center-list-item" v-if="!isOwner">
					<text class="list-text">我的课程安排</text>
				</view>
				<view class="center-list-item" v-if="!isOwner">
					<text class="list-text">相册</text>
				</view>
				<view class="center-list-item">
					<text class="list-text">分享给好友</text>
				</view>
				<view class="center-list-item">
					<text class="list-text">客服电话</text>
					<text class="navigat-arrow">400-856952</text>
				</view>
				<view class="center-list-item">
					<text class="list-text">关于</text>
				</view>
				<view class="center-list-item">
					<text class="list-text">退出登录</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		data() {
			return {
				isOwner: true,
				avatarUrl: "../../static/img/logo.png",
			}
		},
		computed: {
			...mapState(['hasLogin', 'forcedLogin', 'userName'])
		},
		methods: {
			...mapMutations(['logout']),
			bindLogin() {
				uni.navigateTo({
					url: '../login/login',
				});
			},
			bindLogout() {
				const loginType = uni.getStorageSync('login_type')
				if (loginType === 'local') {
					this.logout();
					if (this.forcedLogin) {
						uni.reLaunch({
							url: '../login/login',
						});
					}
					return
				}

				uniCloud.callFunction({
					name: 'user-center',
					data: {
						action: 'logout'
					},
					success: (e) => {

						console.log('logout success', e);

						if (e.result.code == 0) {
							this.logout();
							uni.removeStorageSync('uniIdToken')
							uni.removeStorageSync('username')
							/**
							 * 如果需要强制登录跳转回登录页面
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/login',
								});
							}
						} else {
							uni.showModal({
								content: e.result.msg,
								showCancel: false
							})
							console.log('登出失败', e);
						}

					},
					fail(e) {
						uni.showModal({
							content: JSON.stringify(e),
							showCancel: false
						})
					}
				})


			}
		}
	}
</script>

<style lang="scss" scoped>

	page,
	view {
		display: flex;
	}

	page {
		background-color: white;
	}

	button {
		width: 100%;
	}
	.user {
		width: 100%;
	}
	.center {
		flex-direction: column;
		width: 100%;
	}
	.nav-list {
		display: flex;
		flex-wrap: wrap;
		margin-top: 25px;
		.nav-item {
			font-size: 12px;
			color: #666666;
			align-items: center;
			justify-content: center;
			width: 25%;
			margin-bottom: 15px;
			display: flex;
			flex-direction: column;
			uni-image {
				width: 28px;
				height: 28px;
				margin-bottom: 11px;
				margin-top: 5px;
			}
		}
	}
	.logo {
		width: 100%;
		height: 250px;
		padding: 15px;
		box-sizing: border-box;
		background-image: url(../../static/img/userBg.png);
		flex-direction: row;
		background-size: 100%;
		background-repeat: no-repeat;
		.invite-box {
			height: 63px;
			background: linear-gradient(0deg, #262A47 0%, #525763 100%);
			border-radius: 4px;
			position: absolute;
			left: 25px;
			right: 25px;
			top: 125px;
			.txt {
				color: #EFD989;
				font-size: 14px;
				line-height: 48px;
				margin-left: 20px;
			}
			.btn-box {
				margin-top: 10px;
				position: absolute;
				right: 10px;
			}
			.btn {
				width: 83px;
				height: 25px;
				background: linear-gradient(90deg, #CAA56F 0%, #C7964D 100%);
				border-radius: 13px;
				color: #505462;
				font-size: 12px;
				line-height: 25px;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.info-box {
			height: 83px;
			background: #FFFFFF;
			box-shadow: 1px 5px 20px 0px rgba(159, 177, 170, 0.1);
			border-radius: 6px;
			position: absolute;
			left: 15px;
			right: 15px;
			top: 170px;
			.item {
				width: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				.num {
					color: #343434;
					font-size: 17px;
					font-weight: bold;
				}
				.txt {
					color: #666666;
					font-size: 12px;
					margin-top: 5px;
				}
				.btn {
					width: 60px;
					height: 24px;
					background: #E2F8F0;
					border-radius: 4px;
					color: #00CB7C;
					font-size: 12px;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}

	.logo-hover {
		opacity: 0.8;
	}

	.logo-img {
		width: 56px;
		height: 56px;
		border-radius: 50px;
		border: 2px solid white;
		margin-top: 25px;
	}

	.logo-title {
		height: 50px;
		margin-top: 25px;
		flex: 1;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		margin-left: 10px;
	}

	.uer-name {
		height: 60rpx;
		line-height: 60rpx;
		font-size: 16px;
		color: #FFFFFF;
	}

	.go-login.navigat-arrow {
		font-size: 38rpx;
		color: #FFFFFF;
	}

	.login-title {
		height: 150rpx;
		align-items: self-start;
		justify-content: center;
		flex-direction: column;
		margin-left: 20rpx;
	}

	.center-list {
		background-color: #FFFFFF;
		margin-top: 20rpx;
		width: 100%;
		flex-direction: column;
	}

	.center-list-item {
		height: 60px;
		width: 100%;
		box-sizing: border-box;
		flex-direction: row;
		padding: 0 20px;
	}

	.list-text {
		height: 60px;
		line-height: 60px;
		font-size: 14px;
		color: #343434;
		flex: 1;
		text-align: left;
		font-weight: bold;
	}

	.navigat-arrow {
		height: 60px;
		line-height: 60px;
		font-size: 12px;
		color: #666666;
		text-align: right;
		font-family: texticons;
	}
</style>
