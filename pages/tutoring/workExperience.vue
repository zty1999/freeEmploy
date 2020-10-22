<template>
	<view class="content">
		<view class="main">
			<view class="" v-for="(item, index) in work" :key="index">
				<view class="delete-button-wrapper">
					<button @click="deleted(index)" size="mini" class="delete-button">
						删除
					</button>
				</view>
				<!-- 工作经历 -->
				<view class="work-experience">
					<ul class="work-list">
						<li class="work-item">
							<view class="item-title"> 标题 </view>
								<input class="title-input" type="text" value="" name="title" placeholder="请输入您的经验标题" v-model="item.title" />
						</li>
						<li class="work-item">
							<view class="item-time"> 时间 </view>
							<view class="time-select">
								<picker class="item-picker" mode="date" fields="month" :value="item.time.starttime" :start="startDate" :end="endDate"
								 name="starttime" @change="bindDateStartChange(index, $event)">
										<input :class="item.time.starttime?'picker-input starttime' : 'picker-input' "  placeholder="请选择" disabled :value="item.time.starttime"></input>
								</picker>
								<view style="padding: 0 3px">至</view>
								<picker class="item-picker" mode="date" fields="month" :value="item.time.endtime" :start="startDate" :end="endDate"
								 name="endtime" @change="bindDateEndChange(index, $event)">
										<input :class="item.time.endtime?'picker-input endtime' : 'picker-input' " placeholder="请选择" disabled :value="item.time.endtime" size="mini"></input>
								</picker>
							</view>
						</li>
					</ul>
				</view>
				<!-- 工作内容 -->
				<view class="title"> 工作内容 </view>
				<view>
					<textarea class="text-area" value="" placeholder="请输入..." v-model="item.experience" maxlength="300" name="experience" />
					<view class="text-count">
            <span>{{ item.experience.length }}/300</span>
          </view>
        </view>
      </view>
      <view class="add-button-wrapper">
        <button
          type="default"
          size="mini"
          class="add-button"
          @click="addExperience"
        >
          添加工作经验
        </button>
      </view>
    </view>
    <view class="footer">
      <view class="more-wrapper">
        <button size="mini" class="more">更多</button>
      </view>
      <!-- 保存 -->
      <view class="save-button">
        <button type="default" @click="save">保存</button>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      work: [
        {
          title: "",
          time: {
            starttime: "",
            endtime: "",
          },
          experience: "",
        },
      ],
    };
  },
  onLoad() {},
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    },
  },
  methods: {
    //起始时间改变  for循环下多个picker数据产生联动 传入index 解决联动问题
    bindDateStartChange: function (index, e) {
      console.log(index);
      this.work[index].time.starttime = e.target.value;
    },
    //结束时间改变
    bindDateEndChange: function (index, e) {
      this.work[index].time.endtime = e.target.value;
    },
    //日期显示限制 显示方式
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      // let day = date.getDate();
      //显示范围为1960至今
      if (type === "start") {
        year = year - 60;
      } else if (type === "end") {
        year = year;
      }
      month = month > 9 ? month : "0" + month;
      // day = day > 9 ? day : '0' + day;
      return `${year}-${month}`;
    },
    //增加工作经历
    addExperience() {
      this.work.push({
        title: "",
        time: {
          starttime: "",
          endtime: "",
        },
        experience: "",
      });
      console.log(this.work);
    },

    deleted(index) {
      if (this.work.length == 1) {
        uni.showModal({
          content: "请填写工作经历",
          showCancel: false,
        });
        return;
      }
      uni
        .showModal({
          content: "确认删除该条工作经验吗？",
          showCancel: true,
        })
        .then((res) => {
          console.log(res);
          if (res[1].confirm) {
            console.log("用户点击确定");
            this.work.splice(index, 1);
            uni.setStorageSync("workExperience", this.work);
          } else if (res[1].cancel) {
            console.log("用户点击取消");
            return;
          }
        });
    },
    save() {
      console.log(this.work);
      this.work.forEach((i) => {
        if (i.title == "") {
          uni.showModal({
            content: "请输入经验标题",
            showCancel: false,
          });
          return;
        }
        if (
          i.time.starttime == "" ||
          i.time.endtime == "" ||
          i.time.starttime == "请选择" ||
          i.time.endtime == "请选择"
        ) {
          uni.showModal({
            content: "请选择工作时间",
            showCancel: false,
          });
          return;
        }
        if (i.experience == "") {
          uni.showModal({
            content: "请输入工作内容",
            showCancel: false,
          });
          return;
        }
      });
      uni.setStorageSync("workExperience", this.work);
      uni.navigateTo({
        url: "",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 15px;
  width: 100%;
  background-color: #f2f3f5;
  letter-spacing: 1px;
	font-size: 14px;
  button {
    background-color: #00e496;
    color: #fff;
    border-radius: 20px;
  }
  .main {
    margin-bottom: 100px;
  }
  .delete-button-wrapper {
    text-align: right;
    padding: 8px 15px 5px;
  }
  .title {
    padding: 10px 20px;
    font-size: 16px;
  }
  .work-experience {
    .work-list {
      list-style: none;
      padding: 0;
      background-color: #fff;
      margin: 0;
      .work-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        padding: 0 20px;
        color: #2d2d2d;
        border-bottom: 1px solid #f2f3f5;
				.item-title {
					width: 80px;
				}
				.title-input {
					flex: 1;
					height: 48px;
					text-align: right;
					font-size: 14px;
				}
        
        .time-select {
          display: flex;
					align-items: center;
					flex-wrap: nowrap;
          .item-picker {
            color: #999;
						.picker-input {
							width: 50px;
							height: 48px;
							font-size: 14px;
							text-align: center;
						}
						.starttime, .endtime{
							width: 70px;
						}
          }
        }
      }
    }
  }
  .text-area {
    background-color: #fff;
    // min-height: 80px;
    height: 80px;
    width: 100%;
    padding: 10px;
		font-size: 14px;
  }
  .text-count {
    display: flex;
    padding: 10px 20px;
    span {
      flex: 1;
      text-align: right;
      font-size: 13px;
    }
  }

  .add-button-wrapper {
    text-align: right;
    padding: 5px 15px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f2f3f5;
    z-index: 99;
    border-top: 1px solid rgb(226, 224, 224);
    box-shadow: 10px 10px 5px;
    .more-wrapper {
      text-align: right;
      padding: 5px 20px;
    }
  }
  .save-button {
    button {
      margin: 0 20px 15px;
      height: 40px;
      border-radius: 20px;
      font-size: 14px;
      letter-spacing: 4px;
    }
  }
}
</style>
