<template>
	<div>
		<div class="max-w-6xl mx-auto p-16 md:px-32">

			<h2 class="text-3xl font-bold p-7 text-center">{{ $t('register.title') }}</h2>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.last_name') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" :placeholder="$t('register.last_name')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.first_name') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" :placeholder="$t('register.first_name')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.last_kana') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" :placeholder="$t('register.last_kana')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.first_kana') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" :placeholder="$t('register.first_kana')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.display_name') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" :placeholder="$t('register.display_name')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.post_code') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" :placeholder="$t('register.post_code')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.prefecture') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" :placeholder="$t('register.prefecture')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.address1') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" :placeholder="$t('register.address1')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.address2') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" :placeholder="$t('register.address2')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2 mb-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.address3') }}
					</label>
					<div class="">
						<input type="text" :placeholder="$t('register.address3')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.phone_number') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="number" :placeholder="$t('register.phone_number')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>
			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.email') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="email" :placeholder="$t('register.email')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2 mb-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.email_confirm') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="email" :placeholder="$t('register.email_confirm')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.password') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="password" :placeholder="$t('register.password')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2 mb-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.password_confirm') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="password" :placeholder="$t('register.password_confirm')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.birthday') }}
					</label>
					<div class="">
						<input type="text" :placeholder="$t('register.birthday')" class="border border-gray-300 p-2 rounded w-full" />
					</div>
				</div>

			</div>
			
			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.gender') }}
					</label>
					<div class="p-2">
						<span
							v-for="gender in genders"
							:key="gender.id"
							class="mr-4"
						>
							<label>
								<input type="radio" name="gender" :value="gender.id" />
								{{ gender.name }}
							</label>
						</span>
					</div>
				</div>

			</div>
			
			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.job') }}
					</label>
					<div class="">
						<select name="job" class="border border-gray-300 p-2 rounded w-full">
							<option value="">選択してください</option>
							<option v-for="job in jobs" :key="job.id" :value="job.id">
								{{ job.name }}
							</option>
						</select>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-col md:flex-col gap-2 mt-12">

				<div class="mx-auto">
					<p class="m-2">
						<label>
							<input type="checkbox" class="mr-2" />
							<NuxtLink :to="{ path: $localePath('/terms')}" target="_blank" class="text-blue-400 font-bold">{{ $t('register.terms') }}</NuxtLink>{{ $t('register.agree_to') }}
						</label>
					</p>
					<p class="m-2">
						<label>
							<input type="checkbox" class="mr-2" />
							<NuxtLink :to="{ path: $localePath('/privacy')}" target="_blank" class="text-blue-400 font-bold">{{ $t('register.privacy') }}</NuxtLink>{{ $t('register.agree_to') }}
						</label>
					</p>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mt-12">

				<div class="flex flex-1 justify-around mx-auto">
					<div>
					<NuxtLink :to="{ path: $localePath('/account')}" class="bg-gray-900 text-gray-100 dark:bg-gray-100 dark:text-gray-900 hover:bg-gray-600 hover:dark:bg-gray-400 rounded my-5 px-10 p-3">
						{{ $t('register.cancel') }}
					</NuxtLink>
					</div>

					<div>
					<a href="/" class="bg-red-600 text-gray-100 dark:bg-red-600 dark:text-gray-900 hover:bg-red-800 hover:dark:bg-red-800 rounded my-5 px-12 p-3">
						{{ $t('register.register') }}
					</a>
					</div>
				</div>

			</div>

		</div>
	</div>
</template>

<script lang="ts" setup>
	const { data: genders, error } = useAsyncData('genders', () => {
		return $fetch('/api/account/genders', {
			method: 'GET'
		})
	})
	const { data: jobs, error: jobError } = useAsyncData('jobs', () => {
		return $fetch('/api/account/jobs', {
			method: 'GET'
		})
	})
</script>
