<template>
	<view class="content">
		<view class="main">
			<view class="cardnumber">
				<view class="cardnumber-text">银行卡号</view>
				<input class="cardnumber-input" type="number" v-model="cardnumber" value="cardnumber" placeholder="请输入银行卡号" maxlength=19/>
			</view>
			<view class="bankname">
				<view class="bankname-text">银行名称</view>
				<input class="bankname-input" type="text" v-model="bankname" value="bankname" placeholder="请输入银行名称" maxlength=19/>
			</view>
			<view class="accountname">
				<view class="accountname-text">开户名</view>
				<input class="accountname-input" type="text" v-model="accountname" value="accountname" placeholder="请输入开户名" maxlength=18/>
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
				cardnumber: '',
				bankname: '',
				accountname: ''
			}
		},
		onLoad() {
			const bankcard = uni.getStorageSync('bankcard') || '';
			if(bankcard){
				this.cardnumber = bankcard.cardnumber;
				this.bankname = bankcard.bankname;
				this.accountname = bankcard.accountname;
			}
		},
		methods: {
			save() {
				if (this.cardnumber == "") {
					uni.showModal({
						icon: 'none',
						title: '请输入银行卡号！',
						showCancel: false
					})
					return false;
				};
				if (this.bankname == "") {
					uni.showModal({
						icon: 'none',
						title: '请输入银行名称！',
						showCancel: false
					})
					return false;
				};
				if (this.accountname == "") {
					uni.showModal({
						icon: 'none',
						title: '请输入开户名！',
						showCancel: false
					})
					return false;
				};
				if (/[^\u4E00-\u9FA5]/g.test(this.accountname)) {
					uni.showModal({
						icon: 'none',
						title: '请输入正确的开户名！',
						showCancel: false
					})
					return false;
				};
				if (/[^\u4E00-\u9FA5]/g.test(this.accountname)) {
					uni.showModal({
						icon: 'none',
						title: '请输入正确的银行名称！',
						showCancel: false
					})
					return false;
				};
				if (/^([1-9]{1})(\d{14}|\d{18})$/.test(this.cardnumber) == false) {
					uni.showModal({
						icon: 'none',
						title: '请输入正确的银行卡号！',
						showCancel: false
					})
					return false;
				}        
								
				const bankcard = {
					cardnumber: this.cardnumber,
					bankname: this.bankname,
					accountname: this.accountname
				};
				uni.setStorageSync('bankcard', bankcard)
				console.log(bankcard)
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
		.cardnumber {
			display: flex;
			align-items: center;
			padding: 10px 0;
			border-bottom: 1px solid #F1F1F1;
			.cardnumber-text {
				width: 80px;
				padding: 0 10px;
				color: #333333;
			}
			.cardnumber-input {
				padding: 5px;
				// border: 1px solid #F1F1F1;
				border-radius: 10px;
				font-size: 14px;
			}
		}
		.bankname {
			@extend .cardnumber;
			.bankname-text {
				@extend .cardnumber-text;
			}
			.bankname-input {
				@extend .cardnumber-input;
			}
		}
		.accountname {
			@extend .cardnumber;
			.accountname-text {
				@extend .cardnumber-text;
			}
			.accountname-input {
				@extend .cardnumber-input;
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

