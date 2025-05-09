<template>
	<div>

		<div v-if="checking" class="max-w-4xl mx-auto p-8 text-center">
			<div>
				<Icon name="mdi:loading" class="animate-spin text-blue-400 text-4xl" />
			</div>
			{{ $t('register_activated.checking') }}
		</div>
		<div v-else class="max-w-4xl mx-auto p-8">

			<h2 class="text-3xl font-bold p-7 text-center">
				{{ $t('register_activated.title') }}
			</h2>

			<p class="text-center font-bold mt-5">{{ $t('register_activated.activated') }}</p>

			<p class="text-center mt-5">{{ $t('register_activated.login_and_shopping') }}</p>

		</div>

	</div>
</template>

<script lang="ts" setup>
	import { navigateTo, useRoute } from 'nuxt/app'
	import { onMounted, ref } from 'vue'
	import { z } from 'zod'

	const checking = ref(true)
	const route = useRoute()

	const [secretKey, qtyInCart] = route.params.params as [string, string?] || []

	const argsSchema = z.tuple([
		z
			.string()
			.length(32)
			.regex(/^[0-9a-zA-Z]+$/),
		z
			.string()
			.optional()
	])

	const result = argsSchema.safeParse([secretKey, qtyInCart])

	onMounted( async () => {

		if (!result.success) {
			console.warn(result.error.flatten())
			navigateTo('/404')
		} else {
			console.log('OK: ', secretKey, qtyInCart)
			const response = await $fetch<{ success: boolean }>('/api/account/activate', {
				method: 'POST',
				body: {
					secret_key: secretKey,
				}
			})

			if (!response.success) {
				navigateTo('/404')
			}
			checking.value = false
		}

	})

</script>
