<template>
	<div class="p-3 bg-danger">
		<!-- <button type="button" class="btn btn-primary" v-bind="$attrs">버튼</button> -->
		<button type="button" class="btn btn-primary" @click="sayHello">
			버튼
		</button>
		<hr />
		{{ message }}
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	inheritAttrs: false,
};
</script>
<script setup>
const message = ref('message');
</script>

<style lang="scss" scoped></style>
