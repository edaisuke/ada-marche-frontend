<template>
	<div>
		<div class="max-w-6xl mx-auto p-7 text-center">
			
			<h2 class="text-3xl font-bold p-7 text-center">
				{{ $t('checkout.title') }}
			</h2>

			<div>
				<button v-for="wallet in availableWallets" :key="wallet.key" @click="connectWallet(wallet.key)" class="gap-y-6 w-full border rounded">
					<img :src="wallet.icon" width="24" />
					{{ wallet.name }}
				</button>
			</div>

			<div class="text-red-500">
				{{ connectedAddress }}
			</div>

		</div>
	</div>
</template>

<script lang="ts" setup>

	import { onMounted } from 'vue';

	const { availableWallets, connectedAddress, connectWallet } = useCip30Wallets()

	onMounted(async () => {
		console.log('onMounted!')
	})

</script>
