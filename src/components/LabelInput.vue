<template>
	<label class="form-label" id="child-id">
		{{ label }}
		<!-- <input
			:value="modelValue"
			@input="event => $emit('updete:modelValue', event.target.value)"
			type="text"
		/> -->
	</label>
	<input v-model="value" v-bind="$attrs" type="text" class="form-control" />
</template>

<script>
import { computed } from 'vue';
export default {
	props: ['modelValue', 'label'],
	emits: ['updete:modelValue'],
	setup(props, { emit }) {
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
