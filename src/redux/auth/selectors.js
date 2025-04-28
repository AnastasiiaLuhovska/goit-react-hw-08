export const selectIsLoggedIn = (state) => state.auth.isLoggedIn
export const selectUserName = (state) => state.auth.user.name
export const selectError = (state) => state.auth.error
export const selectIsLoading  = (state) => state.auth.isLoading