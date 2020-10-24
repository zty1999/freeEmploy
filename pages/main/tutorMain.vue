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
						<view class="list-item-wrapper"  v-for="item in 4" :key="item">
							<view class="list-item" title="">
									<view class="item-top">
										<text>数学辅导|需要大学生|限女生|20-30岁</text>
									</view>
										<view class="item-content">
											<view class="content-left">
												<view class="content-left-time">
													<text>辅导时间：周六上午10:00-12:00</text>
												</view>
												<view class="content-left-time">
													<text>发布时间：2020.03.30</text>
												</view>
												<view class="content-left-introduce">
													<text>吴女士 | 女孩 | 三年级 | 南昌县九里象湖小区</text>
												</view>
												<view class="content-left-tags">
													<text class="tags-item">打基础</text>
													<text class="tags-item">升学考</text>
												</view>
												<view class="content-left-tag">
												</view>
											</view>
											<view class="content-right">
												<view class="content-right-distance">
													<text>距您20km</text>
												</view>
												<view class="content-right-price">
													<text>100/小时</text>
												</view>
												<navigator url="">
												<view class="content-right-button">
													<button class="button">投递接单</button>
												</view>
												</navigator>
											</view>
											</view>
								
								</view>
							
						</view>
					
					</view>

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
		background-color: #F9F9F9;

		.main {
			padding: 10px 15px 40px;

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
				width: 100%;
				.list {
					padding: 5px 0;
					// width: 100%;
					// padding-bottom: 150px;
					.list-item-wrapper {
						height: 170px;
					}
					.list-item {
						// display: flex;
						// align-items: center;
						// justify-content: space-between;
						padding: 10px 10px;
						margin: 8px 0;
						border-radius: 6px;
						background-color: #FFFFFF;
						.item-top {
							padding: 5px 0;
							font-weight: 700;
							font-size: 14px;
							letter-spacing: 1px;
						}
						.item-content {
								display: flex;
								align-items: center;
								justify-content: space-between;
								color: #999999;
							.content-left {
								// letter-spacing: 1px;
								.content-left-time {
									padding: 5px 0;
									font-size: 12px;
								}
								.content-left-introduce {
									padding: 10px 0;
									font-size: 12px;
									
								}
								.content-left-tags {
									display: flex;
									align-items: center;
									font-weight: 700;
									color: #00E193;
									font-size: 10px;
									.tags-item {
										margin: 5px 3px;
										padding: 2px 5px;
										background-color: #E7FCF4;
										border-radius: 2px;
									}
									
								}
							}
							.content-right {
								text-align: center;
								padding-top: 15px;
								.content-right-distance {
									font-size: 12px;
									padding: 10px 0;
								}
								.content-right-price {
									padding: 5px 0;
									font-size: 14px;
									// font-weight: 700;
									color: #00E193;
								}
								.content-right-button {
									padding: 5px 0;
									.button {
										display: flex;
										align-items: center;
										justify-content: center;
										font-size: 12px;
										width: 65px;
										height: 24px;
										padding: 0 3px;
										color: #FFFFFF;
										background-color: #00E193;
										border-radius: 4px;
									}
								}
							}
						}
						
					}
				}
			}

		

		}
	}

</style>
