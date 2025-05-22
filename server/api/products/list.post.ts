import { defineEventHandler } from "h3"
import { getProducts } from "../api"

export default defineEventHandler(async (event) => {
	
	const response = await getProducts(event)
	return response

})
