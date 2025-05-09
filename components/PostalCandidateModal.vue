<template>
	<div
		v-if="show"
		class="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center"
	>
		<div class="bg-white rounded-lg shadow-lg w-96 max-w-full p-6">

			<h3 class="text-lg font-bold mb-4">住所候補を選択してください</h3>

			<ul class="space-y-2 max-h-60 overflow-auto">
				<li
					v-for="(item, index) in candidates"
					:key="index"
					class="border p-2 rounded hover:bg-gray-100 cursor-pointer"
					@click="select(index)"
				>
					{{ item.prefname }}{{ item.address1 }}{{ item.address2 }}
				</li>
			</ul>

			<button
				class="mt-4 text-sm text-gray-500 hover:underline"
				@click="$emit(('close'))"
			>キャンセル</button>

		</div>
		
	</div>
</template>

<script lang="ts" setup>

	import type { PostalAddress } from '../types/PostalAddress'

	defineProps<{
		show: boolean
		candidates: PostalAddress[]
	}>()

	const emit = defineEmits<{
		(e: 'select', index: number): void
		(e: 'close'): void
	}>()

	const select = (index: number) => {
		emit('select', index)
	}

</script>
