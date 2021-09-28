

export const authApi  =  {
   async register(body){

        const url = '/api/auth/registration'
        let method = 'GET'
        let headers = {}
        try {
            if (body) {
                body = JSON.stringify(body)
                headers['Content-Type'] = 'application/json'
            }
            const response = await fetch(url,{method, body, headers})
            const data = await response.json()

            if (!response.ok){
                throw new Error(data.message || 'Что-то пошло не так')
            }

            return data
        }catch (e) {
            throw e
        }



    }
}