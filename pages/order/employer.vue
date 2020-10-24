<template>
  <view class="content">
    <view class="navbar">
      <view
        :class="currentIndex === index ? 'navbar-item active' : 'navbar-item'"
        v-for="(item, index) in ['待应约', '待确认', '合适', '不合适']"
        :key="index"
        @click="navControl(index)"
      >
        <text>{{ item }}</text>
        <text class="border-box"></text>
      </view>
    </view>

    <view class="main">
      <!-- 待应约 -->
      <view class="list-wrapper" v-if="currentIndex == 0">
        <view class="list">
          <view v-for="item in 4" :key="item">
            <view class="list-item-wrapper">
              <view class="list-item" title="">
                <view class="item-content">
                  <view class="content-left">
                    <image
                      class="image"
                      src="../../static/img/accountHL.png"
                    ></image>
                  </view>
                  <view class="content-right">
                    <view class="content-right-title">
                      <text>张老师|女|实名认证|教师资格证</text>
                    </view>
                    <view class="content-right-introduce">
                      <view class="introduce-item identity">
                        <text>大学生</text>
                        <text>身份</text>
                      </view>
                      <view class="introduce-item age">
                        <text>25岁</text>
                        <text>年龄</text>
                      </view>
                      <view class="introduce-item teachtime">
                        <text>三年</text>
                        <text>教龄</text>
                      </view>
                    </view>
                    <view class="content-right-teachscope">
                      <text>小学全科|初中数学、物理、化学|高中数学</text>
                    </view>

                    <view class="content-right-tags">
                      <text class="tags-item bad">不适合</text>
                      <text class="tags-item good">应约并联系</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- 待确认 -->
      <view class="list-wrapper" v-if="currentIndex == 1">
        <view class="list">
          <view v-for="item in 4" :key="item">
            <view class="list-item-wrapper">
              <view class="list-item" title="">
                <view class="item-content">
                  <view class="content-left">
                    <image
                      class="image"
                      src="../../static/img/accountHL.png"
                    ></image>
                  </view>
                  <view class="content-right">
                    <view class="content-right-title">
                      <text>张老师|女|实名认证|教师资格证</text>
                    </view>
                    <view class="content-right-introduce">
                      <view class="introduce-item identity">
                        <text>大学生</text>
                        <text>身份</text>
                      </view>
                      <view class="introduce-item age">
                        <text>25岁</text>
                        <text>年龄</text>
                      </view>
                      <view class="introduce-item teachtime">
                        <text>三年</text>
                        <text>教龄</text>
                      </view>
                    </view>
                    <view class="content-right-teachscope">
                      <text>小学全科|初中数学、物理、化学|高中数学</text>
                    </view>

                    <view class="content-right-tags">
                      <text class="tags-item good">合适</text>
                      <text class="tags-item bad">不合适</text>
                    </view>
                    <view class="content-right-phone">
                      <text>联系电话：13888888888</text>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- 合适 -->
      <view class="list-wrapper" v-if="currentIndex == 2">
        <view class="list">
          <view v-for="item in 4" :key="item">
            <view class="list-item-wrapper">
              <view class="list-item" title="">
                <view class="item-content">
                  <view class="content-left">
                    <image
                      class="image"
                      src="../../static/img/accountHL.png"
                    ></image>
                  </view>
                  <view class="content-right">
                    <view class="content-right-title">
                      <text>张老师|女|实名认证|教师资格证</text>
                    </view>
                    <view class="content-right-introduce">
                      <view class="introduce-item identity">
                        <text>大学生</text>
                        <text>身份</text>
                      </view>
                      <view class="introduce-item age">
                        <text>25岁</text>
                        <text>年龄</text>
                      </view>
                      <view class="introduce-item teachtime">
                        <text>三年</text>
                        <text>教龄</text>
                      </view>
                    </view>
                    <view class="content-right-teachscope">
                      <text>小学全科|初中数学、物理、化学|高中数学</text>
                    </view>
                  </view>
                </view>
                <view class="item-bottom">
                  <view v-if="comment.length === 0" class="incomment">
                    <button
                      class="tocomment"
                      v-if="showinput === false"
                      @click="showInput"
                    >
                      进行评价
                    </button>
                    <view v-if="showinput" class="input-wrapper">
                      <textarea
                        class="input"
                        type="text"
                        placeholder="请输入评论"
                        value="inputValue"
                        v-model="inputValue"
                      ></textarea>
                      <button @click="haveComments" class="submit-button">
                        完成评论
                      </button>
                    </view>
                  </view>
                  <view v-if="comment.length !== 0" class="comments">
                    <text>{{ comment }}</text>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>

      <!-- 不合适 -->
      <view class="list-wrapper" v-if="currentIndex == 3">
        <view class="list">
          <view v-for="item in 4" :key="item">
            <view class="list-item-wrapper">
              <view class="list-item" title="">
                <view class="item-content">
                  <view class="content-left">
                    <image
                      class="image"
                      src="../../static/img/accountHL.png"
                    ></image>
                  </view>
                  <view class="content-right">
                    <view class="content-right-title">
                      <text>张老师|女|实名认证|教师资格证</text>
                    </view>
                    <view class="content-right-introduce">
                      <view class="introduce-item identity">
                        <text>大学生</text>
                        <text>身份</text>
                      </view>
                      <view class="introduce-item age">
                        <text>25岁</text>
                        <text>年龄</text>
                      </view>
                      <view class="introduce-item teachtime">
                        <text>三年</text>
                        <text>教龄</text>
                      </view>
                    </view>
                    <view class="content-right-teachscope">
                      <text>小学全科|初中数学、物理、化学|高中数学</text>
                    </view>
                  </view>
                </view>
              </view>
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
        // 导航默认选型
        currentIndex: 0,
        // // 控制显示进行评论按钮
        // incomment: true,
        // 控制显示输入评论板块
        showinput: false,
        // 输入的评论
        comment: '',
        inputValue: ''
    };
  },
  methods: {
    // 导航控制
    navControl(index) {
        this.currentIndex = index;
    },
    // 显示输入框
    showInput() {
        this.showinput = true;
    },
    // 提交评论
    haveComments() {
        this.comment = this.inputValue
    },
  },
};
</script>
<style lang="scss" scoped>
page {
  background-color: #f9f9f9;
}

.content {
  padding-bottom: 20px;
  width: 100%;
  height: calc(100% - 44px);
  margin-top: 15px;
  font-size: 13px;
  color: #333333;
  background-color: #f9f9f9;

  .navbar {
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    font-size: 14px;
    // letter-spacing: 3px;
    color: #656565;
    background-color: #ffffff;

    .navbar-item {
      flex: 1;
      text-align: center;

      text {
        display: block;
        height: 34px;
        line-height: 34px;
        margin: 0 10px;
        font-weight: 700;
      }

      .border-box {
        width: 20px;
        height: 1px;
        margin: 0 auto;
        border-top: 3px solid transprants;
        border-radius: 10px 10px 10px 10px;
      }
    }

    .active {
      color: #00e394;

      text {
        font-size: 16px;
      }
      .border-box {
        background-color: #00e395;
        border-top: 3px solid #00e395;
      }
    }
  }

  .main {
    padding: 5px 15px;
    margin: 35px 0;
    .list-wrapper {
				width: 100%;

				.list {
					.list-item-wrapper {

						.list-item {
							padding: 10px 10px;
							margin: 8px 0;
							border-radius: 6px;
							background-color: #FFFFFF;
							box-shadow: rgba(0, 0, 0, .2) 0 0 0 0;

							.item-content {
								display: flex;
								align-items: center;
								justify-content: space-between;

								.content-left {
									padding-right: 22px;

									.image {
										width: 110px;
										height: 125px;
									}
                                    img {
                                        width: 100%;
                                        height: 100%;
                                    }
								}

								.content-right {
									.content-right-title {
										padding: 5px 0;
										font-weight: 700;
										font-size: 14px;
										letter-spacing: 1px;
									}

									.content-right-introduce {
										display: flex;
										// justify-content: center;
										padding: 3px 0;
										font-size: 12px;

										.introduce-item {
											flex: 1;
											display: flex;
											flex-flow: column;
											text-align: center;
											padding: 0 5px;
											color: #999999;
										}
									}

									.content-right-teachscope {
										padding: 3px 0;
										font-size: 12px;
										color: #999999;
									}

									.content-right-tags {
										display: flex;
										align-items: center;
										font-weight: 700;
										font-size: 12px;

										.tags-item {
											margin: 5px 3px;
											padding: 5px 10px;
											border-radius: 2px;
										}

										.bad {
											color: #FF5B5B;
											background-color: #FFEDED;
										}

										.good {
											color: #FFFFFF;
											background-color: #FF5B5B;
										}

									}

									.content-right-phone {
										padding: 5px;
										color: #999999;
									}
								}

							}

							.item-bottom {
								.tocomment {
									margin: 3px 0;
									font-size: 14px;
									color: #FFFFFF;
									background-color: #00E596;
									letter-spacing: 2px;
								}

								.input-wrapper {
									.input {
										margin: 5px 0;
										padding: 5px 10px;
										height: 60px;
										font-size: 14px;
										border: 1px solid #eeeeee;
										border-radius: 5px;
										box-shadow: inset rgba(0, 0, 0, .2) 0 0 1px 0px;
									}

									.submit-button {
										width: 70px;
										padding: 0;
										font-size: 14px;
										margin: 0 0 0 auto;
										color: #FFFFFF;
										background-color: #00E596;
									}
								}

								.comments {
									padding: 5px;
									margin: 5px;
									border-radius: 5px;
									background-color: #FFFBF6;
									box-shadow: inset rgba(0, 0, 0, .2) 0 0 1px 0px;
								}
							}
						}

					}
				}
	}
  }
}
</style>
