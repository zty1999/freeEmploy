<template>
	<view class="content">
		<view class="main">
			<view class="main-title">
					<text>家教</text>
					
				</view>
				<view class="list">
					<view class="list-item" v-for="(item,index) in list" :key="index">
						<view class="item-nav" >
							<image :src="item.image" mode=""></image>
							<text>{{item.title}}</text>
						</view>
						<view class="item-content-wrapper">
							<view :class="item2.check?'item-content active':'item-content'"  v-for="(item2,index2) in item.content" :key="index2" @click="choose(index,index2)">
								<image :src="item2.image"  mode=""></image>
								<text>{{item2.text}}</text>
							</view>
						</view>
					</view>
					
					
				</view>
			<view class="button-wrapper">
					<button class="button" type="default" @click="save">下一步</button>
			</view>
		</view>
		<!-- <tutor-main ></tutor-main> -->
		</view>
</template>

<script>
	import tutorMain from '@/components/tutorMain.vue'
	export default {
		components:{
			tutorMain
		},
		data() {
			return {
				list: [
					{
						title: '小学',
						image: '/static/img/small.png',
						content: [
							{check:false,image: '/static/img/english.png',activeImage: '/static/img/english.png',text: '英语'},
							{check:false,image: '/static/img/math.png',activeImage: '/static/img/math.png',text: '数学'},
							{check:false,image: '/static/img/composition.png',activeImage: '/static/img/composition.png',text: '作文'},
							{check:false,image: '/static/img/art3.png',activeImage: '/static/img/art3.png',text: '艺术'},
							{check:false,image: '/static/img/general.png',activeImage: '/static/img/general.png',text: '全科'},
						],
					},
					
					{
						title: '初中',
						image: '/static/img/middle.png',
						content: [
							{check:false,image: '/static/img/english.png',activeImage: '/static/img/english.png',text: '英语'},
							{check:false,image: '/static/img/math.png',activeImage: '/static/img/math.png',text: '数学'},
							{check:false,image: '/static/img/composition.png',activeImage: '/static/img/composition.png',text: '作文'},
							{check:false,image: '/static/img/Physics.png',activeImage: '/static/img/Physics.png',text: '物理'},
							{check:false,image: '/static/img/Chemistry.png',activeImage: '/static/img/Chemistry.png',text: '化学'},
							{check:false,image: '/static/img/art3.png',activeImage: '/static/img/art3.png',text: '艺术'},
							{check:false,image: '/static/img/general.png',activeImage: '/static/img/general.png',text: '全科'},
						],
					},
					{
						title: '高中',
						image: '/static/img/high.png',
						content: [
							{check:false,image: '/static/img/english.png',activeImage: '/static/img/english.png',text: '英语'},
							{check:false,image: '/static/img/math.png',activeImage: '/static/img/math.png',text: '数学'},
							{check:false,image: '/static/img/composition.png',activeImage: '/static/img/composition.png',text: '作文'},
							{check:false,image: '/static/img/Physics.png',activeImage: '/static/img/Physics.png',text: '物理'},
							{check:false,image: '/static/img/Chemistry.png',activeImage: '/static/img/Chemistry.png',text: '化学'},
							{check:false,image: '/static/img/Chemistry.png',activeImage: '/static/img/Chemistry.png',text: '政治'},
							{check:false,image: '/static/img/Chemistry.png',activeImage: '/static/img/Chemistry.png',text: '历史'},
							{check:false,image: '/static/img/Chemistry.png',activeImage: '/static/img/Chemistry.png',text: '生物'},
							{check:false,image: '/static/img/Chemistry.png',activeImage: '/static/img/Chemistry.png',text: '地理'},
							{check:false,image: '/static/img/art3.png',activeImage: '/static/img/art3.png',text: '艺术'},
							{check:false,image: '/static/img/general.png',activeImage: '/static/img/general.png',text: '全科'},
						],
					},
					{
						title: '艺术',
						image: '/static/img/art.png',
						content: [
							{check:false,image: '/static/img/english.png',activeImage: '/static/img/english.png',text: '英语'},
							{check:false,image: '/static/img/math.png',activeImage: '/static/img/math.png',text: '数学'},
							{check:false,image: '/static/img/composition.png',activeImage: '/static/img/composition.png',text: '作文'},
							{check:false,image: '/static/img/music.png',activeImage: '/static/img/music.png',text: '音乐'},
							{check:false,image: '/static/img/art3.png',activeImage: '/static/img/art3.png',text: '艺术'},
							{check:false,image: '/static/img/general.png',activeImage: '/static/img/general.png',text: '全科'},
							
						],
					},
				],
				currentIndex: [],
				chooseSubject: []
			}
		},
		onLoad() {
			console.log(this.list)
		},
		methods: {
			choose(index,index2) {
				this.list[index].content[index2].check = !this.list[index].content[index2].check
				// this.active = !this.active;
				// this.currentIndex.push(index)
				// var check = this.list[idx].check;
				// this.list.forEach(i=> {
				// 	// console.log(i)
					
				// 	i.content[index2].check = !i.content[index2].check
				// })
				// this.list[idx].check = check === true ? false : true;

				// this.chooseSubject.push([i].content[i].text)
			},
			save() {
				let scope = [];
				this.list.forEach(i=> {
					// console.log(i)
					i.content.forEach(v =>{
					if(v.check === true) {
						
						scope.push([{title: i.title,content: v.text}])
						}
					})
				})
				console.log(scope)
				uni.setStorageSync('teachScope',scope);
				// uni.navigateTo({
				// 	// url: './'
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		margin-top: 15px;
		width: 100%;
		.main {
			padding: 15px;
			.main-title {
				height: 44px;
				line-height: 44px;
				font-size: 14px;
				color: #FFA441;
				background-color: #FFFBF5;
				border-radius: 3px;
				text-align: center;
				letter-spacing: 2px;
				
			}
			.list {
				padding: 5px 0;
					.list-item {
						.item-nav {
							display: flex;
							align-items: center;
							height: 30px;
							width: 80px;
							margin: 10px 0;
							padding: 3px 5px;
							text-align: center;
							border-radius: 20px;
							color: #FFA441;
							background-color: #FFFBF5;
							image {
								width: 30px;
								height: 30px;
							}
							text {
								line-height: 30px;
								padding: 0 5px;
								
							}
						}
						.item-content-wrapper {
							display: flex;
							flex-wrap: wrap;
							.item-content {
								display: flex;
								flex-flow: column wrap;
								align-items: center;
								justify-content: center;
								margin: 4px;
								width: 78px;
								height: 78px;
								text-align: center;
								color: #656565;
								background-color: #F9F9F9;
								border-radius: 4px;
								image {
									width: 33px;
									height: 33px;
									
								}
							}
							.active {
								color: #FFA441;
								background-color: #FFFBF6;
							}
						}
						
					}
				}
				.button-wrapper {
					padding: 60px 0 15px;
					.button {
						font-size: 16px;
						color: #FFFFFF;
						background-color: #00e496;
					}
				}
			
		}

		}
</style>
