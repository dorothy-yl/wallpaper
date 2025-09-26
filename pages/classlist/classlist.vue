<template>
  <view class="classlist">
    <view  class="lodingLayout" v-if="!classList.length && !noData">
      <uni-load-more status="loading"></uni-load-more>
    </view>
    <view class="content">
      <navigator url="/pages/preview/preview" class="item" 
	  v-for="item in classList" :key="item._id">
        <image :src="item.smallPicurl" mode="aspectFill"></image>
      </navigator>
    </view>

    <view  class="lodingLayout" v-if="classList.length || noData">
      <uni-load-more :status="noData ? 'noMore' : 'loading'"></uni-load-more>
    </view>


  </view>
</template>

<script setup>
import { ref } from "vue";
import { onLoad,onReachBottom } from "@dcloudio/uni-app";
import { apiGetClassList } from "@/api/api.js";
const classList = ref([]);
const noData = ref(false);
const queryParams = {
  pageNum:1,  
  pageSize:12
}

onLoad((e) => {
	let {id=null,name=null} = e;
	queryParams.classid = id;
	queryParams.name = name;
	uni.setNavigationBarTitle({
		title: name
	});
	getClassList();

});
onReachBottom(() => {
  if(noData.value) return;
  queryParams.pageNum++;
  getClassList();
});
const getClassList = async () => {
  let res = await apiGetClassList(queryParams)
  classList.value = [...classList.value, ...res.data];
  if(res.data.length < queryParams.pageSize)
    noData.value = true;
    console.log(res.data);

  }


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
