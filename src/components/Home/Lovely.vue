<template>
	<div class="lovely-box">
		<div class="block-title">
			<span class="iconfont icon-zan1"></span>
			猜你喜欢
		</div>
		<ul class="list">
			<li class="item" v-for="(item, index) of list" :key="item.id">
				<div class="img-box">
					<img :src="item.img_url" alt="" />
					<p class="img-title" :class="'img-title'+item.status">{{ item.img_title }}</p>
				</div>
				<div class="item-info">
					<div class="name">{{ item.name }}</div>
					<div class="comments">
						<span class="stars">
							<strong class="real-stars"><span v-for="num in item.stars" class="iconfont icon-xingxing"></span></strong>
							<span class="default-stars"><span v-for="count in 5" class="iconfont icon-xingxing"></span></span>
						</span>
						<span class="num">{{ item.comments_num }}条评论</span>
					</div>
					<div class="import-info">
						<div class="price">
							<span class="price-num">
								¥
								<em>{{ item.price }}</em>
							</span>
							起
						</div>
						<span class="address">{{ item.address }}</span>
					</div>
				</div>
				<div class="knowledged" v-if="item.knowledged">
					<span>{{ item.knowledged }}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'HomeLovely',
	props: {
		list: Array
	},
	data() {
		return {};
	}
};
</script>

<style lang="stylus" scoped>
.lovely-box
	margin-top 0.3rem
	text-align left
	padding-left 0.3rem
	background #fff
	.block-title
		line-height 1.2rem
		.iconfont
			color orangered
			font-size 0.56rem
	.list
		padding-top 0.3rem
		.item
			border-bottom 1px solid #ddd
			display flex
			flex-wrap wrap
			padding 0.3rem 0
			.img-box
				position relative
				width 30%
				img
					width 100%
				.img-title1
					background #0bd5f0!important
				.img-title2
					background #ff9d14!important
				.img-title
					color #fff
					position absolute
					left 0
					top 0
					line-height 0.6rem
					background #ffa016
					font-size 0.36rem
					border-radius 0 0 0.3rem 0
			.item-info
				width 70%
				box-sizing border-box
				padding-left 0.3rem
				.name
					margin-top 0.4rem
					font-size 0.5rem
				.comments
					margin-top 0.3rem
					font-size 0.34rem
					.stars
						position relative
						margin-right 0.5rem
						.real-stars
							color #ffb436
							position absolute
							left 0
						.default-stars
							color #eee
				.import-info
					display flex
					margin-top 0.6rem
					.price
						color #666
						font-size 0.34rem
						flex 1
						.price-num
							color #ff8300
							em
								font-size 0.6rem
					.address
						text-align right
						flex 1
						font-size 0.34rem
						padding-right 0.4rem
			.knowledged
				text-align center
				width 100%
				display flex
				justify-content center
				margin-top 0.3rem
				span
					color #f55
					font-size 0.34rem
					background #fff9f9
					padding 0.2rem 0.3rem
</style>
