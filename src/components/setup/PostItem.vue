<template>
	<div class="card">
		<div class="card-body">
			<!-- {{ $props }} -->
			<!-- type: news, notice -->
			<span class="badge bg-secondary">{{ typeBadge }}</span>
			<h5 class="card-titl mt-2">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>
			<!-- <a v-if="isLike" href="#" class="btn btn-danger">좋아요</a>
			<a v-else href="#" class="btn btn-outline-danger">좋아요</a> -->
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike">like</a>
		</div>
	</div>
</template>
<script>
//components 갯수와 상관없이 한번만 출력
console.log('PostItem');
</script>
<script setup>
import { computed } from 'vue';
//components 갯수만큼 출력
console.log('PostItem');
const props = defineProps({
	type: {
		type: String,
		default: 'news',
		validator: value => {
			return ['news', 'notice'].includes(value);
		},
	},
	title: {
		type: String,
		required: true,
	},
	contents: {
		type: String,
		// requird: true,
	},
	isLike: {
		type: Boolean,
		default: false,
	},
	obj: {
		type: Object,
		default: () => {
			return {};
		},
	},
});
const emit = defineEmits(['toggleLike']);
const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeBadge = computed(() => (props.type === 'news' ? 'news' : 'notice'));
const toggleLike = () => {
	emit('toggleLike');
};
</script>

<style></style>

<!--
const color = ref('red');
color.value = 'blue';
return { color };
<style scoped>
.red {
	color: v-bind('color');
}
</style>
-->
<!--
const style = useCssModule();

<style module></style>
<p class="card-text" :class="$style.blue"></p>
  
<style module="classes">
.blue {
	color: blue;
}
</style>
<p class="card-text" :class="classes.blue"></p>
-->
