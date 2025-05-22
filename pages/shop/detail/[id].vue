<template>
	<div class="max-w-6xl mx-auto p-8">
		
		<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

			<div class="grow text-center">
				<h2 class="text-3xl font-bold">{{ product.name }}</h2>
			</div>

		</div>

		<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

			<div class="flex-1">

				<div class="flex flex-row-reverse gap-6">

					<div class="">

						<img :src="`/api/products/image/${product.main_image.file_name}` || 'https://placehold.co/400x250?text=No+Image'"
							:alt="product.name"
							lazy="lazy"
							class="w-full max-w-lg"
						/>

					</div>

					<ul class="text-left flex flex-col gap-y-6">
						<li
							v-for="image in product.product_images"
							:key="image.id"
						>
							<img
								:src="`/api/products/image/${image.file_name}` || 'https://placehold.co/400x250?text=No+Image'"
								:alt="product.name"
								lazy="lazy"
								class="max-w-16"
							/>
						</li>
					</ul>

				</div>

			</div>

			<div class="flex-1 divide-y">

				<div class="pt-3">
					{{ $t('products.regular_price') }} : 
					<span v-if="product.has_product_class">
						<span class="font-serif font-regular">₳</span>{{ product.price01_min }}
						～
						<span class="font-serif font-regular">₳</span>{{ product.price01_max }}
					</span>
					<span v-else>
						<span class="font-serif font-regular">₳</span>{{ product.price01_min }}
					</span>
				</div>

				<div class="p-5">
					<span class="text-2xl font-bold text-red-500">
						<span v-if="product.has_product_class">
							<span class="font-serif font-semibold">₳</span>{{ product.price02_min }}
							～
							<span class="font-serif font-semibold">₳</span>{{ product.price02_max }}
						</span>
						<span v-else>
							<span class="font-serif font-semibold">₳</span>{{ product.price02_min }}
						</span>
					</span>
				</div>

				<div class="p-5">
					{{ $t('products.product_code') }} : 
					<span v-if="product.has_product_class">
						{{ product.code_min }} ～ {{ product.code_max }}
					</span>
					<span v-else>
						{{ product.code_min }}
					</span>
				</div>

				<div class="p-5">
					{{ product.description }}
				</div>

				<div class="p-5">
					<div class="font-bold">
						{{ $t('products.detail.relative_category') }}
					</div>
					<ul v-for="categories in product.categories" :value="categories">
						<li v-for="category in categories" :key="category.id" class="inline mt-2">
							<span><Icon name="fluent:caret-right-24-filled" class="text-gray-700" /></span>
							<NuxtLink :to="{ path: $localePath('/shop'), query: { category: category.id } }">
								{{ category.name }}
							</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="pt-5">

					<div class="w-24">
						{{ $t('products.quantity') }}
						<input v-model="quantity" type="number" min="1" class="text-right border border-gray-300 p-2 rounded w-full" />
					</div>

					<div>
						<button type="button" @click="addToCart" class="bg-red-600 text-gray-100 hover:bg-red-600 rounded my-5 px-10 p-3">
							{{ $t('products.add_cart') }}
						</button>
					</div>

				</div>

			</div>

		</div>

	</div>
</template>

<script lang="ts" setup>

	import { useHead, useRoute, useState } from 'nuxt/app'
	import { computed, ref } from 'vue'
	import { useAddToCart } from "~/composables/eccube/useCart"
	import { useShopItem } from '~/composables/eccube/useShop'

	const cartCount = useState('cartCount', () => 0)

	const route = useRoute()
	const id = route.params.id

	const quantity = ref(1);

	const { product, success, messages } = await useShopItem(Number(id))
	if (!success) {
		console.warn(messages)
	}

	useHead({
		title: computed(() => product ? product.name : '商品詳細')
	})

	async function addToCart() {
		
		const response = await useAddToCart({
			product_class_id: product.product_classes[0].id,
			quantity: quantity.value
		})

		if (response.success) {
			cartCount.value = response.cart_count
		} else {
			console.info(response)
		}
	}

</script>
