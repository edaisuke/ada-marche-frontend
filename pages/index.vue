<template>
    <div>
        <section class="bg-[url(/img/ada-marche-9.webp)] bg-cover bg-repeat-none bg-center py-64">
            <div class="max-w-6xl mx-auto">
                <div class="text-4xl font-sans font-bold dark:text-gray-900 my-10">
                    For Cardano Community<br />
                    Shopping Site
                </div>
                <div class="my-5">
                    <NuxtLink :to="{ path: $localePath('/shop') }" class="text-sm bg-gray-900 text-gray-100 rounded p-3" :title="$t('top.shop_now')">
                        SHOP NOW
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
    <div class="max-w-6xl mx-auto p-8">
        <!-- <h1 class="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">{{ $t('title') }}</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
                v-for="product in products"
                :key="product.id"
                class="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
                <img
                    :src="`/api/product/image/${product.image}` || 'https://placehold.co/400x250?text=No+Image'"
                    alt=""
                    lazy="lazy"
                    class="w-full h-48 object-cover rounded-t-2xl"
                />
                <div class="p-4">
                    <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-100 truncate">
                        {{ product.name }}
                    </h2>
                    <p class="text-indigo-600 dark:text-indigo-400 font-bold text-xl mt-2">
                        {{ $t('price') }}: \{{ product.price }}
                    </p>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script setup lang="ts">
    // const { data: products, error } = useAsyncData('products', () => {
    //     console.log('🔄 API呼び出し中...')
    //     return $fetch('/api/products')
    // })
</script>
