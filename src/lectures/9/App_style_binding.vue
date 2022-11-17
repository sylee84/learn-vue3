<template>
	<div>
		<div :style="[styleObject1, styleObject2]">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore dolor
			voluptates iste natus. Temporibus laudantium magni dicta at porro
			doloribus molestias ipsam repellendus recusandae nihil sunt ex quo, labore
			cumque.
		</div>
		<button type="button" @click="fontSize++">+</button>
		<button type="button" @click="fontSize--">-</button>
	</div>
</template>

<script>
import { computed, reactive, ref } from 'vue';
export default {
	setup() {
		const styleObject1 = reactive({
			color: 'red',
			fontWeight: 900,
		});
		const fontSize = ref(20);
		const styleObject2 = computed(() => {
			return {
				fontSize: fontSize.value + 'px',
			};
		});
		return { styleObject1, styleObject2, fontSize };
	},
};
</script>

<style lang="scss" scoped></style>
