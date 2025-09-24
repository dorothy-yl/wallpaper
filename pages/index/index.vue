<template>
  <view class="homeLayout pageBg">
    <custom-nav-bar title="推荐"></custom-nav-bar>
    <view class="banner">
      <swiper
        indicator-dotes
        indicator-color="rgba(255,255,255,0.5)"
        indicator-active-color="#fff"
        autoplay
      >
        <swiper-item v-for="item in bannerList" :key="item._id">
          <image :src="item.picurl" mode="aspectFill"></image>
        </swiper-item>
      </swiper>
    </view>

    <view class="notice">
      <view class="left">
        <uni-icons type="sound-filled" size="20" color="#28b389"></uni-icons>
        <text class="text">公告</text>
      </view>
      <view class="center">
        <swiper vertical autoplay interval="1500" duration="300" circular>
          <swiper-item v-for="item in noticeList" :key="item._id"
            >文{{item.title}}</swiper-item
          >
        </swiper>
      </view>
      <view class="right">
        <uni-icons type="right" size="16" color="#333"></uni-icons>
      </view>
    </view>
  </view>

  <view class="select">
    <common-title>
      <template #name>每日推荐</template>
      <template #custom>
        <view class="date">
          <uni-icons type="calendar" size="18" color="#28b389"></uni-icons>
          <view class="text">
            <uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
          </view>
        </view>
      </template>
    </common-title>
    <view class="content">
      <scroll-view scroll-x>
        <view
          class="box"
          v-for="item in randomList"
          :key="item._id"
          @click="goPreview(item._id)"
        >
          <image :src="item.smallPicurl" mode="aspectFill"></image>
        </view>
      </scroll-view>
    </view>
  </view>

  <view class="theme">
    <common-title>
      <template #name>专题精选</template>
      <template #custom>
        <navigator url="/pages/classify/classify" class="more">More+</navigator>
      </template>
    </common-title>
    <view class="content">
      <theme-item v-for="item in 8" :key="item"></theme-item>
      <theme-item :isMore="true"></theme-item>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import customNavBar from "@/components/custom-nav-bar.vue";

const bannerList = ref([]);
const randomList = ref([]);
const noticeList = ref([]);

const getBanner = async () => {
  let res = await uni.request({
    url: "https://tea.qingnian8.com/api/bizhi/homeBanner",
    header: {
      "access-key": "282011",
    },
  });
  if (res.data.errCode === 0) {
    bannerList.value = res.data.data;
  }
};

const getDayRandom = async () => {
  let res = await uni.request({
    url: "https://tea.qingnian8.com/api/bizhi/randomWall",
    header: {
      "access-key": "282011",
    },
  });
  if (res.data.errCode === 0) {
    randomList.value = res.data.data;
  }
};

const getNotice = async () => {
  let res = await uni.request({
    url: "https://tea.qingnian8.com/api/bizhi/wallNewsList",
    header: {
      "access-key": "282011",
    },
    data: {
      select:true
    },
  });
  if (res.data.errCode === 0) {
    noticeList.value = res.data.data;
  }
};

getBanner();
getDayRandom();
getNotice();
</script>

<style lang="scss" scoped>
.homeLayout {
  .banner {
    width: 750rpx;
    padding: 30rpx 0;

    swiper {
      width: 750rpx;
      height: 340rpx;

      &-item {
        width: 100%;
        height: 100%;
        padding: 0 30rpx;

        image {
          width: 100%;
          height: 100%;
          border-radius: 10rpx;
        }
      }
    }
  }

  .notice {
    width: 690rpx;
    height: 80rpx;
    line-height: 80rpx;
    background: #f9f9f9;
    margin: 0 auto;
    border-radius: 80rpx;
    display: flex;
  }

  .left {
    width: 140rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .text {
    font-size: 28rpx;
    color: #28b389;
    font-weight: 600;
  }

  .center {
    flex: 1;

    swiper {
      height: 100%;
    }

    swiper-item {
      height: 100%;
      font-size: 30rpx;
      color: #666;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  .right {
    width: 70rpx;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.select {
  padding-top: 50rpx;
}

.date {
  color: #28b389;
  display: flex;
  align-items: center;
}

.text {
  margin-left: 5rpx;
}

.content {
  width: 720rpx;
  margin-left: 30rpx;
  margin-top: 30rpx;

  scroll-view {
    white-space: nowrap;

    .box {
      width: 200rpx;
      height: 430rpx;
      display: inline-block;
      margin-right: 15rpx;

      image {
        width: 100%;
        height: 100%;
        border-radius: 10rpx;
      }
    }

    .box:last-child {
      margin-right: 30rpx;
    }
  }
}

.theme {
  padding-top: 50rpx;
}

.more {
  font-size: 32rpx;
  color: #888;
  font-weight: 600;
}

.content {
  margin-top: 30rpx;
  padding: 0 30rpx;
  display: grid;
  gap: 15rpx;
  grid-template-columns: repeat(3, 1fr);
}
</style>
