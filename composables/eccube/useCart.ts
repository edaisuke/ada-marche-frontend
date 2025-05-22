import { useAsyncData } from "nuxt/app"
import type { CartAddRequest, CartAddResponse } from "~/server/api/types"

export const useCart = () => {
    return $fetch('/api/cart/view', { credentials: 'include' })
}

export const useAddToCart = (payload: CartAddRequest) => {
    return $fetch<CartAddResponse>('/api/cart/add', {
        method: 'POST',
        body: payload,
        credentials: 'include'
    })
}
