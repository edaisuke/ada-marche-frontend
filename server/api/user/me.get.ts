import { createError, defineEventHandler, getCookie } from "h3"
import { apiFetch } from "~/utils/api"

export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'access_token')
    if (!token) {
        throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
    }

    const user = await apiFetch<{ id: string, name: string, email: string }>('/account/me', {
        headers: { Authorization: `Bearer ${token}` },
    })

    return user
})
