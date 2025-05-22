import { defineEventHandler, sendRedirect } from 'h3'

export default defineEventHandler(async (event) => {
	console.info(event.node.req.url)
	if (event.node.req.url?.includes('cardano_multiplatform_lib_bg.wasm')) {
		return sendRedirect(event, '/cardano_multiplatform_lib_bg.wasm', 302)
	}
})
