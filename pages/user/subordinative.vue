<template>
	<view class="content">
		<view class="main">
			<view class="subordinative-list">
				<view class="list-item" v-for="(item,index) in subs" :key="index" >
					<view class="item-content" @click="show(index)">
						<!-- <view class="item"> -->
						<image class="item-avatar" :src="item.avatar" mode=""></image>
						<view class="item-name">{{item.user}} </view>
						<view class="item-creattime">{{item.creattime}}</view>
					</view>  
					<view   :class="item.show?'subitem active': 'subitem'" v-for="(item2,index2) in item.secondsubs" :key="index2">
						<view class="subitem-content">
							<image class="subitem-avatar" :src="item2.avatar" mode=""></image>
							<view class="subitem-name">{{item2.user}} </view>{{item2.show}}
							<view class="subitem-creattime">{{item2.creattime}}</view>
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
				subs: [{
						user: '陈某某',
						avatar: '/static/img/math.png',
						creattime: '2020-10-10 12:12:24',
						secondsubs: [{
							user: '陈某某',
							avatar: '/static/img/math.png',
							creattime: '2020-10-10 12:12:24',
						},{
							user: '李某某',
							avatar: '/static/img/math.png',
							creattime: '2020-10-10 12:12:24',
						}],
						show: false
					},
					{
						user: '李某某',
						avatar: '/static/img/math.png',
						creattime: '2020-10-10 12:12:24',
						secondsubs: [{
							user: '陈某某',
							avatar: '/static/img/math.png',
							creattime: '2020-10-10 12:12:24',
						}],
						show: false
					},
					{
						user: '张某某',
						avatar: '/static/img/math.png',
						creattime: '2020-10-10 12:12:24',
						secondsubs: [{
							user: '陈某某',
							avatar: '/static/img/math.png',
							creattime: '2020-10-10 12:12:24',
						}],
						show: false
					},
					{
						user: '刘某某',
						avatar: '/static/img/math.png',
						creattime: '2020-10-10 12:12:24',
						secondsubs: [{
							user: '陈某某',
							avatar: '/static/img/math.png',
							creattime: '2020-10-10 12:12:24',
						}],
						show: false
					}
				]
			}
		},
		onLoad() {
		},
		methods: {
			show(index) {
				this.subs[index].show = !this.subs[index].show
					console.log(this.subs[index].show)
			}
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

		.subordinative-list {
			.list-item {
				.item-content {
					display: flex;
					align-items: center;
					justify-content: center;
					margin: 10px 0;
				}
				.item-avatar {
					width: 35px;
					height: 35px;
					border-radius: 50%;
					background-color: #eee;
				}
				.item-name {
					padding: 5px 8px;
					margin: 0 10px;
					font-size: 14px;
					border-radius: 8px;
					background-color: #FFFAF6;
				}
				.item-creattime {
					padding: 5px 8px;
					margin: 0 8px;
					font-size: 14px;
					border-radius: 8px;
					background-color: #FFFAF6;
				}
				.subitem {
					display: none;
					padding: 0  0 0 30px;
					font-size: 12px; 
					.subitem-content {
						@extend .item-content;
						.subitem-avatar {
							@extend .item-avatar;
							width: 30px;
							height: 30px;
						}
						.subitem-name {
							@extend .item-name;
							font-size: 12px;
						}
						.subitem-creattime {
							@extend .item-creattime;
							font-size: 12px;
						}
					}
				}
				.active {
					display: block;
				}
			}
		}
	}
</style>
