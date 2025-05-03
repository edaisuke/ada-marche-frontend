import { defineEventHandler } from 'h3';
import { apiFetch } from '~/utils/api';

export default defineEventHandler(async (event) => {
    const filename = event?.context?.params?.filename;
    if (!filename) {
        return 'No filename provided'
    }

    return await apiFetch(`/product/image/${filename}`);
})
