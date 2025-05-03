import { apiFetch } from "~/utils/api";

export const useApiFetch = <T>(path: string, options: any = {}): Promise<T> => {
    return useAsyncData<T>(() => apiFetch<T>(path, options))
}
