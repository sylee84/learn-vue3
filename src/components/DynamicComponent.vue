<template>
	<div class="container py-4">
		<button
			type="button"
			class="btn btn-primary me-2"
			@click="changeCurrentComp(DynamicApple)"
		>
			사과
		</button>
		<button
			type="button"
			class="btn btn-danger"
			@click="changeCurrentComp(DynamicBanana)"
		>
			바나나
		</button>
		<hr />
		<!-- <DynamicApple></DynamicApple>
		<DynamicBanana></DynamicBanana> -->
		<component :is="currentComp" />
		<p>{{ obj1 }}</p>
		<p>{{ obj2 }}</p>
	</div>
</template>

<script setup>
import DynamicApple from '@/components/DynamicApple.vue';
import DynamicBanana from '@/components/DynamicBanana.vue';
import { ref, shallowRef } from 'vue';
const currentComp = shallowRef(DynamicApple);
const obj1 = ref({ name: '홍길동' });
const obj2 = shallowRef({ name: '김길동' });
const changeCurrentComp = comp => (currentComp.value = comp);
// export default {
// 	components: {
// 		DynamicApple,
// 		DynamicBanana,
// 	},
// 	setup() {
// 		const currentComp = ref(DynamicApple);
// 		const changeCurrentComp = comp => (currentComp.value = comp);
// 		return { currentComp, changeCurrentComp };
// 	},
// };
</script>

<style lang="scss" scoped></style>
