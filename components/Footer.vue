<template>
	<footer class="max-w-6xl mx-auto p-8">

		<div class="flex flex-row justify-between mt-10">

			<div class="text-center">
				<img src="/img/ada-marche-com-logo.png" class="dark:invert" :alt="$t('header.title')" />
				For Cardano Community Shopping Site
			</div>

			<div class="grid grid-cols-2 gap-16 mx-16">

				<div class="mt-3">

					<h4 class="font-bold">{{ $t('footer.quick_links') }}</h4>
					<ul class="list-none">
						<li class="mt-3">
							<NuxtLink :to="{ path: $localePath('/') }" :title="$t('footer.home')">
								{{ $t('footer.home') }}
							</NuxtLink>
						</li>
						<li class="mt-2">
							<NuxtLink :to="{ path: $localePath('/shop') }" :title="$t('footer.shop')">
								{{ $t('footer.shop') }}
							</NuxtLink>
						</li>
						<li class="mt-2">
							<NuxtLink :to="{ path: $localePath('/cart') }" :title="$t('footer.cart')">
								{{ $t('footer.cart') }}
							</NuxtLink>
						</li>
						<li class="mt-2">
							<NuxtLink :to="{ path: $localePath('/account') }" :title="$t('footer.account')">
								{{ $t('footer.account') }}
							</NuxtLink>
						</li>
						<li class="mt-2">
							<NuxtLink :to="{ path: $localePath('/contact') }" :title="$t('footer.contact')">
								{{ $t('footer.contact') }}
							</NuxtLink>
						</li>
					</ul>

				</div>

				<div class="mt-3">

					<h4 class="font-bold">{{ $t('footer.about') }}</h4>
					<ul class="list-none">
						<li class="mt-3">
							<NuxtLink :to="{ path: $localePath('/shipping') }" :title="$t('footer.shipping')">
								{{ $t('footer.shipping') }}
							</NuxtLink>
						</li>
						<li class="mt-2">
							<NuxtLink :to="{ path: $localePath('/terms') }" :title="$t('footer.terms')">
								{{ $t('footer.terms') }}
							</NuxtLink>
						</li>
						<li class="mt-2">
							<NuxtLink :to="{ path: $localePath('/privacy') }" :title="$t('footer.privacy')">
								{{ $t('footer.privacy') }}
							</NuxtLink>
						</li>
						<li class="mt-2">
							<NuxtLink :to="{ path: $localePath('/tradelaw') }" :title="$t('footer.tradelaw')">
								{{ $t('footer.tradelaw') }}
							</NuxtLink>
						</li>
					</ul>

				</div>

			</div>

		</div>

		<div class="mt-10 flex justify-between">

			<div>
				<a href="https://www.facebook.com/adamarche.jp" :title="$t('goto.facebook')" target="_blank" class="mr-12">
					<Icon name="prime:facebook" class="text-2xl align-middle" />
				</a>
				<a href="https://twitter.com/@ada_marche" :title="$t('goto.twitter')" target="_blank" class="mr-12">
					<Icon name="prime:twitter" class="text-base align-middle" />
				</a>
				<a href="https://instagram.com/adamarche.jp" :title="$t('goto.instagram')" target="_blank">
					<Icon name="prime:instagram" class="text-2xl align-middle" />
				</a>
			</div>

			<div>
				© 2025-{{ year }} {{ $t('site_name') }}
			</div>

		</div>

	</footer>
</template>

<script lang="ts" setup>
import { DialogTitle } from '@headlessui/vue';

  const d = new Date();
  const year = d.getFullYear();
</script>
