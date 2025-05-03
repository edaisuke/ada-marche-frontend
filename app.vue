<template>
	<div>
		<div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-white z-50">
			<div class="flex flex-col gap-1 items-center">
				<div v-for="n in 4" :key="n" class="w-6 h-6 bg-gray-500 animate-bounce" :style="{
					animationDelay: (n * 0.2) + 's'
				}"></div>
			</div>
		</div>
		<NuxtLayout v-else>

			<NuxtPage />
			<!--
			<NuxtRouteAnnouncer />
			<NuxtWelcome />
			-->

		</NuxtLayout>

  	</div>
</template>

<script setup lang="ts">
	import { onMounted, ref } from 'vue';

	const isLoading = ref(true)

	onMounted(() => {
		setTimeout(() => {
			isLoading.value = false
		}, 1800) // Simulate loading time
	})

</script>

<style scoped>

	@keyframes bounce {
		0%, 100% {
			transform: translateY(0);
			opcity: 0.6;
		}
		50% {
			transform: translateY(-12px);
			opcity: 1;
		}
	}

	.animate-bounce {
		animation: bounce 0.8s ease-in-out infinite;
	}

</style>