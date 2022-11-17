<template>
	<div>
		<p
			class="text"
			:class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
		>
			택스트
		</p>
		<button type="button" @click="toggle">toggle</button>
		<button type="button" @click="hasError = !hasError">toggle danger</button>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
	setup() {
		let isActive = ref(true);
		let hasError = ref(true);
		// const classObject = reactive({
		// 	active: isActive,
		// 	'text-danger': hasError,
		// });
		const classObject = computed(() => {
			return {
				active: true && true,
				'text-danger': false || true,
				'text-blue': true,
			};
		});

		const activeClass = ref('active');
		const errorClass = ref('error');

		const toggle = () => {
			isActive.value = !isActive.value;
		};
		return { isActive, hasError, toggle, classObject, activeClass, errorClass };
	},
};
</script>

<style scoped>
.active {
	font-weight: 900;
}
.text-danger {
	color: red;
}
</style>
