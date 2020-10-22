<template>
	<view class="content">
		<view class="main">
			<view class="code">
				<input class="code-input" type="text" v-model="invitationCode" value="invitationCode" placeholder="请输入邀请码" />
			</view>
			<view class="button-wrapper">
				<button class="button " @click="save" type="default">保存</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				invitationCode: ''
			}
		},
		onLoad() {
			this.invitationCode = uni.getStorageSync('invitationCode') || '';
		},
		methods: {
			save() {
				if (this.invitationCode == "") {
					uni.showModal({
						icon: 'none',
						title: '请输入邀请码！',
						showCancel: false
					})
					return false;
				};
			
				if (!/^([0-9a-zA-Z]){4,6}$/.test(this.invitationCode)) {
					uni.showModal({
						icon: 'none',
						title: '请输入正确的邀请码！',
						showCancel: false
					})
					return false;
				};
				uni.setStorageSync('invitationCode', this.invitationCode)
				console.log(this.invitationCode)
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
		.code {
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 30px;
			.code-input {
				padding: 10px;
				text-align: center;
				border: 1px solid #F1F1F1;
				border-radius: 8px;
			}
			.code-input:focus {
				border: 1px solid #00E496;
			}
			.code-input:hover {
				border: 1px solid #00E496;
				// box-shadow: 0 0 8px #00E496; 
			}
		}
		.button-wrapper {
			padding: 50px 0;
			.button {
				font-size: 16px;
				color: #FFFFFF;
				background-color: #00E496;
			}
		}
	}
</style>

