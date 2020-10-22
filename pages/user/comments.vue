<template>
	<view class="content">
		<view class="main">
			<view class="comment-list">
				<view class="list-header">
					<view class="list-number">序号</view>
					<view class="list-content">评价内容</view>
				</view>
				<view class="list-item"  v-for="(item,index) in comments" :key="index">
					<view class="item-number">
						{{index + 1}}
					</view>
					<view class="item-content">
						<view class="observer">
							<image :src="item.avatar" mode=""></image>
							<text>{{item.user}}:</text>
							
						</view>
						{{item.comment}}
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
				comments: [
					{user:'陈某某',avatar: '/static/img/math.png',comment: '这个老师表现的不错'},
					{user:'李某某',avatar: '/static/img/math.png',comment: '这个老师表现的相当不错这个老师表现的相当不错这个老师表现的相当不错'},
					{user:'张某某',avatar: '/static/img/math.png',comment: '这个老师表现的灰常不错'},
					{user:'刘某某',avatar: '/static/img/math.png',comment: '这个老师表现的hin不错'}
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			}
	}
</script>

<style lang="scss" scoped>
	.content {
		// padding-bottom: 40px;
		width: 100%;
		// height: 100%;
		margin-top: 15px;
		font-size: 13px;
		.main {
			padding: 30px 15px;
			font-size: 14px;
		}
		.comment-list {
			
			// padding: 10px 0;
			border: 1px solid #F1F1F1;
			// border: 1px solid #21E1BF;
			.list-header {
				display: flex;
				align-items: center;
				// color: #00E394;
				// color: #21E1BF;
				font-weight: bold;
				// border-bottom: 1px solid #F1F1F1;
				.list-number {
					width: 50px;
					height: 40px;
					line-height: 40px;
					text-align: center;
					border-right: 1px solid #F1F1F1;
					// border-right: 1px solid #21E1BF;
					
				}
				.list-content {
					flex: 1;
					text-align: center;
					// border: 1px solid #F1F1F1;
					border-radius: 10px;
					font-size: 14px;
				}
			}
			.list-item {
				display: flex;
				align-items: center;
				border-top: 1px solid #F1F1F1;
				// border-top: 1px solid #21E1BF;
				.item-number {
					display: flex;
					align-items: center;
					justify-content: center;
					min-width: 50px;
				}
				.item-content {
					flex: 1;
					padding: 10px 20px;
					// min-height: 30px;
					vertical-align: middle;
					border-left: 1px solid #F1F1F1;
					// border-left: 1px solid #21E1BF;
					// vertical-align: middle;
					.observer {
						display: flex;
						align-items: center;
						font-size: 12px;
						image {
							width: 20px;
							height: 20px;
							margin: 5px;
							border-radius: 50%;
						}
					}
				}
			}
			
		}
		
		.button-wrapper {
			padding: 30px 0;
			.button {
				font-size: 16px;
				color: #FFFFFF;
				background-color: #00E496;
			}
		}
	}
</style>
