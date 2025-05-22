import { defineEventHandler } from 'h3'
import { apiFetch } from '~/utils/api'

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    
    return await apiFetch(event, `/products/detail/${id}`);
})
