<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image src="../../common/images/preview1.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>

        <view class="mask">
            <view class="go-back"></view>
            <view class="count">3/999</view>
            <view class="time">10:00</view>
            <view class="date">2025-05-01</view>
            <view class="footer">
                <view class="box">
                    <uni-icons type="arrowleft" size="28" ></uni-icons>
                    <view class="text">信息</view>
                </view>
                <view class="box">
                    <uni-icons type="star" size="28" ></uni-icons>
                    <view class="text">5分</view>
                </view>

                <view class="box">
                    <uni-icons type="arrowleft" size="28" ></uni-icons>
                    <view class="text">下载</view>
                </view>
               
            </view>

        </view>
    </view>
</template>

<style lang="scss" scoped>
.preview{
	width: 100%;
	height: 100vh;	
	swiper{
		width: 100%;
		height: 100%;
		image{
			width: 100%;
			height: 100%;
		}
	}
}
</style>