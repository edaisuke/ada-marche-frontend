<template>
	<div class="space-y-1 w-full">
		<div class="relative">
			<input
				:type="passwordVisible ? 'text' : 'password'"
				v-model="rawPassword"
				:placeholder="placeholder"
				:autocomplete="autocomplete"

				class="border border-gray-300 rounded-md p-2 w-full"
			/>
			<button
				type="button"
				@click="passwordVisible = !passwordVisible"
				class="absolute right-2 top-2 text-gray-500 hover:text-gray-800 text-xl"
				:aria-label="t('password.toggle_visibility')"
				tabindex="-1"
			><Icon :name="passwordVisible ? 'mdi:eye-outline' : 'mdi:eye-off-outline'" /></button>
		</div>
		<div class="h-2 bg-gray-200 rounded">
			<div
				class="h-full rounded transition-all duration-300"
				:class="barColor"
				:style="{ width: `${(strictScore + 1) * 20}%` }"
			>
			</div>
		</div>
		<p class="text-sm text-gray-700">{{ t('password.strength') }}: {{ strengthLabel }}</p>

		<div v-if="warning || suggestions.length" class="bg-yellow-50 border border-yellow-300 text-yalllow-800 text-sm rounded-md p-3">
			<p v-if="warning" class="font-semibold">{{ t('password.warning_label') }}: {{ warning }}</p>
			<ul class="list-disc list-inside mt-1 space-y-1">
				<ul v-for="(msg, idx) in suggestions" :key="idx">{{ msg }}</ul>
			</ul>
		</div>

		<ul class="text-sm space-y-1">
			<li :class="hasUpper ? 'text-green-600' : 'text-gray-500'">
				{{ hasUpper ? '✔︎' : '✖︎' }} {{ t('password.checklist.upper') }}
			</li>
			<li :class="hasLower ? 'text-green-600' : 'text-gray-500'">
				{{ hasLower ? '✔︎' : '✖︎' }} {{ t('password.checklist.lower') }}
			</li>
			<li :class="hasNumber ? 'text-green-600' : 'text-gray-500'">
				{{ hasNumber ? '✔︎' : '✖︎' }} {{ t('password.checklist.number') }}
			</li>
			<li :class="hasSymbol ? 'text-green-600' : 'text-gray-500'">
				{{ hasSymbol ? '✔︎' : '✖︎' }} {{ t('password.checklist.symbol') }}
			</li>
			<li :class="hasMinLength ? 'text-green-600' : 'text-gray-500'">
				{{ hasMinLength ? '✔︎' : '✖︎' }} {{ t('password.checklist.length') }}
			</li>
			<li :class="hasRepetitiveChars ? 'text-green-600' : 'text-gray-500'">
				{{ hasRepetitiveChars ? '✔︎' : '✖︎' }} {{ t('password.checklist.repeat') }}
			</li>
			<li :class="hasSequentialChars ? 'text-green-600' : 'text-gray-500'">
				{{ hasSequentialChars ? '✔︎' : '✖︎' }} {{ t('password.checklist.sequence') }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>

import { ref, computed, watch } from 'vue'
import zxcvbn from 'zxcvbn'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Props {
	modelValue?: string
	placeholder?: string
	autocomplete?: string
}

const props = withDefaults(defineProps<Props>(),{
	autocomplete: 'off'
})

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void,
	(e: 'input', value: string): void,
	(e: 'update:score', value: number): void,
	(e: 'update:strictScore', value: number): void
}>()

const passwordVisible = ref(false)
const rawPassword = ref(props.modelValue || '')

watch(() => props.modelValue, (val) => {
	rawPassword.value = val || ''
})

watch(rawPassword, (val) => {
	emit('update:modelValue', val)
	emit('input', val)
})

const hasUpper = computed(() => /[A-Z]/.test(rawPassword.value))
const hasLower = computed(() => /[a-z]/.test(rawPassword.value))
const hasNumber = computed(() => /[0-9]/.test(rawPassword.value))
const hasSymbol = computed(() => /[^A-Za-z0-9]/.test(rawPassword.value))
const hasMinLength = computed(() => rawPassword.value.length >= 10)
const hasRepetitiveChars = computed(() => !/(.)\1{2,}/.test(rawPassword.value))
const hasSequentialChars = computed(() => {
	const lowers = 'abcdefghijklmnopqrstuvwxyz'
	const digits = '0123456789'
	const checkSequence = (str: string) => {
		for (let i = 0; i < str.length - 2; i++) {
			const seq = str.slice(i, i + 3)
			if (lowers.includes(seq) ||
				lowers.split('').reverse().join('').includes(seq) ||
				digits.includes(seq) ||
				digits.split('').reverse().join('').includes(seq)
			) return false
		}
		return true
	}
	return checkSequence(rawPassword.value.toLowerCase())
})


const result = computed(() => zxcvbn(rawPassword.value))
const score = computed(() => result.value.score)

watch(score, (newScore) => {
	emit('update:score', newScore)
})

const strictScore = computed(() => {
	if (score.value < 3) return 0
	const pass = hasUpper.value && hasLower.value && hasNumber.value && hasSymbol.value && hasMinLength.value
	if (score.value >= 4 && pass) return 4
	if (score.value >= 3 && pass) return 3
	return 2
})

watch(strictScore, (newStrictScore) => {
	emit('update:strictScore', newStrictScore)
})

const isStrongPassword = computed(() => {
	return (
		strictScore.value >= 4 &&
		hasRepetitiveChars.value &&
		hasSequentialChars.value
	)
})

const strengthLabel = computed(() => t(`password.strength_level.${strictScore.value}`))
const barColor = computed(() => {
	return [
		'bg-red-500',
		'bg-orange-500',
		'bg-yellow-400',
		'bg-green-500',
		'bg-green-700'
	][strictScore.value]
})

const suggestionMap: Record<string, string> = {
	"Add another word or two. Uncommon words are better.": 'uncommonWords',
	"Avoid sequences like '1234'.": 'avoidSequences',
	"Avoid recent years.": 'avoidRecentYears',
	"Avoid years that are associated with you.": 'avoidPersonalYears',
	"Capitalization doesn't help very much.": 'capsDontHelp',
	"All-uppercase is almost as easy to guess as all-lowercase.": 'allCaps',
	"Reversed words aren't much harder to guess.": 'reversed',
	"Predictable substitutions like '@' instead of 'a' don't help very much.": 'predictableSubstitution',
	"Use a few words, avoid common phrases": 'useFewWords',
	"No need for symbols, digits, or uppercase letters": 'noNeedForSymbols'
}

const warning = computed(() => {
	const w = result.value.feedback.warning
	return w ? t(`password.warning.${w}`, w) : ''
})

const suggestions = computed(() => {
	const s: string[] = result.value.feedback.suggestions
	return s.map((msg) => t(`password.suggestions.${suggestionMap[msg] || msg}`, msg))
})

</script>
