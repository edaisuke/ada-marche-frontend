import { useState } from "nuxt/app";
import { apiFetch } from "~/utils/api";

interface User {
    id: string
    name: string
    email: string
}

export const useAuth = () => {
    const user = useState<User | null>('auth_user', () => null)

    const login = async (email: string, password: string) => {
        await apiFetch('/account/login', {
            method: 'POST',
            body: { email, password },
        })
        await fetchUser()
    }

    const logout = async () => {
        await apiFetch('/account/logout', { method: 'POST' })
        user.value = null
        if ( process.client ) {
            window.location.href = '/login'
        }
    }

    const fetchUser = async () => {
        try {
            const data = await apiFetch<User>('/account/me')
            user.value = data
        } catch {
            user.value = null
        }
    }

    return { user, login, logout, fetchUser }
}
