<template>
	<view class="content">
		<view class="main">
			<view class="text-area-wrapper">
				<textarea class="text-area" value="" placeholder="添加个性介绍,展现你的独特之处" v-model="personalData" maxlength="150" />
		  </view>
			<view class="text-count-wrapper">
				<text class="text-count">{{ personalData.length }}/150</text>
			</view>
		</view>
		<view class="save-button">
			<button @click="save" class="button" type="default">确认</button>
		</view>
		</view>
	</view>
</template>

<script>
export default {
		data() {
			return {
				personalData: ''
			};
		},
		onLoad() {
			this.personalData = uni.getStorageSync("personarData") || "";
		},
		methods:{
			save() {
				uni.setStorageSync("personalData",this.personalData);
				console.log(this.personalData)
			}
		}
}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		margin-top: 15px;
		font-size: 13px;
		color: #333333;
		.main {
			padding: 10px 20px;
			.text-area-wrapper {
				width: 100%;
				display: flex;
				justify-content: center;
				.text-area {
					width: 90%;
					height: 200px;
					padding: 10px;
					border-radius: 4px;
					border: 1px solid #00e496;
				}				
			}
			.text-count-wrapper {
			  display: flex;
				justify-content: flex-end;
			  padding: 10px 20px;
			  .text-count {
			    flex: 1;
			    text-align: right;
			    font-size: 13px;
			  }
			}
		}
		.save-button {
			padding: 20px;
			.button {
				height: 44px;
				line-height: 44px;
				color: #FFFFFF;
				font-size: 15px;
				letter-spacing: 3px;
				background-color: #00e496;
			}
		}
		
		
		}
</style>
