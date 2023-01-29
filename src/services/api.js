import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api-cardapio-dani.onrender.com',
    // baseURL: 'http://localhost:5000',
    // baseURL: 'http://192.168.0.8:5000',
})

export const createSession = async (email, password) => {
    return api.post('/session', { email, password })
}

export const getUser = async () => {
    authToken()
    return api.get('/getUser')
}

export const getMenu = async () => {
    return api.get('/indexRestaurant')
}

export const getRestaurant = async () => {
    authToken()
    return api.get('/getRestaurant')
}


export const createTypeDishes = async (name, restaurantId) => {
    authToken()
    return api.post('/createTypeDishes', { name, restaurantId })
}

export const updateTypeDish = async (name, id, restaurantId) => {
    authToken()
    return api.put(`/updateTypeDish/${restaurantId}`, {
        name,
        id
    })
}

export const deletTypeDish = async (id, restaurantId) => {
    authToken()
    return api.delete(`/deleteTypeDish/${id}/${restaurantId}`)
}


export const createDish = async (name, description, price, file, typeDishesId) => {
    authToken()
    const dados = new FormData()
    console.log(dados)
    dados.append("name", name)
    dados.append("description", description)
    dados.append("price", price)
    dados.append("file", file)
    
    return api.post(`/createDish/${typeDishesId}`, dados, {
        headers: {
            "Content-type": `multipar/form-data`,
        }
    })
}

export const getDish = async (id) => {
    authToken()
    return api.get(`/readDish/${id}`)
}

export const getDishes = async (readDishesId) => {
    authToken()
    return api.get(`/readDishes/${readDishesId}`)
}

export const updateDish = async (name, price, description, status, file = null, id, typeDishesId) => {
    authToken()

    const dados = new FormData()
    
    dados.append("name", name)
    dados.append("description", description)
    dados.append("price", price)
    dados.append("status", status)
    dados.append("file", file)

    return api.put(`/updateDish/${id}/${typeDishesId}`,  dados, {
        headers: {
            "Content-type": `multipar/form-data`,
        }
    })
}

export const deleteDish = async (id, typeDishesId) => {
    authToken()
    return api.delete(`/deleteDish/${id}/${typeDishesId}`)
}

const authToken = () => {
    const token = localStorage.getItem('token')
    api.defaults.headers.Authorization = `Bearer ${token}`
}