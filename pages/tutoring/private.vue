<template>
  <view class="content">
    <view class="image-wrapper">
      <text class="text-bg">完善个人资料</text>
      <image
        class="image-bg"
        type=""
        src="~/static/img/tutoring_bg.png"
      ></image>
    </view>
    <view class="main">
      <form class="form" @submit="save">
        <view class="form-wrapper">
          <!-- <form class="form"> -->
          <view class="uni-form-item uni-column">
            <view class="title">您的称呼？（*必填）</view>
            <view class="item item-name">
              <input
                class="name-input"
                name="name"
                value="form.name"
                v-model="form.name"
                placeholder="请输入您的姓名"
              />
            </view>
          </view>
          <view class="uni-form-item uni-column">
            <view class="title">选择身份</view>
            <view class="item item-identity" name="identity">
              <view>
                <button
                  :class="
                    this.form.identity == '大学生'
                      ? ' big-radio-button active'
                      : 'big-radio-button'
                  "
                  type="default"
                  size="mini"
                  @click="change('大学生')"
                >
                  <text>大学生</text>
                </button>
              </view>
              <view>
                <button
                  :class="
                    this.form.identity == '白领兼职'
                      ? ' big-radio-button active'
                      : 'big-radio-button'
                  "
                  type="default"
                  size="mini"
                  @click="change('白领兼职')"
                >
                  <text>白领兼职</text>
                </button>
              </view>
              <view>
                <button
                  :class="
                    this.form.identity == '专职老师'
                      ? ' big-radio-button active'
                      : 'big-radio-button'
                  "
                  type="default"
                  size="mini"
                  @click="change('专职老师')"
                >
                  <text>专职老师</text>
                </button>
              </view>
              <view>
                <button
                  :class="
                    this.form.identity == '在校老师'
                      ? ' big-radio-button active'
                      : 'big-radio-button'
                  "
                  type="default"
                  size="mini"
                  @click="change('在校老师')"
                >
                  <text>在校老师</text>
                </button>
              </view>
              <view>
                <button
                  :class="
                    this.form.identity == '退休老师'
                      ? ' big-radio-button active'
                      : 'big-radio-button'
                  "
                  type="default"
                  size="mini"
                  @click="change('退休老师')"
                >
                  <text>退休老师</text>
                </button>
              </view>
            </view>
						<view class="tips-wrapper">
							
            <view
              class="tips"
              v-if="
                this.form.identity == '专职老师' ||
                this.form.identity == '在校老师' ||
                this.form.identity == '退休老师'
              "
            >
              <icon class="tips-icon" type="" size="26" />
              <text>您的资料将受到保密，只有会员能够查看</text>
            </view>
						</view>
          </view>
          <view class="uni-form-item uni-column">
            <view class="title">教龄</view>
            <view class="item item-teachtime">
              <button
                class="count-button"
                type="default"
                @click="reduce('teachtime')"
              >
                -
              </button>
              <text class="item-teachtime-text">{{ form.teachtime }}年</text>
              <button
                class="count-button"
                type="default"
                @click="add('teachtime')"
              >
                +
              </button>
            </view>
          </view>
          <view class="uni-form-item uni-column">
            <view class="title">性别</view>

            <view class="item item-sex">
              <!-- <label> -->
              <button
                :class="
                  this.form.sex == '男'
                    ? ' radio-button active'
                    : 'radio-button'
                "
                @click="change('男')"
              >
                男
              </button>
              <!-- </label> -->
              <!-- <label> -->
              <button
                :class="
                  this.form.sex == '女'
                    ? ' radio-button active'
                    : 'radio-button'
                "
                @click="change('女')"
              >
                女
              </button>
              <!-- </label> -->
            </view>
          </view>
          <view class="uni-form-item uni-column">
            <view class="title">年龄</view>
            <view class="item item-age">
              <button
                class="count-button"
                type="default"
                @click="reduce('age')"
              >
                -
              </button>
              <text class="item-age-text">{{ form.age }}岁</text>
              <button class="count-button" type="default" @click="add('age')">
                +
              </button>
            </view>
          </view>
          <view class="uni-form-item uni-column">
            <view class="title">是否有教师资格证</view>
            <view class="item item-certificate">
              <button
                :class="
                  this.form.certificate == '是'
                    ? ' radio-button active'
                    : 'radio-button'
                "
                type="default"
                @click="change('是')"
              >
                是
              </button>
              <button
                :class="
                  this.form.certificate == '否'
                    ? ' radio-button active'
                    : 'radio-button'
                "
                type="default"
                @click="change('否')"
              >
                否
              </button>
            </view>
          </view>
        </view>
        <view class="uni-btn-v">
          <button class="submitButton" type="default" form-type="submit">
            确认
          </button>
        </view>
      </form>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        identity: "大学生",
        teachtime: 5,
        sex: "男",
        age: 20,
        certificate: "是",
        vipview: false,
      },
    };
  },
  onLoad() {
    if (this.form.identity == "专职老师") {
    }
  },
  methods: {
    //选择身份、性别、是否有教师资格证
    change(data) {
      if (data == "大学生") {
        this.form.identity = "大学生";
        this.form.vipview = false;
        console.log(this.form.identity);
      }
      if (data == "白领兼职") {
        this.form.identity = "白领兼职";
        this.form.vipview = false;
        console.log(this.form.identity);
      }
      if (data == "专职老师") {
        this.form.identity = "专职老师";
        this.form.vipview = true;
        console.log(this.form.identity);
      }
      if (data == "在校老师") {
        this.form.identity = "在校老师";
        console.log(this.form.identity);
      } 
      if (data == "退休老师") {
        this.form.identity = "退休老师";
        this.form.vipview = true;
        console.log(this.form.identity);
      }
      if (data == "男") {
        this.form.sex = "男";
        this.form.vipview = true;
        console.log(this.form.sex);
      }
      if (data == "女") {
        this.form.sex = "女";
        console.log(this.form.sex);
      }

      if (data == "是") {
        this.form.certificate = "是";
        console.log(this.form.certificate);
      }
      if (data == "否") {
        this.form.certificate = "否";
        console.log(this.form.certificate);
      }
    },
    // 数量加  教龄增  年龄增
    add(type) {
      if (type == "teachtime") {
        this.form.teachtime++;
      }
      if (type == "age") {
        this.form.age++;
      }
    },
    //数量减 教龄减  年龄减
    reduce(type) {
      if (type == "teachtime") {
        this.form.teachtime--;
      }
      if (type == "age") {
        this.form.age--;
      }
    },
    save() {
      if (this.form.name == "") {
				uni.showToast({
				    title: '请填写姓名',
						icon: 'none',
				    duration: 2000
				});
        return;
      }
      console.log(this.form);
      uni.setStorageSync("private", this.form);
      // uni.navigateTo({
      // 	url: './'
      // })
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
		margin-top: 15px;
		width: 100%;
		font-size: 15px;
		background-color: #F2F2F2;

		.image-wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 175px;
			background-color: #00e496;
			.text-bg {
				font-size: 24px;
				color: #fff;
				letter-spacing: 3px;
				}
			.image-bg {
				width: 140px;
				height: 102px;
			}
		}
		.main {
			padding: 0 15px;
			height: calc(100% - 200px);
			margin-top: -30px;

			.form-wrapper {
				padding: 10px 0 10px 25px;
				background-color: #FFFFFF;
				border-radius: 8px;

				.uni-form-item {
					padding-bottom: 20px;

					.title {
						padding: 10px 0;
						font-weight: 700;
						color: #333333;
					}

					.item {
						display: flex;
						align-items: center;
					}

					.item-name {
						border-bottom: 1px solid #f2f3f5;

						.name-input {
							padding: 8px;
							font-size: 13px;
						}
					}

					.item-identity {
						flex-wrap: wrap;
						display: flex;
					}
						
					.tips-wrapper {
						padding-right: 25px;
						padding-top: 10px;
						.tips {
							display: flex;
							align-items: center;
							padding: 5px 10px;
							font-size: 13px;
							color: #fff;
							background-color: #00e496;
							border-radius: 8px;
							box-shadow: rgba(0,0,0,.2)  0 1px 5px 0px;
						}
					}
					
					.item-teachtime {
						.item-teachtime-text {
							padding: 0 30px;
							font-size: 18px;
							color: #333333;
						}
					}

					.item-age {
						.item-age-text {
							padding: 0 30px;
							font-size: 18px;
							color: #333333;
						}
					}

				}
			}

			.submitButton {
				margin: 20px 0;
				font-size: 15px;
				color: #fff;
				background-color: #00e496;
			}
		}
	}



	.count-button {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0;
		padding: 0;
		width: 19px;
		height: 19px;
		color: #00e496;
		font-size: 15px;
		font-weight: 700;
		background-color: #ECFBF6;
		border-radius: 50%;
	}

	.big-radio-button {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 4px;
		height: 32px;
		padding: 4px 10px;
		color: #999999;
		font-size: 13px;
		// font-weight: 700;
		border-radius: 2px;
	}
	.radio-button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 34px;
		height: 32px;
		margin: 5px;
		color: #999999;
		font-size: 13px;
		font-weight: 700;
		border-radius: 2px;

	}

	.active {
		color: #00e496;
		background-color: #ECFBF6;
	}
</style>
