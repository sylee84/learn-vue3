<template>
	<main>
		<div class="container py-4">
			<!-- <MyButton @click="sayHello" class="my-button" id="my-button"></MyButton> -->
			<MyButton
				class="my-button"
				id="my-button"
				@sayHello="sayHello"
			></MyButton>
			<LabelInput label="이름"></LabelInput>

			<hr class="my-4" />

			<FancyButton>click!! <span style="color: red">!!!</span> </FancyButton>
			<FancyButton #="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
			<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
			<FancyButton>
				<template #default="{ fancyMessage }">{{ fancyMessage }}</template>
			</FancyButton>

			<hr class="my-4" />

			<AppCard>
				<template v-slot:[slotArgs]="{ headerMessage }"
					>제목 입니다.{{ headerMessage }}</template
				>
				<!-- <template #default>내용 입니다.</template> -->
				<!-- default 내용 입니다. -->
				<!-- <template v-slot:default="obj"> 
					{{ obj }}{{ message }} {{ obj.childMessage }}
					-->
				<template v-slot:default="{ childMessage, helloMessage }">
					{{ message }} {{ childMessage }} {{ helloMessage }}
				</template>
				<template v-slot:footer="{ footerMessage }"
					>푸터 입니다.{{ footerMessage }}</template
				>
			</AppCard>

			<hr class="my-4" />

			<AppCard> 게시글 입니다. </AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import LabelInput from '@/components/LabelInput.vue';
import FancyButton from '@/components/FancyButton.vue';
import AppCard from '@/components/AppCard.vue';
import { ref } from 'vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요.');
		};
		const slotArgs = ref('header');
		const message = ref('안녕하세요!!!');
		return { sayHello, slotArgs, message };
	},
};
</script>

<style lang="scss" scoped></style>
