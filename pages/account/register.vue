<template>
	<form @submit.prevent="submit">
		<div class="max-w-6xl mx-auto p-16 md:px-32">

			<h2 class="text-3xl font-bold p-7 text-center">{{ $t('register.title') }}</h2>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.last_name') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input v-model="form.last_name" @blur="touched.last_name = true" @input="touched.last_name && validateField('last_name')" type="text" :placeholder="$t('register.last_name')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.last_name">
							{{ errors.last_name }}
						</p>
					</div>
				</div>

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.first_name') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input v-model="form.first_name" @blur="touched.first_name = true" @input="touched.first_name && validateField('first_name')" type="text" :placeholder="$t('register.first_name')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.first_name">
							{{ errors.first_name }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.last_kana') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input v-model="form.last_kana" @blur="touched.last_kana = true" @input="touched.last_kana && validateField('last_kana')" type="text" :placeholder="$t('register.last_kana')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.last_kana">
							{{ errors.last_kana }}
						</p>
					</div>
				</div>

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.first_kana') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input v-model="form.first_kana" @blur="touched.first_kana = true" @input="touched.first_kana && validateField('first_kana')" type="text" :placeholder="$t('register.first_kana')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.first_kana">
							{{ errors.first_kana }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.display_name') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input v-model="form.display_name" @blur="touched.display_name = true" @input="touched.display_name && validateField('display_name')" type="text" :placeholder="$t('register.display_name')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.display_name">
							{{ errors.display_name }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.post_code') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input v-model="form.post_code" @blur="touched.post_code = true" @input="touched.post_code && validateField('post_code')" type="text" :placeholder="$t('register.post_code')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.post_code">
							{{ errors.post_code }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.prefecture') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<select name="prefecture" v-model.number="form.prefecture" @change="touched.prefecture = true; validateField('prefecture')" class="border border-gray-300 p-2 rounded w-full">
							<option value="0">選択してください</option>
							<option v-for="pref in prefs" :key="pref.id" :value="pref.id">
								{{ pref.name }}
							</option>
						</select>
						<p class="text-red-500 text-sm" v-if="errors.prefecture">
							{{ errors.prefecture }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.address1') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" v-model="form.address1" @blur="touched.address1 = true" @input="touched.address1 && validateField('address1')" :placeholder="$t('register.address1')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.address1">
							{{ errors.address1 }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.address2') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="text" v-model="form.address2" @blur="touched.address2 = true" @input="touched.address2 && validateField('address2')" :placeholder="$t('register.address2')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.address2">
							{{ errors.address2 }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2 mb-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.address3') }}
					</label>
					<div class="">
						<input type="text" v-model="form.address3" @blur="touched.address3 = true" @input="touched.address3 && validateField('address3')" :placeholder="$t('register.address3')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.address3">
							{{ errors.address3 }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.phone_number') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="number" v-model="form.phone_number" @blur="touched.phone_number = true" @input="touched.phone_number && validateField('phone_number')" :placeholder="$t('register.phone_number')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.phone_number">
							{{ errors.phone_number }}
						</p>
					</div>
				</div>
			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.email') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="email" v-model="form.email" @blur="touched.email = true" @input="touched.email && validateField('email')" :placeholder="$t('register.email')" autocomplete="username" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.email">
							{{ errors.email }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2 mb-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.email_confirm') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="email" v-model="form.email_confirm" @blur="touched.email_confirm = true" @input="touched.email_confirm && validateField('email_confirm')" :placeholder="$t('register.email_confirm')" autocomplete="username" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.email_confirm">
							{{ errors.email_confirm }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.password') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<PasswordStrengthBar v-model="form.password" @update:score="handleScore" @blur="touched.password = true" @input="touched.password && validateField('password')" :placeholder="$t('register.password')" autocomplete="new-password" />
						<p class="text-red-500 text-sm" v-if="errors.password">
							{{ errors.password }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2 mb-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.password_confirm') }}
					</label> <span class="text-red-500">*</span>
					<div class="">
						<input type="password" v-model="form.password_confirm" @blur="touched.password_confirm = true" @input="touched.password_confirm && validateField('password_confirm')" :placeholder="$t('register.password_confirm')" autocomplete="new-password" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.password_confirm">
							{{ errors.password_confirm }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.birthday') }}
					</label>
					<div class="">
						<input type="text" v-model="form.birthday" @blur="touched.birthday = true" @input="touched.birthday && validateField('birthday')" :placeholder="$t('register.birthday')" class="border border-gray-300 p-2 rounded w-full" />
						<p class="text-red-500 text-sm" v-if="errors.birthday">
							{{ errors.birthday }}
						</p>
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
								<input type="radio" v-model.number="form.gender" @change="touched.gender = true; validateField('gender')" name="gender" :value="gender.id" />
								{{ gender.name }}
							</label>
						</span>
						<p class="text-red-500 text-sm" v-if="errors.gender">
							{{ errors.gender }}
						</p>
					</div>
				</div>

			</div>
			
			<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.job') }}
					</label>
					<div class="">
						<select name="job" v-model.number="form.job" @change="touched.job = true; validateField('job')" class="border border-gray-300 p-2 rounded w-full">
							<option value="0">選択してください</option>
							<option v-for="job in jobs" :key="job.id" :value="job.id">
								{{ job.name }}
							</option>
						</select>
						<p class="text-red-500 text-sm" v-if="errors.job">
							{{ errors.job }}
						</p>
					</div>
				</div>

			</div>

			<div class="flex flex-col sm:flex-col md:flex-col gap-2 mt-12">

				<div class="mx-auto">
					<p class="m-2">
						<label>
							<input type="checkbox" v-model="form.terms" @change="touched.terms = true; validateField('terms')" class="mr-2" />
							<NuxtLink :to="{ path: $localePath('/terms')}" target="_blank" class="text-blue-400 font-bold">{{ $t('register.terms') }}</NuxtLink>{{ $t('register.agree_to') }}
						</label>
						<p class="text-red-500 text-sm" v-if="errors.terms">
							{{ errors.terms }}
						</p>
					</p>
					<p class="m-2">
						<label>
							<input type="checkbox" v-model="form.privacy" @change="touched.privacy = true; validateField('privacy')" class="mr-2" />
							<NuxtLink :to="{ path: $localePath('/privacy')}" target="_blank" class="text-blue-400 font-bold">{{ $t('register.privacy') }}</NuxtLink>{{ $t('register.agree_to') }}
						</label>
						<p class="text-red-500 text-sm" v-if="errors.privacy">
							{{ errors.privacy }}
						</p>
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
					<a @click="submit()" class="cursor-pointer bg-red-600 text-gray-100 dark:bg-red-600 dark:text-gray-900 hover:bg-red-800 hover:dark:bg-red-800 rounded my-5 px-12 p-3">
						{{ $t('register.register') }}
					</a>
					</div>
				</div>

			</div>

		</div>
	</form>
</template>

<script lang="ts" setup>

	import { useI18n } from 'vue-i18n'
	import { useAsyncData } from 'nuxt/app'
	import { ref } from 'vue'
	import { z } from 'zod'
	import PasswordStrengthBar from '~/components/PasswordStrengthBar'

	const { t: $t } = useI18n()

	const schema = z.object({
		last_name: z.string().min(1, $t('register.error.last_name.required')),
		first_name: z.string().min(1, $t('register.error.first_name.required')),
		last_kana: z.string().min(1, $t('register.error.last_kana.required')),
		first_kana: z.string().min(1, $t('register.error.first_kana.required')),
		display_name: z.string().min(1, $t('register.error.display_name.required')),
		post_code: z.string().length(7, $t('register.error.post_code.required')),
		prefecture: z.number().min(1, $t('register.error.prefecture.required')),
		address1: z.string().min(1, $t('register.error.address1.required')),
		address2: z.string().min(1, $t('register.error.address2.required')),
		address3: z.string().optional(),
		phone_number: z.number().min(10, $t('register.error.phone_number.required')),
		email: z.string().min(1, $t('register.error.email.required')).email($t('register.error.email.invalid')),
		email_confirm: z.string(),
		password: z
			.string()
			.min(10, $t('register.error.password.min'))
			.refine((val) => passwordScore.value > 1, $t('register.error.password.weak')),
		password_confirm: z.string(),
		birthday: z.string().optional(),
		gender: z
			.number()
			.optional()
			.refine(val => !val || val > 0, $t('register.error.gender.invalid')),
		job: z
			.number()
			.optional()
			.refine(val => !val || val > 0, $t('register.error.job.invalid')),
		terms: z.boolean().refine(val => val === true, $t('register.error.terms.required')),
		privacy: z.boolean().refine(val => val === true, $t('register.error.privacy.required'))
	})

	const form = ref({
		last_name: '',
		first_name: '',
		last_kana: '',
		first_kana: '',
		display_name: '',
		post_code: '',
		prefecture: 0,
		address1: '',
		address2: '',
		address3: '',
		phone_number: '',
		email: '',
		email_confirm: '',
		password: '',
		password_confirm: '',
		birthday: '',
		gender: 0,
		job: 0,
		terms: false,
		privacy: false
	})

	const touched = ref<Record<keyof typeof form.value, boolean>>(
		Object.fromEntries(
			Object.keys(form.value).map(k => [k, false])
		) as Record<keyof typeof form.value, boolean>
	)

	const passwordScore = ref<number>(0)

	const errors = ref(createEmptyErrors())

	function handleScore(score: number) {
		passwordScore.value = score
	}

	function validateField(field: keyof typeof form.value) {
		if (!touched.value[field]) {
			return
		}

		if (field === 'password_confirm') {
			errors.value.password_confirm = form.value.password === form.value.password_confirm
				? ''
				: $t('register.error.password.same')
			return
		}
		if (field === 'email_confirm') {
			errors.value.email_confirm = form.value.email === form.value.email_confirm
				? ''
				: $t('register.error.email.same')
			return
		}

		const singleSchema = schema.pick({ [field]: true } as Record<keyof typeof form.value, true>)

		try {
			singleSchema.parse({ [field]: form.value[field] })
			errors.value[field] = ''
		} catch (e: any) {
			errors.value[field] = e.errors?.[0]?.message || ''
		}
	}

	function createEmptyErrors(): Record<keyof typeof form.value, string> {
		return Object.fromEntries(
			Object.keys(form.value).map(key => [key, ''])
		) as Record<keyof typeof form.value, string>
	}

	const submit = async () => {
		errors.value = createEmptyErrors()

		const fullSchema = schema
			.refine(data => data.password === data.password_confirm, {
					message: $t('register.error.password.confirm'),
					path: ['password_confirm']
			})
			.refine(data => data.email === data.email_confirm, {
					message: $t('register.error.email.confirm'),
					path: ['email_confirm']
			})

		const result = fullSchema.safeParse(form.value)

		if (!result.success) {
			for (const err of result.error.errors) {
				const field = err.path[0] as keyof typeof form.value
				errors.value[field] = err.message
			}
			return
		}

		const { error } = await useAsyncData('register', () => {
			return $fetch('/api/account/register', {
				method: 'POST',
				body: form.value
			})
		})

		if (error.value) {
			// エラーメッセージ
		} else {
			// Redirect to success page
			window.location.href = '/account/register/success'
		}
	}


	const { data: genders, error: genderError } = useAsyncData<{ Gender: { id: number, name: string } }>('genders', () => {
		return $fetch('/api/account/genders', {
			method: 'GET'
		})
	})
	const { data: jobs, error: jobError } = useAsyncData<{ Job: { id: number, name: string } }>('jobs', () => {
		return $fetch('/api/account/jobs', {
			method: 'GET'
		})
	})
	const { data: prefs, error: prefError } = useAsyncData<{ Pref: { id: number, name: string } }>('prefs', () => {
		return $fetch('/api/account/prefs', {
			method: 'GET'
		})
	})
</script>
