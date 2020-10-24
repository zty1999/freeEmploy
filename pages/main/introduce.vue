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
			<view class="flex">
				<view class="ex-img-box">
					<image src="../../static/img/tag.png" mode=""></image>
				</view>
				<view>工作经历：</view>
			</view>
			<view class="flex ex-name">
				<view class="title">
					家教
				</view>
				<view class="time">
					2018.10-2020.01
				</view>
			</view>
			<view class="ex-desc">
				给高三学生补习，成绩提高显著
			</view>
		</view>
		<view class="container">
			<view class="duty-box">
				<view class="flex">
					<view class="ex-img-box">
						<image src="../../static/img/tag.png" mode=""></image>
					</view>
					<view>个性标签：</view>
				</view>
				<view class="tag">
					<view class="btn">热情</view>
					<view class="btn">负责</view>
					<view class="btn">专业</view>
				</view>
			</view>
			<view class="duty-box intro-box">
				<view class="flex">
					<view class="ex-img-box">
						<image src="../../static/img/tag.png" mode=""></image>
					</view>
					<view>自我介绍</view>
				</view>
				<view class="desc">
					我是江西人，大学师范专业毕业，目前在重点学校任教。
				</view>
			</view>
			<view class="duty-box intro-box">
				<view class="flex">
					<view class="ex-img-box">
						<image src="../../static/img/tag.png" mode=""></image>
					</view>
					<view>教育经历</view>
				</view>
				<view class="edu-intro">
					<view class="title">
						江西农业大学
					</view>
					<view class="time">
						毕业时间：2003.06
					</view>
				</view>
				<view class="desc">
					毕业于江西师范大学，在南昌3中当过数学老师毕业于江西 毕业于江西师范师范大学，在南昌3中当过数学老师
				</view>
			</view>
			<view class="duty-box intro-box">
				<view class="flex">
					<view class="ex-img-box">
						<image src="../../static/img/tag.png" mode=""></image>
					</view>
					<view>图片展示</view>
				</view>
				<view class="img-box">
					<view class="img">
						<image src="../../static/img/tech.png" mode=""></image>
					</view>
					<view class="img">
						<image src="../../static/img/tech.png" mode=""></image>
					</view>
					<view class="img">
						<image src="../../static/img/tech.png" mode=""></image>
					</view>
				</view>
			</view>
			<view class="duty-box comment-box">
				<view class="flex marB20">
					<view class="ex-img-box">
						<image src="../../static/img/tag.png" mode=""></image>
					</view>
					<view>评价</view>
				</view>
				<view class="comment-list">
					<view class="img">
						<image src="../../static/img/tech.png" mode=""></image>
					</view>
					<view class="comment">
						<view>张小玲</view>
						<view class="time">2020.3.20</view>
						<view class="desc">
							老师认真负责，风趣幽默，讲解题目仔细易懂，学习 成绩有显著提高。
						</view>
					</view>
				</view>
				<view class="comment-list">
					<view class="img">
						<image src="../../static/img/tech.png" mode=""></image>
					</view>
					<view class="comment">
						<view>张小玲</view>
						<view class="time">2020.3.20</view>
						<view class="desc">
							老师认真负责，风趣幽默，讲解题目仔细易懂，学习 成绩有显著提高。
						</view>
					</view>
				</view>
			</view>
			<view class="duty-box process">
				<view class="title">
					服务流程
				</view>
				<image src="../../static/img/process.png" mode=""></image>
			</view>
		</view>
		<view class="bottom-box">
			<view class="share-icon">
				<view class="share-img">
					<image src="../../static/img/share.png" mode=""></image>
				</view>
				<view class="">分享</view>
			</view>
			<view class="btn-group">
				<view class="btn-light-green">关注</view>
				<view class="btn-green">预约面试</view>
			</view>
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
	.marB20 {
		margin-bottom: 20px;
	}
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
	.flex {
		display: flex;
		align-items: center;
	}
	.ex-img-box {
		width: 15px;
		height: 15px;
		margin-right: 12px;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.experience-box {
		margin-top: 60px;
		padding: 15px;
		font-size: 15px;
		font-weight: bold;
		color: #333333;
		.ex-name {
			margin: 15px 0;
		}
		.title {
			font-size: 14px;
			margin-left: 27px;
		}
		.time {
			color: #999999;
			font-weight: normal;
			font-size: 12px;
			margin-left: 20px;
		}
		.ex-desc {
			font-size: 13px;
			font-weight: normal;
			margin-left: 27px;
		}
	}
	.container {
		padding-top: 10px;
		background: #F2F2F2;
		.duty-box {
			padding: 15px;
			background: white;
			font-weight: bold;
			color: #333333;
			.tag {
				display: flex;
				flex-direction: row;
				margin: 15px 0 15px 27px;
				.btn {
					width: 56px;
					height: 25px;
					background: #E8FCF5;
					border-radius: 2px;
					color: #00E294;
					font-size: 12px;
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 8px;
				}
			}
		}
		.intro-box {
			margin-top: 10px;
			.desc {
				color: #333333;
				font-size: 13px;
				font-weight: normal;
				margin: 15px 0 15px 27px;
			}
			.edu-intro {
				display: flex;
				margin-left: 27px;
				font-size: 15px;
				flex-direction: row;
				justify-content: space-between;
				margin-top: 10px;
				.time {
					font-size: 14px;
				}
				.desc {
					margin: 10px 0 10px 27px;
				}
			}
			.img-box {
				display: flex;
				flex-direction: row;
				margin: 10px 0;
				.img {
					width: 72px;
					height: 66px;
					border-radius: 4px;
					margin-right: 10px;
					img {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.comment-box {
			margin-top: 10px;
			.comment-list {
				display: flex;
				margin-bottom: 25px;
				.img {
					width: 45px;
					height: 45px;
					border-radius: 50%;
					img {
						width: 100%;
						height: 100%;
					}
				}
				.comment {
					flex: 1;
					margin-left: 10px;
				}
				.time {
					color: #999999;
					font-size: 12px;
					margin: 5px 0;
					font-weight: 400;
				}
				.desc {
					font-weight: 400;
					font-size: 13px;
					margin-top: 10px;
				}
			}
		}
		.process {
			padding: 15px 15px 65px 15px;
			.title {
				width: 100%;
				text-align: center;
				margin: 25px 0px;
				font-size: 15px;
				font-weight: bold;
				color: #343434;
			}
			uni-image {
				height: 245px;
			}
		}
	}
	.bottom-box {
		position: fixed;
		bottom: 0;
		padding: 15px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
		box-sizing: border-box;
		align-items: center;
		background: white;
		.share-icon {
			display: flex;
			flex-direction: row;
			align-items: center;
			font-weight: bold;
			color: #333333;
			font-size: 14px;
			.share-img {
				width: 18px;
				height: 18px;
				margin-right: 13px;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.btn-group {
			display: flex;
			flex-direction: row;
			.btn-light-green {
				margin-right: 10px;
			}
		}
	}
}
</style>
