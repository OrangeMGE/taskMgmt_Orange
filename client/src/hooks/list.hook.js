import {useState, useCallback} from 'react'

export const ListHook = () => {
    const request = useCallback( async( url, 
                                        method='GET', 
                                        body = null, 
                                        headers= {}) => {


        try {
            if(body) {
                body = body.text
                headers['Content-Type'] = 'application/text'
            }

            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            if(!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }

            setLoading(false)
            return data

        } catch(e) {    
            console.log('catch e ', e.message)
            throw e
        }

    }, [])
    
    return { request }
}