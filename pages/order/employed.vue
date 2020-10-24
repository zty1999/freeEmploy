<template>
	<view class="content">
		<view class="navbar">
			<view :class="currentIndex === index ? 'navbar-item active':'navbar-item'" v-for="(item,index) in ['待应约','待确认','合适','不合适']"
			 :key="index" @click="navControl(index)">
				<text>{{item}}</text>
				<text class="border-box"></text>
			</view>
		</view>

		<view class="main">
			<view class="list-wrapper" v-if="currentIndex == 0">
				<view class="list">
					<navigator url="./" v-for="item in 4" :key="item">
						<view class="list-item-wrapper">
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
									</view>
								</view>
							</view>
						</view>
					</navigator>

				</view>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
			}
		},
		methods: {
			navControl(index) {
				this.currentIndex = index;
			}
		}
	}
</script>
<style lang="scss" scoped>
	page {
		background-color: #F9F9F9;
	}

	.content {
		padding-bottom: 20px;
		width: 100%;
		height: calc(100% - 44px);
		margin-top: 15px;
		font-size: 13px;
		color: #333333;
		background-color: #F9F9F9;

		.navbar {
			position: fixed;
			// top: var(--window-top);
			// left: 0;
			// right: 0;
			// z-index: 9;
			width: 100%;
			display: flex;
			align-items: center;
			text-align: center;
			font-size: 14px;
			// letter-spacing: 3px;
			color: #656565;
			background-color: #FFFFFF;

			.navbar-item {
				flex: 1;
				text-align: center;

				text {
					display: block;
					height: 34px;
					line-height: 34px;
					margin: 0 10px;
					font-weight: 700;

				}

				.border-box {
					width: 20px;
					height: 1px;
					margin: 0 auto;
					border-top: 3px solid transprants;
					border-radius: 10px 10px 10px 10px;
				}
			}

			.active {
				color: #00E394;

				text {
					font-size: 16px;
				}
				.border-box {
					background-color: #00E395;
					border-top: 3px solid #00E395;
				}
			}
		}

		.main {
			padding: 5px 15px;
			margin: 35px 0;
			.list-wrapper {
				width: 100%;

				.list {
					.list-item-wrapper {
						height: 170px;

						.list-item {
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
	}
</style>
