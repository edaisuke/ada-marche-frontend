import { useSelectableData } from "./useSelectableData"

interface UseAllSelectablesOptions {
	urls?: {
		prefs?: string,
		jobs?: string,
		genders?: string
	}
	expiresIn?: number
	include?: ( 'prefs' | 'jobs' | 'genders' )[]
}

export function useAllSelectables(options: UseAllSelectablesOptions = {}) {

	const {
		urls = {},
		expiresIn = 1000 * 60 * 10,	// 10 minutes
		include = [ 'prefs', 'jobs', 'genders' ]
	} = options

	
	const result: any = {}


	if (include.includes('prefs')) {
		result.prefs = useSelectableData({
			fetchUrl: urls.prefs ?? '/api/account/prefs',
			storeKey: 'prefs',
			persistToStore: true,
			expiresIn
		})
	}

	if (include.includes('jobs')) {
		result.jobs = useSelectableData({
			fetchUrl: urls.jobs ?? '/api/account/jobs',
			storeKey: 'jobs',
			persistToStore: true,
			expiresIn
		})
	}

	if (include.includes('genders')) {
		result.genders = useSelectableData({
			fetchUrl: urls.genders ?? '/api/account/genders',
			storeKey: 'genders',
			persistToStore: true,
			expiresIn
		})
	}

	result.refreshAll = async () => {
		await Promise.all(
			['prefs', 'jobs','genders']
				.filter((key) => include.includes(key as any))
				.map((key) => result[key]?.refresh?.())
		)
	}

	return result
}
