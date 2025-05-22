<template>
	<div>
		<div v-if="isLoading" class="fixed inset-0 z-50 bg-black text-white flex items-center justify-center">
			<p>Loading...</p>
		</div>
		<NuxtLayout>

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
		}, 300) // Simulate loading time
	})

</script>

<style scoped>

	@keyframes bounce {
		0%, 100% {
			transform: translateY(0);
			opacity: 0.6;
		}
		50% {
			transform: translateY(-12px);
			opacity: 1;
		}
	}

	.animate-bounce {
		animation: bounce 0.8s ease-in-out infinite;
	}

</style>