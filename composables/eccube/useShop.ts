import { useAsyncData } from "nuxt/app";
import type { ProductListRequest, ProductListResponse, ProductResponse } from "~/server/api/types";

export const useShopList = (payload?: ProductListRequest) => {
    return $fetch<ProductListResponse>('/api/products/list', {
        method: 'POST',
        body: payload,
        credentials: 'include'
    })
}

export const useShopItem = (payload: number) => {
    return $fetch<ProductResponse>(`/api/products/detail/${payload}`, {
        method: 'GET',
        credentials: 'include'
    })
}
