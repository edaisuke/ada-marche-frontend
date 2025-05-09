import { ref } from "vue"
import type { PostalAddress } from '../types/PostalAddress'

interface ZipCloudResponse {
	status: number
	message: string | null
	results: {
		prefcode: string
		address1: string
		address2: string
		address3: string
		[key: string]: unknown
	}[] | null
}

export const usePostalCodeSearch = () => {
	const results = ref<PostalAddress[]>([])
	const loading = ref(false)
	const error = ref('')
	
	const searchByPostalCode = async (postalCode: string) => {
		results.value = []
		error.value = ''

		const formatted = postalCode.replace('-', '')
		if (!formatted.match(/^\d{7}$/)) {
			error.value = '郵便番号は7桁の数字で入力してください'
			return
		}

		loading.value = true
		try {
			const response = await fetch(
				`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${formatted}`
			)
			const json: ZipCloudResponse = await response.json()

			if (json.status === 200 && json.results) {
				results.value = json.results.map((r) => ({
					prefcode: r.prefcode,
					prefname: r.address1,
					address1: r.address2,
					address2: r.address3,
				}))
			} else {
				error.value = json.message || '住所が見つかりませんでした'
			}
		} catch (e) {
			error.value = '通信エラーが発生しました'
		} finally {
			loading.value = false
		}
	}

	return {
		results,
		loading,
		error,
		searchByPostalCode,
	}
}
