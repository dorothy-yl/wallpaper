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
import { apiGetClassList } from "@/api/api.js";
const classList = ref([]);



const getClassList = async () => {
  let res = await apiGetClassList({
    classid: "6524a48f6523417a8a8b825d",
  });
  classList.value = res.data;
  console.log(res);
};

getClassList();
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
