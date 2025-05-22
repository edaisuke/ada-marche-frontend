<template>
	<div :class="{ dark: isDark }" class="min-h-screen">

		<client-only>
			<transition name="fade" appear>
				<div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center">
					<p>Loading...</p>
				</div>
			</transition>
		</client-only>

		<div class="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
			<header class="p-2 flex justify-between">

				<nav class="mt-7 font-medium">
					<NuxtLink :to="{ path: $localePath('/') }" :title="$t('header.home')" class="m-5">{{ $t('home') }}</NuxtLink>
					<NuxtLink :to="{ path: $localePath('/shop') }" :title="$t('header.shop')" class="m-5">{{ $t('shop') }}</NuxtLink>
					<NuxtLink :to="{ path: $localePath('/guide') }" :title="$t('header.guide')" class="m-5">{{ $t('guide') }}</NuxtLink>
					<a class="m-5">Q&amp;A</a>
				</nav>

				<h1 class="text-xl font-bold">
					<NuxtLink :to="{ path: $localePath('/') }" :title="$t('header.title')">
						<Icon name="amc:crown-logo" size="76px" :alt="$t('site_name')" class="w-[76px] h-[76px] dark:invert hover:opacity-70" />
					</NuxtLink>
				</h1>

				<div class="mt-5">

					<Icon name="uil:search" size="1.5em" class="m-2" />
					<NuxtLink :to="{ path: $localePath('/account') }" :title="$t('header.account')">
						<Icon name="line-md:account" size="1.5em" class="m-2" />
					</NuxtLink>
					<div class="inline-block relative">
						<NuxtLink :to="{ path: $localePath('/cart') }" :title="$t('header.cart')">
							<Icon name="streamline:shopping-cart-1" size="1.5em" class="m-2" />
							<span class="absolute top-0 -right-1 text-xs font-bold opacity-90 bg-red-500 text-white rounded-full w-auto px-1.5 h-5 flex items-center justify-center">
								{{ cartCount }}
							</span>
						</NuxtLink>
					</div>

					<button @click="isDark = !isDark" :title="isDark ? $t('theme.light') : $t('theme.dark')" class="px-2 py-2 align-top text-lg" type="button">
						{{ isDark ? '🌞' : '🌙' }}
					</button>

					<LanguageSelector />
					
				</div>

			</header>
			
			<NuxtPage />

			<Footer />
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { useNuxtApp, useState } from 'nuxt/app';
	import { onMounted, ref } from 'vue';
	import LanguageSelector from '~/components/LanguageSelector';
	import Footer from '~/components/Footer';

	const cartCount = useState('cartCount', () => 0)

	const isDark = ref(false)

	const isLoading = ref(true)

	onMounted(() => {
		const nuxtApp = useNuxtApp()

		if (!nuxtApp.isHydrating) {
			finishLoading()
		} else {
			nuxtApp.hook('app:suspense:resolve', () => {
				finishLoading()
			})
		}

		function finishLoading() {
			setTimeout(() => {
				isLoading.value = false
			}, 300) // delay 300ms
		}
	})

</script>
