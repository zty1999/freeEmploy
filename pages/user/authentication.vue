<template>
	<view class="content">
		<view class="main">
			<view class="realname">
				<view class="realname-text">姓名</view>
				<input class="realname-input" type="text" v-model="realname" value="realname" placeholder="请输入真实姓名" maxlength=10/>
			</view>
			<view class="idcardNumber">
				<view class="idcardNumber-text">身份证号码</view>
				<input class="idcardNumber-input" type="text" v-model="idcardNumber" value="idcardNumbaer" placeholder="请输入18位身份证号码" maxlength=18/>
			</view>
			<view class="button-wrapper">
				<button class="button " @click="save" type="default">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				realname: '',
				idcardNumber: ''
			}
		},
		onLoad() {
			const authentication = uni.getStorageSync('authentication') || '';
			if(authentication){
				this.realname = authentication.realname;
				this.idcardNumber = authentication.idcardNumbaer;
			}
		},
		methods: {
			save() {
				if (this.realname == "") {
					uni.showModal({
						icon: 'none',
						title: '请输入真实姓名！',
						showCancel: false
					})
					return false;
				};
				if (this.idcardNumber == "") {
					uni.showModal({
						icon: 'none',
						title: '请输入身份证号码',
						showCancel: false
					})
					return false;
				};
				if (/[^\u4E00-\u9FA5]/g.test(this.realname)) {
					uni.showModal({
						icon: 'none',
						title: '暂只支持大陆二代身份证号实名认证，请输入中文',
						showCancel: false
					})
					return false;
				};
				//网上搜的身份证号码正则验证都是错的  这里先用最简单的
				if(/^\d{17}(\d|X|x)$/.test(this.idcardNumber) === false){
				    uni.showModal({
				    	icon: 'none',
				    	title: '身份证号填写有误',
							showCancel: false
				    })
				    return false;  
				} 				
				
				const authentication = {
					realname: this.realname,
					idcardNumbaer: this.idcardNumber
				};
				uni.setStorageSync('authentication', authentication)
				console.log(authentication)
				// uni.navigateTo({
				// 	url:'./user'
				// })
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
		.realname {
			display: flex;
			align-items: center;
			padding: 10px 0;
			border-bottom: 1px solid #F1F1F1;
			.realname-text {
				width: 80px;
				padding: 0 10px;
				color: #333333;
			}
			.realname-input {
				padding: 5px;
				// border: 1px solid #F1F1F1;
				border-radius: 10px;
				font-size: 14px;
			}
		}
		.idcardNumber {
			@extend .realname;
			.idcardNumber-text {
				@extend .realname-text;
			}
			.idcardNumber-input {
				@extend .realname-input;
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
