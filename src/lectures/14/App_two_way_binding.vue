<template>
	<div>
		<!-- <input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/> -->
		<!-- <input type="text" v-model="inputValue" /> -->
		<!-- <input type="text" v-model.lazy="inputValue" /> focus out 일때 -->
		<!-- <p>{{ inputValue }}</p> -->
		<!-- <input type="text" v-model.number="inputValue" />
		<p>{{ inputValue }}</p>
		<p>{{ typeof inputValue }}</p> -->
		<input type="text" v-model.trim="inputValue" />
		<p>{{ inputValue }}</p>
		<hr />
		<!-- <textarea
			name=""
			id=""
			:value="textareaValue"
			@input="event => (textareaValue = event.target.value)"
		></textarea> -->
		<textarea name="" id="" v-model="textareaValue"></textarea>
		<p>{{ textareaValue }}</p>
		<hr />
		<!-- <label for="check-1">
			<input
				type="checkbox"
				name="check"
				id="check-1"
				:checked="checkboxValue"
				@change="event => (checkboxValue = event.target.checked)"
			/>
			{{ checkboxValue }}
		</label> -->
		<label for="check">
			<input type="checkbox" name="" id="check" v-model="checkboxValue" />
			{{ checkboxValue }}
		</label>
		<label for="check2">
			<input
				type="checkbox"
				name=""
				id="check2"
				v-model="checkboxValue2"
				true-value="yes"
				false-value="no"
			/>
			{{ checkboxValue2 }}
		</label>
		<hr />
		<label for="">
			<input type="checkbox" value="html" v-model="checkboxArray" />
			HTML
		</label>
		<label for="">
			<input type="checkbox" value="css" v-model="checkboxArray" />
			CSS
		</label>
		<label for="">
			<input type="checkbox" value="javascript" v-model="checkboxArray" />
			JavaScript
		</label>
		<p>{{ checkboxArray }}</p>
		<hr />
		<!-- <label for="radio-1">
			<input
				type="radio"
				name="radio"
				id="radio-1"
				value="A형"
				:checked="radioValue === 'A형'"
				@change="event => (radioValue = event.target.value)"
			/>
			A형
		</label>
		<label for="radio-2">
			<input
				type="radio"
				name="radio"
				id="radio-2"
				value="O형"
				:checked="radioValue === 'O형'"
				@change="event => (radioValue = event.target.value)"
			/>
			O형
		</label> -->
		<label for="radio-1">
			<input
				type="radio"
				name="radio"
				id="radio-1"
				value="A형"
				v-model="radioValue"
			/>
			A형
		</label>
		<label for="radio-2">
			<input
				type="radio"
				name="radio"
				id="radio-2"
				value="O형"
				v-model="radioValue"
			/>
			O형
		</label>
		<p>{{ radioValue }}</p>
		<hr />
		<!-- <select
			name=""
			id=""
			:value="selectValue"
			@change="event => (selectValue = event.target.value)"
		> -->
		<select name="" id="" v-model="selectValue">
			<option value="HTML">HTML</option>
			<option value="CSS">CSS</option>
			<option value="JavaScript">JavaScript</option>
		</select>
		<p>{{ selectValue }}</p>
	</div>
</template>

<script>
import { ref } from 'vue';
export default {
	setup() {
		const inputValue = ref('');
		const textareaValue = ref('');
		const checkboxValue = ref(true);
		const checkboxValue2 = ref('yes');
		const checkboxArray = ref([]);
		const radioValue = ref('A형');
		const selectValue = ref('HTML');
		return {
			inputValue,
			textareaValue,
			checkboxValue,
			checkboxValue2,
			checkboxArray,
			radioValue,
			selectValue,
		};
	},
};
</script>

<style lang="scss" scoped></style>
