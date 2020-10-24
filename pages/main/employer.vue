<template>
	<view class="content">
		<view class="top_img">
			<image src="../../static/img/top.png" mode=""></image>
		</view>
		<view class="nav-box">
			<view class="nav-one">
				<view class="nav-item">
					<image src="../../static/img/small.png" mode=""></image>
					<view>小学</view>
				</view>
			</view>
			<view class="nav-list">
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/english.png" mode=""></image>
					<view>英语</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/math.png" mode=""></image>
					<view>数学</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/composition.png" mode=""></image>
					<view>作文</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/art3.png" mode=""></image>
					<view>艺术</view>
				</view>
			</view>
		</view>
		<view class="nav-box">
			<view class="nav-one">
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/middle.png" mode=""></image>
					<view>初中</view>
				</view>
			</view>
			<view class="nav-list">
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/english.png" mode=""></image>
					<view>英语</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/Physics.png" mode=""></image>
					<view>物理</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/Chemistry.png" mode=""></image>
					<view>化学</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/math.png" mode=""></image>
					<view>数学</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/composition.png" mode=""></image>
					<view>作文</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/art3.png" mode=""></image>
					<view>艺术</view>
				</view>
			</view>
		</view>
		<view class="nav-box">
			<view class="nav-one">
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/high.png" mode=""></image>
					<view>高中</view>
				</view>
			</view>
			<view class="nav-list">
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/english.png" mode=""></image>
					<view>英语</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/Physics.png" mode=""></image>
					<view>物理</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/Chemistry.png" mode=""></image>
					<view>化学</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/math.png" mode=""></image>
					<view>数学</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/composition.png" mode=""></image>
					<view>作文</view>
				</view>
			</view>
		</view>
		<view class="nav-box">
			<view class="nav-one">
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/art.png" mode=""></image>
					<view>艺术</view>
				</view>
			</view>
			<view class="nav-list">
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/draw.png" mode=""></image>
					<view>画画</view>
				</view>
				<view class="nav-item" @click="goListPage">
					<image src="../../static/img/music.png" mode=""></image>
					<view>音乐</view>
				</view>
			</view>
		</view>
		
		<!-- 预约家教 -->
		<view class="center-box">
			<view class="title">
				预约家教
			</view>
			<image src="../../static/img/tel.png" mode=""></image>
			<view class="tel_img">
				<image src="../../static/img/top.png" mode=""></image>
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
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
			const loginType = uni.getStorageSync('login_type')
			if (loginType === 'local') {
				this.login(uni.getStorageSync('username'))
				return
			}
			let uniIdToken = uni.getStorageSync('uniIdToken')
			if (uniIdToken) {
				this.login(uni.getStorageSync('username'))
				// uniCloud.callFunction({
				// 	name: 'user-center',
				// 	data: {
				// 		action: 'checkToken',
				// 	},
				// 	success: (e) => {

				// 		console.log('checkToken success', e);

				// 		if (e.result.code > 0) {
				// 			//token过期或token不合法，重新登录
				// 			if (this.forcedLogin) {
				// 				uni.reLaunch({
				// 					url: '../login/login'
				// 				});
				// 			} else {
				// 				uni.navigateTo({
				// 					url: '../login/login'
				// 				});
				// 			}
				// 		}
				// 	},
				// 	fail(e) {
				// 		uni.showModal({
				// 			content: JSON.stringify(e),
				// 			showCancel: false
				// 		})
				// 	}
				// })
			} else {
				this.guideToLogin()
			}
		},
		methods: {
			...mapMutations(['login']),
			guideToLogin() {
			},
			goListPage () {
				uni.navigateTo({
					url: '../main/list'
				});
			}
		}

	}
</script>

<style lang="scss" scoped>
	.content {
		padding: 0 15px 40px 15px;
		width: 100%;
		height: 100%;
		margin-top: 15px;
		.top_img {
			height: 130px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.nav-box {
			display: flex;
			margin: 20px 0px;
			.nav-one {
				width: 70px;
				.nav-item {
					font-size: 12px;
					color: #666666;
					text-align: center;
					uni-image {
						width: 42px;
						height: 42px;
						margin-bottom: 2px;
					}
				}
			}
			.nav-list {
				flex: 1;
				display: flex;
				flex-wrap: wrap;
				.nav-item {
					font-size: 12px;
					color: #666666;
					text-align: center;
					width: 20%;
					margin-bottom: 10px;
					uni-image {
						width: 28px;
						height: 28px;
						margin-bottom: 11px;
						margin-top: 5px;
					}
				}
			}
			
		}
		.center-box {
			margin-bottom: 20px;
			.title {
				width: 100%;
				text-align: center;
				margin: 15px 0px;
				font-size: 15px;
				font-weight: bold;
			}
			uni-image {
				height: 185px;
			}
			.tel_img {
				uni-image {
					height: 115px;
					margin-top: 5px;
				}
			}
		}
	}
</style>
