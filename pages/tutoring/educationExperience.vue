<template>
  <view class="content">
    <view class="title"> 教育经历 </view>
    <!-- 教育经历 -->
    <view class="education-experience">
      <ul class="education-list">
        <li class="education-item">
          <view class="item-title"> 学校 </view>
          <view class="school-select">
            <input
              type="text"
              value=""
              placeholder=""
              v-model="education.school"
            />
          </view>
        </li>
        <li class="education-item">
          <view class="item-title"> 专业 </view>
          <view class="school-select">
            <input type="text" value="" v-model="education.special" />
          </view>
        </li>
        <li class="education-item">
          <view class="item-title"> 在校时间 </view>
          <view class="time-select">
            <picker
              class="item-picker"
              mode="date"
              fields="month"
              :value="dateStart"
              :start="startDate"
              :end="endDate"
              @change="bindDateStartChange"
            >
              <view class="uni-input">{{ dateStart }}</view>
            </picker>
            <view style="padding: 0 3px">至</view>
            <picker
              class="item-picker"
              mode="date"
              fields="month"
              :value="dateEnd"
              :start="startDate"
              :end="endDate"
              @change="bindDateEndChange"
            >
              <view class="uni-input">{{ dateEnd }}</view>
            </picker>
          </view>
        </li>
      </ul>
    </view>
    <!-- 在校经历 -->
    <view class="title"> 在校经历（选填） </view>
    <textarea
      class="text-area"
      value=""
      placeholder="请输入..."
      v-model="education.experience"
      maxlength="300"
    />
    <view class="text-count">
      <span>{{ education.experience.length }}/300</span>
    </view>
    <!-- 保存 -->
    <view class="save-button">
      <button type="default" @click="save">保存</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    const currentStartDate = this.getDate({
      format: true,
    });
    const currentEndDate = this.getDate({
      format: true,
    });

    return {
      //教育经历表单数据
      education: {
        school: "",
        special: "",
        time: "",
        experience: "",
      },
      //起始日期
      dateStart: currentStartDate,
      //结束日期
      dateEnd: currentEndDate,
    };
  },
  computed: {
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    },
  },
  methods: {
    //起始时间改变
    bindDateStartChange: function (e) {
      this.dateStart = e.target.value;
    },
    //结束时间改变
    bindDateEndChange: function (e) {
      this.dateEnd = e.target.value;
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
    //保存并跳转下一页面
    save() {
      console.log(this.education);
      this.education.time = this.dateStart + "——" + this.dateEnd;
      console.log(this.education.time);
      if (this.education.school == "") {
        uni.showModal({
          content: "请输入学校名称",
          showCancel: false,
        });
        return;
      }
      if (this.education.special == "") {
        uni.showModal({
          content: "请输入专业名称",
          showCancel: false,
        });
        return;
      }
      if (this.education.time == "") {
        uni.showModal({
          content: "请选择在校时间",
          showCancel: false,
        });
        return;
      }
      if (this.dateStart > this.dateEnd) {
        uni.showModal({
          content: "起始时间不能大于结束时间",
          showCancel: false,
        });
        return;
      }
      if (this.dateStart == this.dateEnd) {
        uni.showModal({
          content: "起始时间不能等于结束时间",
          showCancel: false,
        });
        return;
      }
      console.log(this.education);
      uni.setStorageSync("educationExperience", this.education);
      uni.navigateTo({
        url: "./workExperience",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  position: relative;
  margin-top: 15px;
  width: 100%;
  background-color: #f2f3f5;
  letter-spacing: 1px;

  .title {
    padding: 10px 20px;
  }

  .education-experience {
    padding-bottom: 15px;

    .education-list {
      list-style: none;
      padding: 0;
      background-color: #fff;

      .education-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 48px;
        padding: 0 20px;
        color: #2d2d2d;
        border-bottom: 1px solid #f2f3f5;

        input {
          height: 48px;
          text-align: right;
        }
        .time-select {
          display: flex;
          .item-picker {
            color: #999;
          }
        }
      }
    }
  }
  .text-area {
    background-color: #fff;
    min-height: 180px;
    width: 100%;
    padding: 10px;
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
  .save-button {
    button {
      background-color:  #00e496;
      margin: 15px 20px;
      height: 40px;
      border-radius: 20px;
      color: #fff;
      font-size: 14px;
    }
  }
}
</style>
