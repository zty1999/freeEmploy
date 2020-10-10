<template>
	<view class="category-container">
		<view class="category-btn" @click="goRegister(1)">雇主注册</view>
		<view class="category-btn" @click="goRegister(2)">家教注册</view>
		<view class="category-btn" @click="goRegister(1)">雇主注册</view>
		<view class="category-btn" @click="goRegister(1)">雇主注册</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goRegister (type) {
				uni.reLaunch({
					url: '../register/register?type=' + type,
				});
			}
		}
	}
</script>

<style lang="scss">
.category-container {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	flex-direction: row;
	padding: 15px;
	box-sizing: border-box;
	flex-wrap: wrap;
	.category-btn {
		background: rgba(0,201,122, .7);
		color: white;
		height: 105px;
		width: 50%;
		border-radius: 4px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 22px;
		margin-bottom: 50px;
		box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.02);
	}
}
</style>
