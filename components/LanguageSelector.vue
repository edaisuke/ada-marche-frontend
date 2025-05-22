<template>
    <div class="relative inline-block text-left align-top">
        <Menu as="div">
            <MenuButton class="inline-flex items-center justify-center w-full px-2 py-2 text-lg font-medium dark:bg-gray-800 dark:text-gray-100 transition" :title="$t('switch_language')"
            >🌐<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M19 9l-7 7-7-7" />
                </svg>
            </MenuButton>

            <MenuItems class="absolute right-0 mt-1 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded shadow-lg z-50">
                <MenuItem v-for="lang in locales" :key="lang.code">
                    <button
                        @click="setLocale(lang.code)"
                        class="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-100"
                    >
                        <div>{{ lang.emoji }} {{ lang.name }}</div>
                    </button>
                </MenuItem>
            </MenuItems>
        </Menu>
    </div>
</template>

<script setup lang="ts">
    import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

    const { setLocale } = useI18n();

    const locales = [
        { emoji: '🇯🇵', code: 'ja', name: '日本語' },
        { emoji: '🇺🇸', code: 'en', name: 'English' }
    ];

</script>
