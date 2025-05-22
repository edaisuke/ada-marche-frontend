import { H3Event } from "h3"
import { apiFetch } from "~/utils/api";

export const useApiFetch = <T>(event: H3Event, path: string, options: any = {}): Promise<T> => {
    return apiFetch<T>(event, path, options)
}
