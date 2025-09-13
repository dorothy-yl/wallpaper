<template>
	<view class="homeLayout">
		<view class="banner">
			<swiper circular indicator-dots indicator-color="rgba(255,255,255,0.3)" indicator-active-color="#4cd964"
				autoplay>
				<swiper-item>
					<image src="../../common/images/banner1.jpg" mode="widthFix"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner2.jpg" mode="widthFix"></image>
				</swiper-item>
				<swiper-item>
					<image src="../../common/images/banner3.jpg" mode="widthFix"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item v-for="item in noticeList" :key="item._id">
						<navigator :url="'/pages/notice/detail?id='+item._id">
							{{item.title}}
						</navigator>
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
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
				height: 350rpx;

				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 30;
					}
				}
			}
		}

		.notice {
			width: 690rpx;
			height: 80rpx;
			background-color: #f9f9f9;
			margin: 0 auto;
			border-radius: 80rpx;
			display: flex;

			.left {
				width: 140rpx;
			}

			.center {
				flex: 1;
			}

			.right {
				width: 70rpx;
			}
		}
	}
</style>