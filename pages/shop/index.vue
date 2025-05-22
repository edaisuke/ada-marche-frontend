<template>
    <div class="max-w-6xl mx-auto p-8 text-center">

        <h2 class="text-3xl font-bold p-7">{{ $t('shop') }}</h2>
        
        <p class="p-4">
            {{ $t('trademark_usage_permission') }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
                v-for="product in products"
                :key="product.id"
                class="bg-white dark:bg-gray-800 rounded shadow hover:shadow-md transition duration-300"
            >
                <NuxtLink :to="{ path: $localePath(`/shop/detail/${product.id}`) }">
                    <img
                        :src="`/api/products/image/${product.main_image.file_name}` || 'https://placehold.co/400x250?text=No+Image'"
                        :alt="product.name"
                        lazy="lazy"
                        class="w-full h-72 object-cover rounded"
                    />
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
                            {{ product.name }}
                        </h3>
                        <p class="text-indigo-600 dark:text-indigo-400 font-bold text-xl mt-2">
                            {{ $t('price_p') }}{{ product.price02_min }}{{ $t('price_s') }}
                        </p>
                    </div>
                </NuxtLink>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

    import { useHead } from "nuxt/app"
    import { useShopList } from "~/composables/eccube/useShop"

    useHead({
        title: '商品一覧'
    })

    const response = await useShopList()
    const products = response.products

</script>
