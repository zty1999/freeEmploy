<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		onLaunch: function() {
			let uniIdToken = uni.getStorageSync('uniIdToken')
			if (uniIdToken) {
				this.login(uni.getStorageSync('username'))
			}
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		methods: {
			...mapMutations(['login']),
		}
	}
</script>

<style lang="scss">
	/* 头条小程序需要把 iconfont 样式放到组件外 */
	@import "components/m-icon/m-icon.css";

	/*每个页面公共css */
	page {
		min-height: 100%;
		display: flex;
		font-size: 16px;
	}

	/* #ifdef MP-BAIDU */
	page {
		width: 100%;
		height: 100%;
		display: block;
	}

	swan-template {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* 原生组件模式下需要注意组件外部样式 */
	custom-component {
		width: 100%;
		min-height: 100%;
		display: flex;
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	page {
		min-height: 100vh;
	}

	/* #endif */

	/* 原生组件模式下需要注意组件外部样式 */
	m-input {
		width: 100%;
		/* min-height: 100%; */
		display: flex;
		flex: 1;
	}
	
	.uni-input-placeholder {
		color: rgba(191, 191, 191, 1);
	}
	.input-group {
		background-color: #ffffff;
		margin-top: 20px;
		position: relative;
	}
	
	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
		font-size: 18px;
		line-height: 40px;
	}

	.input-row .title {
		width: 100px;
		padding-left: 15px;
	}
	.btn-green {
		width: 90px;
		height: 34px;
		background: #00E496;
		border-radius: 4px;
		color: white;
		font-size: 14px;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn-light-green {
		width: 90px;
		height: 34px;
		background: #DEF7EE;
		border-radius: 4px;
		color: #00E496;
		font-size: 14px;
		font-weight: bold;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	uni-button:after {
		border: 0;
	}
	uni-image {
		width: 100%;
		height: 100%;
	}
	uni-page-head .uni-page-head {
		padding: 15px 3px;
		height: 60px;
	}
    .uni-app--showtabbar uni-page-wrapper:after {
        height: 80rpx;
        height: calc(80rpx + constant(safe-area-inset-bottom));
        height: calc(80rpx + env(safe-area-inset-bottom));
    }
    uni-tabbar {
        .uni-tabbar { // tab 背景
            .uni-tabbar-border { // tabBar 上边框
                border: 0;
            }
            .uni-tabbar__bd { // tabBar 单项
                height: 80px !important;
                .uni-tabbar__icon { // tabBar 图标
                    margin-bottom: 5px;
                }
            }
			.uni-tabbar-border {
				background-color: #F2F2F2 !important;
			}
        }
        .uni-tabbar~.uni-placeholder {
            height: 80rpx;
        }
    }
</style>
