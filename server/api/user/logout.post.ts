import { defineEventHandler, deleteCookie } from "h3"

export default defineEventHandler((event) => {
    deleteCookie(event, 'access_token', { path: '/' })
    return { success: true }
})
