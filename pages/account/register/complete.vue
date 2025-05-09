<template>
	<div>
		<div class="max-w-4xl mx-auto p-8">
			<h2 class="text-3xl font-bold p-7 text-center">
				{{ $t('register_complete.title') }}
			</h2>

			<p class="text-center mt-5">{{ $t('register_complete.completed') }}</p>
			<p class="text-center mt-3">{{ $t('register_complete.thanks') }}</p>

			<p class="text-center mt-3 text-red-500 font-bold">{{ $t('register_complete.now_temporary_member_status') }}</p>

			<p class="text-center mt-3">{{ $t('register_complete.sent_to_your_email') }}</p>
			<p class="text-center mt-3">{{ $t('register_complete.click_activate_link') }}</p>

		</div>
	</div>
</template>

<script lang="ts" setup>

</script>
