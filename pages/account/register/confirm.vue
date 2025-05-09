<template>
	<div>
		<div class="max-w-4xl mx-auto p-8">

			<h2 class="text-3xl font-bold p-7 text-center">{{ $t('register_confirm.title') }}</h2>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">

					<div>
						<dt class="text-sm font-medium">
							お名前
						</dt>
						<dd class="mt-1 text-base text-gray-900">
							{{ form.last_name }} {{ form.first_name }}
						</dd>
					</div>

					<div>
						<dt class="text-sm font-medium">
							フリガナ
						</dt>
						<dd class="mt-1 text-base text-gray-900">
							{{ form.last_kana }} {{ form.first_kana }}
						</dd>
					</div>

					<div>
						<dt class="text-sm font-medium">表示名</dt>
						<dd class="mt-1 text-base text-gray-900">{{ form.display_name }}</dd>
					</div>

					<div></div>

					<div>
						<dt class="text-sm font-medium">住所</dt>
						<dd class="mt-1 text-base text-gray-900">
							〒{{ form.post_code }}
							<span v-if="prefs.loading.value">
								{{ $t('loading') }}
							</span>
							<span v-else>
								{{ form.prefecture > 0 ? prefs.data.value.find(p => p.id === form.prefecture).name : '未選択' }}
							</span>
							{{ form.address1 }}
							{{ form.address2 }}
							{{ form.address3 }}
						</dd>
					</div>

					<div></div>

					<div>
						<dt class="text-sm font-medium">電話番号</dt>
						<dd class="mt-1 text-base text-gray-900">{{ form.phone_number }}</dd>
					</div>

					<div>
						<dt class="text-sm font-medium">メールアドレス</dt>
						<dd class="mt-1 text-base text-gray-900">{{ form.email }}</dd>
					</div>

					<div>
						<dt class="text-sm font-medium">パスワード</dt>
						<dd class="mt-1 text-base text-gray-900">
							{{ $t('register_confirm.password') }}
							{{ $t('register_confirm.password_hidden') }}
						</dd>
					</div>

					<div></div>

					<div>
						<dt class="text-sm font-medium">生年月日</dt>
						<dd class="mt-1 text-base text-gray-900">
							{{ form.birthday.year }}年
							{{ form.birthday.month }}月
							{{ form.birthday.day }}日
						</dd>
					</div>

					<div>
						<dt class="text-sm font-medium">性別</dt>
						<dd class="mt-1 text-base text-gray-900">
							<span v-if="genders.loading.value">
								{{ $t('loading') }}
							</span>
							<span v-else>
								{{ form.gender > 0 ? genders.data.value.find(g => g.id === form.gender).name : '未選択' }}
							</span>
						</dd>
					</div>

					<div>
						<dt class="text-sm font-medium">職業</dt>
						<dd class="mt-1 text-base text-gray-900">
							<span v-if="jobs.loading.value">
								{{ $t('loading') }}
							</span>
							<span v-else>
								{{ form.job > 0 ? jobs.data.value.find(j => j.id === form.job).name : '未選択' }}
							</span>
						</dd>
					</div>

				</dl>

			</div>

			<div class="mt-10 flex justify-center gap-4">

				<button @click="navigateTo('/account/register')" class="px-6 py-2 rounded bg-gray-400 text-white hover:bg-gray-500">
					戻る
				</button>

				<button @click="submit" class="px-6 py-2 rounded bg-red-600 text-white hover:bg-red-700">
					登録
				</button>

			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { navigateTo } from 'nuxt/app';
	import { useI18n } from 'vue-i18n'
	import { useRegisterFormStore } from '~/stores/registerForm';
	import { useAllSelectables } from '~/composables/useAllSelectables'

	const { t: $t } = useI18n()
	const store = useRegisterFormStore()
	const form = store.formData

	const { prefs, jobs, genders } = useAllSelectables({
		include: ['prefs', 'jobs', 'genders']
	})

	async function submit() {
		const response = await $fetch<{success: boolean}>('/api/account/register', {
			method: 'POST',
			body: form
		})

		console.log(response)

		if (response.success) {
			store.clear()
			navigateTo('/account/register/complete')
		}
	}

</script>
