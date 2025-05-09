<template>
	<div :class="{ dark: isDark }" class="min-h-screen">
		<div class="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100">
			<header class="p-2 flex justify-between">

				<nav class="mt-7">
					<NuxtLink :to="{ path: $localePath('/') }" :title="$t('header.home')" class="m-5">{{ $t('home') }}</NuxtLink>
					<NuxtLink :to="{ path: $localePath('/shop') }" :title="$t('header.shop')" class="m-5">{{ $t('shop') }}</NuxtLink>
					<NuxtLink :to="{ path: $localePath('/guide') }" :title="$t('header.guide')" class="m-5">{{ $t('guide') }}</NuxtLink>
				</nav>

				<h1 class="text-xl font-bold">
					<NuxtLink :to="{ path: $localePath('/') }" :title="$t('header.title')">
						<Icon name="amc:crown-logo" size="70px" :alt="$t('site_name')" class="dark:invert" />
					</NuxtLink>
				</h1>

				<div class="mt-5">

					<Icon name="uil:search" size="1.5em" class="m-2" />
					<NuxtLink :to="{ path: $localePath('/account') }" :title="$t('header.account')">
						<Icon name="line-md:account" size="1.5em" class="m-2" />
					</NuxtLink>
					<NuxtLink :to="{ path: $localePath('/cart') }" :title="$t('header.cart')">
						<Icon name="streamline:shopping-cart-1" size="1.5em" class="m-2" />
					</NuxtLink>

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
	import { ref } from 'vue';
	import LanguageSelector from '~/components/LanguageSelector';
	import Footer from '~/components/Footer';

	const isDark = ref(false)

</script>
