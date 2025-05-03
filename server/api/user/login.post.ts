import { defineEventHandler, readBody, setCookie } from 'h3'
import { apiFetch } from '~/utils/api'
import { Token } from '@/types/Token'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const response = await apiFetch<Token>('/account/login', {
        method: 'POST',
        body,
    })

    setCookie(event, 'access_token', response.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60, // 1h
    })

    return { success: true }
})
