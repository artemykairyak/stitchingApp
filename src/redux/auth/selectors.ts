import {RootState} from "../store";

export const getIsLogged = (state: RootState) => state.auth.logged
export const getIsAuthLoading = (state: RootState) => state.auth.loading
export const getAuthErrorText = (state: RootState) => state.auth.errorText
export const getToken = (state: RootState) => state.auth.token
