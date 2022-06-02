import { businessActions } from "./business-slice";

export const fetchBusinessesData = () => {
    return async (dispatch) => {
        console.log( 'response')
        const fetchData = async () => {
            const response = await fetch(process.env.PUBLIC_URL+'/data.json')
            if(!response.ok){
                throw new Error('cannot fetch data')
            }

            const data = await response.json()
            return data
        }

        try {
            const data = await fetchData()
            console.log(data)
            dispatch(businessActions.fetchBusinesses(data))
        } catch (error) {
            console.log (error)
        }
    }
}