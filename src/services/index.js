import { urlFetch } from "../constant";


export const getIngUsers = async (user) => {
    const data = await fetch(`${urlFetch}${user}`)
    const users = await data.json()
    return users
} 

