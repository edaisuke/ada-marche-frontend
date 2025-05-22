import { defineEventHandler, readBody } from "h3"
import { addToCart } from "~/server/api/api"

export default defineEventHandler(async (event) => {

  	const body = await readBody(event)

	return await addToCart(event, body)

})
