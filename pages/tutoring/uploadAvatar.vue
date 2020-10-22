<template>
	<view class="content">
		<view class="upload-wrapper">
			<view class="upload" @click="getPhoto">
				<!-- <image src="avatar" mode=""></image> -->
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
				avatar: ''
			};
		},
		onLoad() {
			this.avatar = uni.getStorageSync("personarData") || "";
		},
		methods: {

			getPhoto() {
				uni.chooseImage({
					count: 1,
					success(res) {
						console.log(res);
						if (res.tempFilePaths.length > 0) {
							let filePath = res.tempFilePaths[0]
							console.log("sdnfl")
							//进行上传操作

							// // promise方式
							// const result = await uniCloud.uploadFile({
							// 	filePath: filePath,
							// 	cloudPath: 'a.jpg',
							// 	onUploadProgress: function(progressEvent) {
							// 		console.log(progressEvent);
							// 		var percentCompleted = Math.round(
							// 			(progressEvent.loaded * 100) / progressEvent.total
							// 		);
							// 	}
							// });

							// callback方式，与promise方式二选一即可
							uniCloud.uploadFile({
								filePath: filePath,
								cloudPath: 'a.jpg',
								onUploadProgress: function(progressEvent) {
									console.log(progressEvent);
									var percentCompleted = Math.round(
										(progressEvent.loaded * 100) / progressEvent.total
									);
								},
								success() {},
								fail() {},
								complete() {}
							});

						}
					}
				});
			},
			save() {
				uni.setStorageSync("personalData", this.avatar);
				console.log(this.avatar)
			}
		},

	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		margin-top: 15px;
		font-size: 13px;
		color: #333333;

		.upload-wrapper {

			display: flex;
			justify-content: center;
			padding: 20px 0;

			.upload {
				width: 130px;
				height: 130px;
				color: #d9d9d9;
				transition: color .25s;
				position: relative;
				cursor: pointer;
				overflow: hidden;
				border-radius: 6px;
				border: 1px dashed #d9d9d9;
			}



			.upload::before {
				content: '';
				position: absolute;
				left: 50%;
				top: 50%;
				width: 40px;
				margin-left: -20px;
				margin-top: -2.5px;
				border-top: 2px solid #d9d9d9;
			}

			.upload::after {
				content: '';
				position: absolute;
				left: 50%;
				top: 50%;
				height: 40px;
				margin-left: -2px;
				margin-top: -20px;
				border-left: 2px solid #d9d9d9;
			}

			.upload:hover {
				border-color: #00e496;


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
