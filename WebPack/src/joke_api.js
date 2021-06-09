// Joke API
import axios from "axios";
class JokeApi {
    constructor() {
        this.baseURL = "https://api.chucknorris.io"
        this.axiosObj = axios.create({
            baseURL: this.baseURL,
        })
    }

    async getRandJoke() {
        try {
            const jokeResponse = await this.axiosObj.get("/jokes/random")
            console.log(jokeResponse.data.value)
            return jokeResponse.data.value
        } catch (err) {
            console.log(err.response.data.message)
            return err.response.data.message
        }
    }
}

export function joke() {
    const getJoke = new JokeApi().getRandJoke()
    return getJoke
}