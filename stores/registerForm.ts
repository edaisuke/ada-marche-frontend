import { defineStore } from 'pinia'

const STORAGE_KEY = 'registerForm'

export const useRegisterFormStore = defineStore('registerForm', {
	state: () => ({
		formData: {} as Record<string, any>
	}),
	actions: {
		set(data: Record<string, any>) {
			this.formData = data
			localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
		},
		load() {
			const stored = localStorage.getItem(STORAGE_KEY)
			if (stored) {
				this.formData = JSON.parse(stored)
			}
		},
		clear() {
			this.formData = {}
			localStorage.removeItem(STORAGE_KEY)
		}
	}
})
