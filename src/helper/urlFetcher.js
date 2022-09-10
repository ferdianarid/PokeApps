import axios from "axios"

export const urlFetcher = async(url) => {
    return await axios.get(url).then((response) => response.data)
}