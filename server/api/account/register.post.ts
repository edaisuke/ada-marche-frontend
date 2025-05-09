import { defineEventHandler, isMethod, readBody } from "h3"
import { apiFetch } from "~/utils/api"

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const response = await apiFetch('/account/register', {
		method: 'POST',
		body,
    })

	return response
})
