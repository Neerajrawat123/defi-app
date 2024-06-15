import axios from "axios"

export const fetcher =  async (url: string) => {
    try {
        const res = await axios(url)

        if(res.status !== 200){
             throw new Error('Network response failed')
        }

        return res.data
        
    } catch (error) {
        console.log(error)
        throw error
    }
}