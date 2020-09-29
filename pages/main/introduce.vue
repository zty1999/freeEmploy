<template>
	<view class="introduce-container">
		<view class="head">
			<view class="head-box">
				<view class="head-img">
					<image src="../../static/img/tech.png" mode=""></image>
				</view>
				<view class="head-info">
					<view class="title">语文 数学 英语</view>
					<view class="desc">30岁 | 教师资格证 | 语文</view>
					<view class="tag">
						<view class="tag-item">
							<view class="tag-desc">25岁</view>
							<view class="tag-key">年龄</view>
						</view>
						<view class="tag-item">
							<view class="tag-desc">3年</view>
							<view class="tag-key">教龄</view>
						</view>
						<view class="tag-item">
							<view class="tag-desc">大学生</view>
							<view class="tag-key">身份</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="experience-box">
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			  active: '1',
			  steps: [
				  {
					text: '步骤一',
					desc: '描述信息',
					inactiveIcon: 'location-o',
					activeIcon: 'success',
				  },
				  {
					text: '步骤二',
					desc: '描述信息',
					inactiveIcon: 'like-o',
					activeIcon: 'plus',
				  },
				  {
					text: '步骤三',
					desc: '描述信息',
					inactiveIcon: 'star-o',
					activeIcon: 'cross',
				  },
				  {
					text: '步骤四',
					desc: '描述信息',
					inactiveIcon: 'phone-o',
					activeIcon: 'fail',
				  },
				],
			};
		}
	}
</script>

<style lang="scss" scoped>
.introduce-container {
	width: 100%;
	height: 100%;
	background: #F2F2F2;
	.head {
		width: 100%;
		height: 130px;
		background: #01E497;
		.head-box {
			background: white;
			box-sizing: border-box;
			border-radius: 6px;
			margin: 15px;
			display: flex;
			margin-bottom: 10px;
			box-shadow: 1px 5px 40px 0px rgba(13, 116, 81, 0.06);
			position: relative;
			top: 25px;
			padding: 18px;
			.head-img {
				width: 110px;
				height: 120px;
				margin-right: 15px;
			}
			.head-info {
				flex: 1;
				.title {
					font-size: 15px;
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
					margin-top: 30px;
					.tag-item {
						flex: 1;
						.tag-desc {
							color: #343434;
							font-size: 15px;
							font-weight: bold;
							margin-bottom: 6px;
						}
						.tag-key {
							color: #666666;
							font-size: 12px;
						}
					}
				}
			}
		}
	}
}
</style>
