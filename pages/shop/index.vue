<template>
    <div class="max-w-6xl mx-auto p-8 text-center">

        <h2 class="text-3xl font-bold p-7">{{ $t('shop') }}</h2>
        
        <p class="p-4">
            {{ $t('trademark_usage_permission') }}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div
                v-for="product in data"
                :key="product.id"
                class=""
            >
                <div class="p-4">

                </div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

    const { data, pending, error, refresh } = await useAsyncData(
        'products',
        () => $fetch('/api/products')
    );

</script>
