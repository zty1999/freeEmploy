<template>
	<view class="content">
		<view class="main">
			<view class="image-wrapper">
				<view class="image-text">
					<text class="image-text-title">零成本了解代理人</text>
					<text class="image-text-explain">邀请人可获得收益金额的20%的现金奖励</text>
					<view class="image-text-tag" type="default">了解代理</view>
				</view>
				<image class="image" src="~/static/img/red_packet.png" mode=""></image>
			</view>
			<view class="list-wrapper">
				<view class="list">
					<navigator url="./private">
						<view class="list-item" title="" note="">
							<view class="item-left">
								<image class="item-left-icon" src="~/static/img/profile.png" mode="aspectFit"></image>
								<text class="item-left-text">基本资料</text>
							</view>
							<view class="item-right">
								<image class="item-right-arrow" src="~/static/img/right_arrow.png" mode=""></image>
							</view>
						</view>
					</navigator>
					<navigator url="./educationExperience">
						<view class="list-item" title="" note="">
							<view class="item-left">
								<text class="iconfont">&#xe719;</text>
								<!-- <image class="item-left-icon" src="~/static/img/experience.png" mode="aspectFit"></image> -->
								<text class="item-left-text">教育经历</text>
							</view>
							<view class="item-right">
								<image class="item-right-arrow" src="~/static/img/right_arrow.png" mode=""></image>
							</view>
						</view>
					</navigator>
					<navigator url="./workExperience">
						<view class="list-item" title="" note="">
							<view class="item-left">
								<image class="item-left-icon" src="~/static/img/experience.png" mode="aspectFit"></image>
								<text class="item-left-text">工作经验</text>
							</view>
							<view class="item-right">
								<image class="item-right-arrow" src="~/static/img/right_arrow.png" mode=""></image>
							</view>
						</view>
					</navigator>
					<navigator url="./selfIntroduce">
						<view class="list-item" title="" note="">
							<view class="item-left">
								<image class="item-left-icon" src="~/static/img/product.png" mode="aspectFit"></image>
								<text class="item-left-text">个性介绍</text>
							</view>
							<view class="item-right">
								<image class="item-right-arrow" src="~/static/img/right_arrow.png" mode=""></image>
							</view>
						</view>
					</navigator>
					<navigator url="./uploadAvatar">
						<view class="list-item" title="" note="">
							<view class="item-left">
								<image class="item-left-icon" src="~/static/img/account.png" mode="aspectFit"></image>
								<text class="item-left-text">上传头像</text>
							</view>
							<view class="item-right">
								<image class="item-right-arrow" src="~/static/img/right_arrow.png" mode=""></image>
							</view>
						</view>
					</navigator>
				</view>

			</view>
			<view class="navigate-button">
				<!-- <navigator url="pages/main/main" open-type="switchTab"> -->
					<button @click="goToHome"  class="button" type="default">进入首页</button>
				<!-- </navigator>  -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		
		methods: {
			goToHome() {
				// 存储登录者身份 家教
				// uni.setStorageSync('',);
				
				uni.switchTab({
					url: "pages/main/main"
				})
				
			}
		},
	};
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		margin-top: 15px;
		font-size: 13px;
		color: #333333;

		.main {
			padding: 5px 15px;

			.image-wrapper {
				display: flex;
				align-items: center;
				height: 105px;
				padding-left: 21px;
				padding-right: 24px;
				background-image: url('@/static/img/red_packet_bg.png');
				background-size: 100% 100%;

				.image-text {
					flex: 1;
					display: flex;
					flex-direction: column;

					.image-text-title {
						color: #9F2727;
						font-size: 17px;
					}

					.image-text-explain {
						padding: 5px 0;
						color: #CF4B4B;
						font-size: 12px;
						font-weight: normal;
					}

					.image-text-tag {
						width: 60px;
						height: 20px;
						line-height: 20px;
						text-align: center;
						color: #FFFFFF;
						font-size: 10px;
						font-weight: normal;
						background: linear-gradient(#FF2121, #FF634F);
						border-radius: 2px;
					}
				}

				.image {
					width: 80px;
					height: 65px;
					border-radius: 6px;
				}
			}

			.list-wrapper {

				.list {
					width: 100%;
					padding-bottom: 150px;

					.list-item {
						width: 100%;
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin: 15px 0;
						height: 53px;
						border-radius: 6px;
						font-weight: 700;
						background-color: #F7F7F7;

						.item-left {
							flex: 1;
							display: flex;
							align-items: center;
							flex-flow: wrap;
							padding: 10px;

							.item-left-icon {
								width: 19px;
								height: 19px;
								vertical-align: middle;
							}
							.icon {
							  width: 19px;
							  height: 19px;
							  // vertical-align: -0.15em;
							  fill: currentColor;
							  overflow: hidden;
								color: #007AFF;
							}

							.item-left-text {
								padding-left: 20px;
								vertical-align: middle;
							}
						}

						.item-right {
							padding: 15px;

							.item-right-arrow {
								width: 6.5px;
								height: 11.5px;
							}
						}

					}
				}
			}

			.navigate-button {
				position: fixed;
				bottom: 15px;
				left: 15px;
				right: 15px;

				.button {
					width: 100%;
					height: 44px;
					line-height: 44px;
					font-size: 15px;
					color: #FFFFFF;
					background-color: #00e496;
				}
			}

		}
	}
	@font-face {
	  font-family: 'iconfont';
	  src: url('@/static/iconfont/iconfont.eot');
	  src: url('@/static/iconfont/iconfont.eot?#iefix') format('embedded-opentype'),
	      url('@/static/iconfont/iconfont.woff2') format('woff2'),
	      url('@/static/iconfont/iconfont.woff') format('woff'),
	      url('@/static/iconfont/iconfont.ttf') format('truetype'),
	      url('@/static/iconfont/iconfont.svg#iconfont') format('svg');
	}
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 19px;
		color: #0077AA;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
</style>
