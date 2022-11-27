<template>
	<div class="p-3 bg-danger">
		<!-- <button type="button" class="btn btn-primary" v-bind="$attrs">버튼</button> -->
		<button type="button" class="btn btn-primary" @click="sayHello">
			버튼
		</button>
	</div>
</template>

<script>
export default {
	// inheritAttrs: false,
	// setup(props, { attrs }) {
	// console.log(attrs, attrs.onclick);
	setup(props, { emit }) {
		const sayHello = () => {
			emit('sayHello');
		};
		return { sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
