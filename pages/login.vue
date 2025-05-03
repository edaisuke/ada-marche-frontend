<template>
	<div class="p-8">
		<h2 class="text-2xl mb-4">ログイン</h2>
		<div class="space-y-4">
			<input v-model="email" type="email" placeholder="メールアドレス" class="border p-2 w-full" />
			<input v-model="password" type="password" placeholder="パスワード" class="border p-2 w-full" />
			<button @click="login" class="bg-blue-500 text-white py-2 px-4 rounded">ログイン</button>
		</div>
		<div v-if="token" class="mt-6">
			<p>取得したトークン：</p>
			<code class="block bg-gray-100 p-2 break-words">{{ token }}</code>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const email = ref('');
	const password = ref('')
	const token = ref('')

	const login = async () => {
		try {
			const { data, error } = await useFetch('/api/user/login', {
				method: 'POST',
				body: {
					email: email.value,
					password: password.value
				}
			})

			if (error.value) {
				console.error('ログイン失敗', error.value);
				alert('ログインに失敗しました。')
				return;
			}

			if (!data.success) {
				console.error('ログイン失敗', '不明なエラー')
				alert('ログインに失敗しました。')
			}

			alert('ログイン成功！');
		} catch (e) {
			console.error(e);
			alert('エラーが発生しました。')
		}
	};
</script>
