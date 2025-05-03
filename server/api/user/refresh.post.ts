import { createError, defineEventHandler, getCookie, setCookie } from "h3"
import { apiFetch } from "~/utils/api"
import { Token } from "@/types/Token"

export default defineEventHandler(async (event) => {
    const refreshToken = getCookie(event, 'refresh_token')
    if (!refreshToken) {
        throw createError({ statusCode: 401, statusMessage: 'No Refresh Token' })
    }

    const { access_token } = await apiFetch<Token>('/account/refresh', {
        method: 'POST',
        body: { refresh_token: refreshToken },
    })

    setCookie(event, 'access_token', access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60, // 1h
    })

    return { access_token }
})
