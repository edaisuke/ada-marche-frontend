<template>
	<div>
		<div class="max-w-6xl mx-auto p-16 md:px-32">

			<h2 class="text-3xl font-bold p-7 text-center">
				{{ $t('cart.view.title') }}
			</h2>

			<div class="">

				<div class="mx-12">

					<div class="table w-full">

						<ol class="table-row">
							<li class="table-cell">
								{{ $t('cart.view.product_delete') }}
							</li>
							<li class="table-cell">
								{{ $t('cart.view.product_summary') }}
							</li>
							<li class="table-cell">
								{{ $t('cart.view.product_amount') }}
							</li>
							<li class="table-cell">
								{{ $t('cart.view.product_subtotal') }}
							</li>
						</ol>

						<ul v-for="product in products?.items" :key="product.id" class="table-row">
							<li class="table-cell">
								{{ product.product_class_id }}
								<Icon name="line-md:remove" class="" />
							</li>
							<li class="table-cell">
								{{ product.image }}
								{{ product.name }}
								{{ product.price }}
							</li>
							<li class="table-cell">
								{{ product.quantity }}
							</li>
							<li class="table-cell">
								{{ product.subtotal }}
							</li>
						</ul>
					</div>

					<div class="text-right">
						<span class="font-semibold text-lg">{{ $t('total') }} : </span>
						<span class="font-semibold font-serif text-2xl text-red-600">{{ $t('price_p') }}</span>
						<span class="font-bold text-2xl text-red-600">{{ products?.total }}</span>
						<span class="font-semibold font-serif text-2xl text-red-600">{{ $t('price_s') }}</span>
					</div>

				</div>

			</div>

		</div>
	</div>
</template>

<script lang="ts" setup>

	import { useAsyncData } from 'nuxt/app';

	const { data: products, error } = useAsyncData<{
		success: boolean
		items: {
			id: number
			image: string
			name: string
			price: string
			product_class_id: number
			quantity: number
			subtotal: number
		}[],
		count: number
		total: string
	}>('products', () =>
		$fetch('/api/cart/view', {
			credentials: 'include'
		})
	)

</script>
