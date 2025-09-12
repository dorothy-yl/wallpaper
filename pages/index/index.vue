<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper circular indictor-dotes indicator-color="rgba(255,255,255,0.3)" 
					indicator-active-color="#4cd964" autoplay>
				<swiper-item >
					<image src="../../common/images/banner1.jpg" mode="widthFix"></image>
				</swiper-item>
				<swiper-item >
					<image src="../../common/images/banner2.jpg" mode="widthFix"></image>
				</swiper-item>
				<swiper-item >
					<image src="../../common/images/banner3.jpg" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>

	</view>
</template>

<script setup>
</script>


<style lang="scss" scoped>
	.homeLayout {
		.banner {
			width: 750px;
			padding: 30rpx 30rpx;

			swiper {
				width: 760rpx;
				height:350rpx;

				&-item {
					width: 100%;
					height: 100%;
					padding:0 30rpx;
					
					image {
						width: 100%;
						height: 100%;
						border-radius: 30;
					}
				}
			}
		}
	}
</style>