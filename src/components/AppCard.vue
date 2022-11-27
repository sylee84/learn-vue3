<template>
	<div class="card">
		<div v-if="$slots.header" class="card-header">
			<slot name="header" headerMessage="헤더 입니다!">#header</slot>
		</div>
		<div v-if="$slots.default" class="card-body">
			<slot :childMessage="childMessage" helloMessage="안뇽하세요!!"
				>#body</slot
			>
		</div>
		<div v-if="hasFooter" class="card-footer text-muted">
			<slot name="footer" footerMessage="푸터 입니다!">#footer</slot>
		</div>
	</div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
	setup(props, { slots }) {
		const childMessage = ref('자식 메시지');
		const hasFooter = computed(() => !!slots.footer);
		return { childMessage, hasFooter };
	},
};
</script>

<style lang="scss" scoped></style>
