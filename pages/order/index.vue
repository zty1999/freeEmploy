<template>
  <view class="content">
		<employer v-if="auth === '2'"></employer>
		<employed v-if="auth === '1'"></employed>
  </view>
</template>

<script>
import {
    mapState
} from 'vuex';
	import employer from './employer';
	import employed from './employed';
export default {
	components: {
		employer,
		employed
	},
  computed: {
    ...mapState(['auth'])
  },
  onLoad () {
    // if (+this.auth === 2) {
    //     uni.redirectTo({
    //         url: '../order/employer',
    //     })
    // } else {
    //     uni.redirectTo({
    //         url: '../order/employed',
    //     })
    // }
  }
};
</script>
<style lang="scss" scoped>
page {
  background-color: #f9f9f9;
	.content {
		width: 100%;
	}
}
</style>
