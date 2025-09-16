<template>
	<text :class="classes" :style="[iconStyle]" @click="onClick">{{ iconText }}</text>
</template>

<script>
export default {
	name: 'uni-icons',
	emits: ['click'],
	props: {
		type: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: '#333333'
		},
		size: {
			type: [Number, String],
			default: 16
		},
		customPrefix: {
			type: String,
			default: ''
		}
	},
	computed: {
		classes() {
			let classes = 'uni-icons'
			if (this.customPrefix) {
				classes += ` ${this.customPrefix}-${this.type}`
			} else {
				classes += ` uniui-${this.type}`
			}
			return classes
		},
		iconStyle() {
			return {
				color: this.color,
				fontSize: this.size + 'px'
			}
		},
		iconText() {
			// 简化版本的图标字体映射
			const iconMap = {
				'download-filled': '\ue6df',
				'star-filled': '\ue669',
				'chatboxes-filled': '\ue631',
				'right': '\ue66f',
				'notification-filled': '\ue6a6',
				'flag-filled': '\ue65c',
				'sound-filled': '\ue6a7',
				'calendar': '\ue6a0',
				'more-filled': '\ue6ee'
			}
			return iconMap[this.type] || ''
		}
	},
	methods: {
		onClick() {
			this.$emit('click')
		}
	}
}
</script>

<style>
@font-face {
	font-family: uniicons;
	src: url('data:font/truetype;charset=utf-8;base64,') format('truetype');
}

.uni-icons {
	font-family: uniicons;
	text-decoration: none;
	text-align: center;
}

.uniui-download-filled:before { content: "\e6df"; }
.uniui-star-filled:before { content: "\e669"; }
.uniui-chatboxes-filled:before { content: "\e631"; }
.uniui-right:before { content: "\e66f"; }
.uniui-notification-filled:before { content: "\e6a6"; }
.uniui-flag-filled:before { content: "\e65c"; }
.uniui-sound-filled:before { content: "\e6a7"; }
.uniui-calendar:before { content: "\e6a0"; }
.uniui-more-filled:before { content: "\e6ee"; }
</style>
