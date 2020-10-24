<template>
	<view class="content">
		<view class="padd">
			<view class="top_img">
				<image src="../../static/img/job.png" mode=""></image>
			</view>
			<!-- 预约家教 -->
			<view class="center-box">
				<image src="../../static/img/tel.png" mode=""></image>
			</view>
			<view class="price-table-box">
				<view class="item bg">
					<view class="left">
						服务项目
					</view>
					<view class="right">
						服务价格
					</view>
				</view>
				<view class="item border">
					<view class="left">
						专业教师
					</view>
					<view class="right">
						3000-4000/月
					</view>
				</view>
				<view class="item border-spec">
					<view class="left">
						兼职教师
					</view>
					<view class="right">
						1000-2000/月
					</view>
				</view>
			</view>
			<view class="center-box process">
				<view class="title">
					服务流程
				</view>
				<image src="../../static/img/process.png" mode=""></image>
			</view>
		</view>
		
		<!-- 教师列表 -->
		<view class="tech-list-box">
			<view class="tech-item" @click="goIntroducePage">
				<view class="head">
					<image src="../../static/img/tech.png" mode=""></image>
				</view>
				<view class="tech-desc">
					<view class="title">李老师 | 金牌老师</view>
					<view class="desc">30岁 | 教师资格证 | 语文</view>
					<view class="tag">
						<view class="btn">热情</view>
						<view class="btn">负责</view>
						<view class="btn">专业</view>
					</view>
				</view>
			</view>
			<view class="tech-item" @click="goIntroducePage">
				<view class="head">
					<image src="../../static/img/tech.png" mode=""></image>
				</view>
				<view class="tech-desc">
					<view class="title">李老师 | 金牌老师</view>
					<view class="desc">30岁 | 教师资格证 | 语文</view>
					<view class="tag">
						<view class="btn">热情</view>
						<view class="btn">负责</view>
						<view class="btn">专业</view>
					</view>
				</view>
			</view>
			<view class="tech-item" @click="goIntroducePage">
				<view class="head">
					<image src="../../static/img/tech.png" mode=""></image>
				</view>
				<view class="tech-desc">
					<view class="title">李老师 | 金牌老师</view>
					<view class="desc">30岁 | 教师资格证 | 语文</view>
					<view class="tag">
						<view class="btn">热情</view>
						<view class="btn">负责</view>
						<view class="btn">专业</view>
					</view>
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
			goIntroducePage () {
				uni.navigateTo({
					url: '../main/introduce'
				});
			}
		}

	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		height: 100%;
		margin-top: 15px;
		.padd {
			padding: 0 15px;
		}
		.top_img {
			height: 130px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.center-box {
			margin-bottom: 20px;
			margin-top: 10px;
			.title {
				width: 100%;
				text-align: center;
				margin: 25px 0px;
				font-size: 15px;
				font-weight: bold;
				color: #343434;
			}
			uni-image {
				height: 185px;
			}
		}
		.process {
			uni-image {
				height: 275px;
			}
		}
		.price-table-box {
			.bg {
				background: #F2F2F8;
			}
			.border {
				border: 1px solid #F2F2F8;
			}
			.border-spec {
				border-left: 1px solid #F2F2F8;
				border-right: 1px solid #F2F2F8;
				border-bottom: 1px solid #F2F2F8;
			}
			.item {
				display: flex;
				justify-content: center;
				align-items: center;
				height: 44px;
				color: #343434;
				font-size: 13px;
				.left {
					width: 50%;
					text-align: center;
					border-right: 1px solid #F2F2F8;
					height: 44px;
					line-height: 44px;
				}
				.right {
					width: 50%;
					text-align: center;
				}
			}
		}
		.tech-list-box {
			background: #FBFBFB;
			padding: 15px 15px 20px;
			box-sizing: border-box;
			.tech-item {
				background: white;
				box-sizing: border-box;
				height: 150px;
				border-radius: 6px;
				padding: 15px;
				display: flex;
				margin-bottom: 10px;
				.head {
					width: 110px;
					height: 120px;
					margin-right: 15px;
				}
				.tech-desc {
					flex: 1;
					.title {
						font-size: 14px;
						color: black;
						font-weight: bold;
						margin-bottom: 15px;
					}
					.desc {
						color: #9A9A9A;
						font-size: 12px;
						margin-bottom: 12px;
					}
					.tag {
						display: flex;
						flex-direction: row;
						.btn {
							width: 36px;
							height: 18px;
							background: #E8FCF5;
							border-radius: 2px;
							color: #00E294;
							font-size: 12px;
							display: flex;
							align-items: center;
							justify-content: center;
							margin-right: 5px;
						}
					}
				}
			}
		}
	}
</style>
