<template>
	<div class="max-w-6xl mx-auto p-8">
		
		<h2 class="text-3xl font-bold p-7 text-center">{{ $t('products.detail.title') }}</h2>

		<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

			<div class="grow text-center">
				<h3 class="text-3xl font-bold">{{ product.name }}</h3>
			</div>

		</div>

		<div class="flex flex-col sm:flex-row md:flex-row gap-6 m-5">

			<div class="flex-1">

				<div class="flex flex-row-reverse gap-6">

					<div class="">

						<img :src="`/api/products/image/${product.mainListImage.fileName}` || 'https://placehold.co/400x250?text=No+Image'"
							:alt="product.name"
							lazy="lazy"
							class="w-full max-w-lg"
						/>

					</div>

					<ul class="text-left flex flex-col gap-y-6">
						<li
							v-for="image in product.ProductImage"
							:key="image.id"
						>
							<img
								:src="`/api/products/image/${image.fileName}`"
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
					<span v-if="hasClass">
						<span class="font-serif font-regular">₳</span>{{ product.price01Min }}
						～
						<span class="font-serif font-regular">₳</span>{{ product.price01Max }}
					</span>
					<span v-else>
						<span class="font-serif font-regular">₳</span>{{ product.price01Min }}
					</span>
				</div>

				<div class="p-5">
					<span class="text-2xl font-bold text-red-500">
						<span v-if="hasClass">
							<span class="font-serif font-semibold">₳</span>{{ product.price02Min }}
							～
							<span class="font-serif font-semibold">₳</span>{{ product.price02Max }}
						</span>
						<span v-else>
							<span class="font-serif font-semibold">₳</span>{{ product.price02Min }}
						</span>
					</span>
				</div>

				<div class="p-5">
					{{ $t('products.product_code') }} : 
					<span v-if="hasClass">
						{{ product.codeMin }} ～ {{ product.codeMax }}
					</span>
					<span v-else>
						{{ product.codeMin }}
					</span>
				</div>

				<div class="p-5">
					{{ product.descriptionDetail }}
				</div>

				<div class="p-5">
					<div class="font-bold">
						{{ $t('products.detail.relative_category') }}
					</div>
					<ul v-for="category in categories" :key="category" :value="category">
						<li v-for="item in category" :key="item" :value="item" class="inline mt-2">
							<span v-if="item.hierarchy > 1"><Icon name="fluent:caret-right-24-filled" class="text-gray-700" /></span>
							{{ item.name }}
						</li>
					</ul>
				</div>

				<div class="pt-5">

					<div class="w-24">
						{{ $t('products.quantity') }}
						<input type="number" value="1" min="1" class="text-right border border-gray-300 p-2 rounded w-full" />
					</div>

					<div>
						<button type="button" class="bg-red-600 text-gray-100 hover:bg-red-600 rounded my-5 px-10 p-3">
							{{ $t('products.add_cart') }}
						</button>
					</div>

				</div>

			</div>

		</div>

	</div>
</template>

<script lang="ts" setup>

	import { useRoute } from 'nuxt/app';

	const route = useRoute()
	const id = route.params.id

	const response = await $fetch<{ product: any }>(`/api/products/detail/${id}`, {
		method: 'GET'
	})

	const product = response.product
	console.info(product)

	const hasClass = Boolean(product.productClass)

	// カテゴリの処理
	const products = []
	const categories: Array<any> = []
	for (const key in product.ProductCategories) {
		const category = product.ProductCategories[key].Category
		products[category.id] = category
		const tree: Array<any> = []
		for (const idx in category.path) {
			product[category.path[idx]] = category.path[idx]
			if (typeof category.path[idx] === 'number') {
				tree.push(products[category.path[idx]])
			} else {
				tree.push(category.path[idx])
			}
		}
		categories.push(tree)
	}

</script>
