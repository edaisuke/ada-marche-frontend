import { H3Event } from "h3"
import { apiFetch } from "~/utils/api";
import { CartAddRequest, CartAddResponse, ProductListRequest, ProductListResponse, ProductResponse } from "~/server/api/types";


export const getProducts = (event: H3Event, payload?: ProductListRequest) => {
    return apiFetch<ProductListResponse>(event, '/products/list', {
        method: 'POST',
        body: payload
    })
}


export const getProduct = (event: H3Event, product_id: number) => {
    return apiFetch<ProductResponse>(event, `/products/detail/${product_id}`, {
        method: 'GET'
    })
}


export const addToCart = (event: H3Event, payload: CartAddRequest) => {
    return apiFetch<CartAddResponse>(event, '/cart/add', {
        method: 'POST',
        body: payload
    })
}
