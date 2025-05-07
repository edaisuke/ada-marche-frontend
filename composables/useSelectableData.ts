import { onMounted, ref } from "vue"
import { useSelectableStore } from "../stores/selectables"

interface UseSelectableDataOptions<T> {
	fetchUrl: string					// URL to fetch data from
	transform?: (items: T[]) => T[]		// Function to transform the fetched data
	immediate?: boolean					// Whether to fetch data immediately on mount (default: true)
	persistToStore?: boolean			// Whether to persist data to the store
	storeKey?: string					// Key to store the data in the store
	expiresIn?: number					// Expiration time in milliseconds
}


export function useSelectableData<T>(options: UseSelectableDataOptions<T>) {
	const data = ref<T[]>([])
	const loading = ref(false)
	const error = ref<Error | null>(null)

	const store = useSelectableStore()

	const load = async () => {
		loading.value = true
		error.value = null

		try {
			const fetched: T[] = await $fetch(options.fetchUrl)
			const transformed = options.transform ? options.transform(fetched) : fetched
			data.value = transformed

			if (options.persistToStore && options.storeKey) {
				store.setData(options.storeKey, transformed, options.expiresIn)
			}
		} catch (err: any) {
			error.value = err
		} finally {
			loading.value = false
		}
	}

	if (options.persistToStore && options.storeKey && store.hasData(options.storeKey)) {
		data.value = store.getData<T>(options.storeKey)
	}

	if (options.immediate !== false && (!options.persistToStore || !options.storeKey || !store.hasData(options.storeKey))) {
		onMounted(load)
	}

	return {
		data,
		loading,
		error,
		refresh: load
	}
}
