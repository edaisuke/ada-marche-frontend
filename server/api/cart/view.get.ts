import { defineEventHandler } from "h3"
import { apiFetch } from "~/utils/api"

export default defineEventHandler(async (event) => {

	const response = await apiFetch(event, '/cart/view')
	return response

})
