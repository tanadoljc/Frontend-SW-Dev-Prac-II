import axios from  'axios'

const API_URL = 'http://localhost:5003/api/v1/auth/'

const register = async (userData) => {
    try {
        const response = await axios.post(API_URL+'register/', userData)
        console.log(JSON.stringify(response.data))
        console.log(response.data.name)

        if(response.data){
            localStorage.setItem('user', response.data.name)
        }
        return response.data.name
    } catch (error) {
        console.log('authService: register')
        console.log(error)
        return error
    }
}

const login = async (userData) => {
    try {
        const response = await axios.post(API_URL+'login/', userData)

        console.log(JSON.stringify(response.data))
        console.log(response.data.name)

        if(response.data){
            localStorage.setItem('user', response.data.name)
        }
        return response.data.name
    } catch (error) {
        console.log('authService: login')
        console.log(error)
        return error
    }
}

const logout = () => {
    localStorage.setItem('user', null)
}

const authService = {
    register,
    logout,
    login
}

export default authService;