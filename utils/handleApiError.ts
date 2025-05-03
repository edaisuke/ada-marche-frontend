export const handleApiError = (error: any) => {
    if (error?.response?.status === 401) {
        console.error('認証エラー：ログインが必要です')
        if (process.client) {
            window.location.href = '/login'
        }
    } else if (error?.response?.status === 500) {
        console.error('サーバーエラーが発生しました')
    } else {
        console.error('予期せぬエラー', error)
    }
}