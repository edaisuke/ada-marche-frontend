import { handleApiError } from "./handleApiError"
import type { Token } from "~/types/Token"

export const apiFetch = async <T>(path: string, options: any = {}): Promise<T> => {
    const baseURL = process.env.API_BASE_URL || ''

    let token = null

    // SSRならCookieから
    if (process.server) {
    } else {
        // クライアント側
        token = getAccessToken()
    }

    let authHeader = token === null ? {} : { Authorization: `Bearer ${token}` }
    const headers: HeadersInit = {
        ...(options.headers || authHeader),
    }

    try {
        return await $fetch<T>(baseURL + path, {
            ...options,
            headers,
            credentials: 'include',
        })
    } catch (error: any) {
        if (error?.response?.status === 401) {
            console.warn('アクセストークン切れ、リフレッシュ試行中')
            await refreshToken()
            return await $fetch<T>(baseURL + path, {
                ...options,
                headers,
                credentials: 'include',
            })
        }
        handleApiError(error)
        throw error
    }
}

const extractTokenFromCookie = (cookie: string): string | null => {
    const match = cookie.match(/access_token=([^;]+)/)
    return match ? match[1] : null
}

let isRefreshing = false

const getAccessToken = () => {
    return process.client ? localStorage.getItem('access_token') : null
}

const refreshToken = async () => {
    if (isRefreshing) return
    isRefreshing = true

    try {
        const response = await $fetch<Token>('/api/user/refresh', {
            method: 'POST',
            credentials: 'include',
        })
        if (process.server) {
            
        }
        localStorage.setItem('access_token', response.access_token)
    } catch (e) {
        console.error('リフレッシュ失敗', e)
    } finally {
        isRefreshing = false
    }
}
