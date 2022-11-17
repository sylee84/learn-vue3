<template>
	<div>
		<button type="button" @click="printEventInfo('Hello vue3', $event)">
			inline event hendler
		</button>
		<hr />
		<input type="text" @keyup="onKeyUpHendler" />
	</div>
</template>

<script>
export default {
	setup() {
		const printEventInfo = (message, event) => {
			console.log(message);
			console.log(event.target);
			console.log(event.target.tagName);
		};
		const onKeyUpHendler = event => {
			console.log(event.key);
		};
		return { printEventInfo, onKeyUpHendler };
	},
};
</script>

<style lang="scss" scoped></style>
