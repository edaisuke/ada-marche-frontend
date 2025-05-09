import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

interface StoredItem<T> {
	data: T[]
	timestamp: number
	expiresIn?: number // optional expiration time in milliseconds
}

const STORAGE_KEY = 'selectableStoreCache'
const DEFAULT_CACHE_DURATION = 1000 * 60 * 10 // 10 minutes

function loadFromStorage(): Record<string, StoredItem<any>> {
	try {
		const raw = localStorage.getItem(STORAGE_KEY)
		return raw ? JSON.parse(raw) : {}
	} catch {
		return {}
	}
}

function saveToStorage(data: Record<string, StoredItem<any>>) {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
	} catch {
		// ignore
	}
}

export const useSelectableStore = defineStore('selectables', () => {

	const storeData = ref<Record<string, StoredItem<any>>>(loadFromStorage())

	function setData<T = any>(key: string, data: T[], expiresIn?: number) {
		storeData.value[key] = {
			data,
			timestamp: Date.now(),
			expiresIn: expiresIn ?? DEFAULT_CACHE_DURATION
		}
	}

	function getData<T = any>(key: string): T[] {
		return storeData.value[key]?.data || []
	}

	function hasData(key: string): boolean {
		const item = storeData.value[key]
		if (!item) return false
		const maxAge = item.expiresIn ?? DEFAULT_CACHE_DURATION
		const expired = Date.now() - item.timestamp > maxAge
		return !expired
	}

	function clear(key?: string) {
		if (key) {
			delete storeData.value[key]
		} else {
			storeData.value = {}
		}
	}

	watch(storeData, (val) => {
		saveToStorage(val)
	}, { deep: true})

	return {
		storeData,
		setData,
		getData,
		hasData,
		clear
	}
})
