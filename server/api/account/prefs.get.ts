import { apiFetch } from '~/utils/api'

export default defineEventHandler(async (event) => {
  	return await apiFetch<{ id: number, name: string }>('/account/prefs', {
		method: 'GET',
	})
})
