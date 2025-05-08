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
						<input v-model="form.last_kana" @blur="touched.last_kana = true" @input="form.last_kana = toFullWidthKatakana(form.last_kana); touched.last_kana && validateField('last_kana')" type="text" :placeholder="$t('register.last_kana')" class="border border-gray-300 p-2 rounded w-full" />
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
						<input v-model="form.first_kana" @blur="touched.first_kana = true" @input="form.first_kana = toFullWidthKatakana(form.first_kana); touched.first_kana && validateField('first_kana')" type="text" :placeholder="$t('register.first_kana')" class="border border-gray-300 p-2 rounded w-full" />
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

				<div class="flex-1 content-end">
					<button type="button" @click="handleSearch" class="bg-blue-600 text-white px-4 py-2 bottom-0 rounded">
						郵便番号で検索
					</button>
					<div v-if="error" class="text-red-500 text-sm">{{ error }}</div>

					<PostalCandidateModal
						:show="showModal"
						:candidates="results"
						@select="onSelect"
						@close="showModal = false"
					/>
				</div>

			</div>

			<div class="flex flex-col sm:flex-row md:flex-row gap-6 mx-5 mt-2">

				<div class="flex-1">
					<label class="font-bold">
						{{ $t('register.prefecture') }}
					</label> <span class="text-red-500">*</span>
					<div class="relative w-full max-w-md">
						<select v-model.number="form.prefecture" :disabled="prefs.loading.value" @change="touched.prefecture = true; validateField('prefecture')" class="border border-gray-300 p-2 rounded w-full">
							<option value="0">
								{{ prefs.loading.value ? $t('register.loading') : $t('register.select') }}
							</option>
							<option v-for="p in prefs.data.value" :key="p.id" :value="p.id">
								{{ p.name }}
							</option>
						</select>
						<Icon v-if="prefs.loading.value" name="mdi:loading" class="absolute right-8 top-2.5 animate-spin text-blue-400 text-xl" />
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
						<input type="tel" v-model="form.phone_number" @blur="touched.phone_number = true" @input="touched.phone_number && validateField('phone_number')" :placeholder="$t('register.phone_number')" class="border border-gray-300 p-2 rounded w-full" />
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
						<PasswordStrengthBar v-model="form.password" @update:score="handleScore" @update:strictScore="handleStrictScore" @blur="touched.password = true" @input="touched.password && validateField('password')" :placeholder="$t('register.password')" autocomplete="new-password" />
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
						<select v-model="form.birthday.year" class="border rounded p-2">
							<option value="0">年</option>
							<option v-for="y in years" :key="y" :value="y">{{ y }}年</option>
						</select>
						<select v-model="form.birthday.month" class="border rounded p-2">
							<option value="0">月</option>
							<option v-for="m in 12" :key="m" :value="m">{{ m }}月</option>
						</select>
						<select v-model="form.birthday.day" class="border rounded p-2">
							<option value="0">日</option>
							<option v-for="d in daysInMonth" :key="d" :value="d">{{ d }}日</option>
						</select>
						<!--
						<input type="text" v-model="form.birthday" @blur="touched.birthday = true" @input="touched.birthday && validateField('birthday')" :placeholder="$t('register.birthday')" class="border border-gray-300 p-2 rounded w-full" />
						-->
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
						<span v-if="genders.loading.value">
							<Icon v-if="prefs.loading.value" name="mdi:loading" class="absolute left-8 top-2.5 animate-spin text-blue-400 text-xl" />
							{{ $t('register.loading') }}
						</span>
						<span v-else
							v-for="gender in genders.data.value"
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
					<div class="relative">
						<select name="job" v-model.number="form.job" :disabled="jobs.loading.value" @change="touched.job = true; validateField('job')" class="border border-gray-300 p-2 rounded w-full">
							<option value="0">
								{{ jobs.loading.value ? $t('register.loading') : $t('register.select') }}
							</option>
							<option v-for="job in jobs.data.value" :key="job.id" :value="job.id">
								{{ job.name }}
							</option>
						</select>
						<Icon v-if="prefs.loading.value" name="mdi:loading" class="absolute right-8 top-2.5 animate-spin text-blue-400 text-xl" />

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
	import { computed, ref, watch, watchEffect } from 'vue'
	import { z } from 'zod'
	import { useAllSelectables } from '../../composables/useAllSelectables'
	import { usePostalCodeSearch } from '../../composables/usePostalCodeSearch'
	import PasswordStrengthBar from '~/components/PasswordStrengthBar'
	import PostalCandidateModal from '../../components/PostalCandidateModal'

	const { t: $t } = useI18n()

	const { prefs, jobs, genders, refreshAll } = useAllSelectables({
		include: ['prefs', 'jobs', 'genders']
	})

	// カタカナ変換関数
	function toFullWidthKatakana(input: string): string {
		if (!input) return ''

		// ひらがな → カタカナ変換
		let text = input.replace(/[\u3041-\u3096]/g, s =>
			String.fromCharCode(s.charCodeAt(0) + 0x60)
		)
		// 半角カナ → 全角カナ（代表的なもののみ）
		text = text.replace(/[\uff61-\uff9f]/g, (s) =>
			String.fromCharCode(s.charCodeAt(0) + 0x60)
		)

		// 空白・句読点・記号の除去
		text = text.replace(/[。、・･｡｢｣｢｣､｀¨!！"“”#$%&'‘’()（）*+,-.／:;<=>?＠\[\\\]^_`{|}~ 　\t\r\n]/g, '')

		return text
	}

	// パスワードのスキーマ
	const passwordSchema = z
		.string()
		.trim()
		.min(10, $t('register.error.password.min'))
		.nonempty($t('register.error.password.required'))
		.superRefine((val, ctx) => {
			if (passwordStrictScore.value < 4) {
				ctx.addIssue({
					code: z.ZodIssueCode.custom,
					message: $t('register.error.password.weak')
				})
			}
		})

	// 全角カタカナ・長音記号のみ（空白禁止）
	const fullWidthKatakanaRegex = /^[\u30A0-\u30FFー]+$/

	const schema = z.object({
		last_name: z.string().min(1, $t('register.error.last_name.required')),
		first_name: z.string().min(1, $t('register.error.first_name.required')),
		last_kana: z
			.string()
			.min(1, $t('register.error.last_kana.required'))
			.regex(fullWidthKatakanaRegex, $t('register.error.last_kana.katakana')),
		first_kana: z
			.string()
			.min(1, $t('register.error.first_kana.required'))
			.regex(fullWidthKatakanaRegex, $t('register.error.first_kana.katakana')),
		display_name: z.string().min(1, $t('register.error.display_name.required')),
		post_code: z
			.string()
			.regex(/^\d{3}\-?\d{4}/, $t('register.error.post_code.regex'))
			.min(1, $t('register.error.post_code.required'))
			.max(8, $t('register.error.post_code.max')),
		prefecture: z.number().min(1, $t('register.error.prefecture.required')),
		address1: z.string().min(1, $t('register.error.address1.required')),
		address2: z.string().min(1, $t('register.error.address2.required')),
		address3: z.string().optional(),
		phone_number: z
			.string()
			.min(10, $t('register.error.phone_number.required'))
			.regex(/^\d+$/, $t('register.error.phone_number.only_number')),
		email: z
			.string()
			.min(1, $t('register.error.email.required'))
			.email($t('register.error.email.invalid')),
		email_confirm: z.string(),
		password: passwordSchema,
		password_confirm: z
			.string()
			.min(10, $t('register.error.password_confirm.min')),
		birthday: z
			.object({
				year: z
					.number()
					.optional(),
				month: z
					.number()
					.optional(),
				day: z
					.number()
					.optional()
			})
			.refine(({ year, month, day }) => {
				if (year === 0 && month === 0 && day === 0) return true
				const date = new Date(`${year}-${month}-${day}`)
				return !isNaN(date.getTime())
			}, {
				message: '正しい日付を選択してください',
				path: ['birthday']
			}),
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
		birthday: {
			year: 0,
			month: 0,
			day: 0
		},
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
	const passwordStrictScore = ref<number>(0)

	const errors = ref(createEmptyErrors())

	function handleScore(score: number) {
		passwordScore.value = score
	}

	function handleStrictScore(score: number) {
		passwordStrictScore.value = score
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
					message: $t('register.error.password_confirm.same'),
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


	// 生年月日
	const years = computed(() => {
		const current = new Date().getFullYear() - 15
		return Array.from({ length: 85 }, (_, i) => current - i) // 100 years ago
	})

	const daysInMonth = computed(() => {
		const y = Number(form.value.birthday.year)
		const m = Number(form.value.birthday.month)
		if (!y || !m) return []
		return new Date(y, m, 0).getDate()
			? Array.from({ length: new Date(y, m, 0).getDate() }, (_, i) => i + 1)
			: []
	})


	// 郵便番号検索
	const {
		results,
		loading,
		error,
		searchByPostalCode,
	} = usePostalCodeSearch()

	const showModal = ref(false)

	const handleSearch = async () => {
		await searchByPostalCode(form.value.post_code)

		if (results.value.length === 1) {
			applyResult(0)
		} else if (results.value.length > 1) {
			showModal.value = true
		}
	}

	const applyResult = (index: number) => {
		const result = results.value[index]
		form.value.prefecture = Number(result.prefcode)
		form.value.address1 = result.address1
		form.value.address2 = result.address2
	}

	const onSelect = (index: number) => {
		applyResult(index)
		showModal.value = false
	}

</script>
