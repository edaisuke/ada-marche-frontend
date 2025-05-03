import { apiFetch } from "~/utils/api"

export default defineEventHandler(async (event) => {
	return await apiFetch('/account/genders', {
		method: 'GET',
	})
})
