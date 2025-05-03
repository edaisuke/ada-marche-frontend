<template>
	<div>
		<div class="max-w-6xl mx-auto p-8">

			<h2 class="text-3xl font-bold p-7 text-center">{{ $t('forgot.title') }}</h2>

			<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">

				<div class="p-16 w-1/2 mx-auto">

					<div class="text-center mb-12">
						<p>{{ $t('forgot.input_account_name') }}</p>
						<p>{{ $t('forgot.send_password_reset_link') }}</p>
					</div>

					<label class="mt-10">
						<span class="text-sm">{{ $t('forgot.account') }}</span> <span class="text-red-500">*</span>
						<input type="email" :placeholder="$t('forgot.account')" class="border border-gray-300 p-2 rounded w-full mb-4" />
					</label>

					<div class="text-center">
						<button class="bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900 p-2 rounded my-5 px-5">
							{{ $t('forgot.reset') }}
						</button>
					</div>

				</div>

			</div>

		</div>
	</div>
</template>

<script lang="ts" setup>

</script>
