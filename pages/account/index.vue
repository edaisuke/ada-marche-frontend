<template>
	<div>
		<div class="max-w-6xl mx-auto p-8">

			<h2 class="text-3xl font-bold p-7 text-center">{{ $t('account.title') }}</h2>

			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">

				<div class="p-16">

					<h3 class="text-2xl font-bold text-center mb-10">{{ $t('account.login') }}</h3>
					
					<label class="mt-5">
						<span class="text-sm">{{ $t('account.account') }}</span> <span class="text-red-500">*</span>
						<input type="text" :placeholder="$t('account.account')" class="border border-gray-300 p-2 rounded w-full mb-4" />
					</label>

					<label class="mt-5">
						<span class="text-sm">{{ $t('account.password') }}</span> <span class="text-red-500">*</span>
						<input type="password" :placeholder="$t('account.password')" class="border border-gray-300 p-2 rounded w-full mb-4" />
					</label>

					<button class="bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-600 hover:dark:bg-gray-400 p-2 rounded my-5 px-5">
						{{ $t('account.login') }}
					</button>

					<p class="text-sm text-gray-500 dark:text-gray-200 mt-5">
						<NuxtLink :to="{ path: $localePath('/account/forgot') }">{{ $t('account.forgot_password') }}</NuxtLink>
					</p>

				</div>

				<div class="p-16">

					<h3 class="text-2xl font-bold text-center mb-10">{{ $t('account.register') }}</h3>

					<label class="mt-5">
						<span class="text-sm">{{ $t('account.email') }}</span> <span class="text-red-500">*</span>
						<input type="email" :placeholder="$t('account.email')" class="border border-gray-300 p-2 rounded w-full mb-4" />
					</label>

					<p class="mt-5">
						{{ $t('account.send_to_register_link') }}
					</p>

					<p class="mt-5 mb-4">
						{{ $t('account.personal_info_usage') }}
					</p>

					<NuxtLink :to="{ path: $localePath('/account/register') }" class="bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-600 hover:dark:bg-gray-400 p-2 rounded my-5 px-5">
						{{ $t('account.register') }}
					</NuxtLink>

				</div>

			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>

</script>
