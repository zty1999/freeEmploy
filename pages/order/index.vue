<template>
  <view class="content">
  </view>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
  computed: {
    ...mapState(['auth'])
  },
  onLoad () {
    if (+this.auth === 2) {
        uni.redirectTo({
            url: '../order/employer',
        })
    } else {
        uni.redirectTo({
            url: '../order/employed',
        })
    }
  }
};
</script>
<style lang="scss" scoped>
page {
  background-color: #f9f9f9;
}
</style>
