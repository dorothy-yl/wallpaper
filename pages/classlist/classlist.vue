<template>
  <view class="classlist">
    <view class="content">
      <navigator url="/pages/preview/preview" class="item" 
	  v-for="item in classList" :key="item._id">
        <image :src="item.smallPicurl" mode="aspectFill"></image>
      </navigator>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";
import { apiGetClassList } from "@/api/api.js";
const classList = ref([]);
const queryParams = {}
onLoad((e) => {
	let {id=null,name=null} = e;
	queryParams.classid = id;
	queryParams.name = name;
	uni.setNavigationBarTitle({
		title: name
	});
	getClassList();

});

const getClassList = async () => {
  let res = await apiGetClassList(queryParams)
  classList.value = res.data;
  console.log(res);
};

</script>

<style lang="scss" scoped>
.classlist {
  .content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5rpx;
    padding: 5rpx;
    .item {
      height: 440rpx;
      image {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
}
</style>
