<template>
  <view class="content">
		<employer v-if="+auth === 2"></employer>
		<tutor-main v-if="+auth === 1"></tutor-main>
  </view>
</template>

<script>
	import employer from './employer';
	import tutorMain from './tutorMain';
import {
    mapState
} from 'vuex'
export default {
	components: {
		employer,
		tutorMain
	},
  computed: {
    ...mapState(['auth'])
  },
  onLoad () {
    // if (+this.auth === 2) {
    //     uni.redirectTo({
    //         url: '../main/employer',
    //     })
    // } else {
    //     uni.redirectTo({
    //         url: '../main/tutorMain',
    //     })
    // }
  }
};
</script>
<style lang="scss" scoped>
page {
  background-color: #f9f9f9;
}
</style>
