import { apiFetch } from "~/utils/api";

export default defineEventHandler(async (event) => {
    const products = await apiFetch('/products')
    return products
});
