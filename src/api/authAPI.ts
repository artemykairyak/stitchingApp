import API from './APIService'

export interface IAuthPayload {
    username: string,
    password: string
}

class AuthAPI {
    login = ({username, password}: IAuthPayload) => API.post('/auth/login', {username, password});
    registration = ({username, password}: IAuthPayload) => API.post('/auth/registration', {username, password});
}

export default new AuthAPI();
