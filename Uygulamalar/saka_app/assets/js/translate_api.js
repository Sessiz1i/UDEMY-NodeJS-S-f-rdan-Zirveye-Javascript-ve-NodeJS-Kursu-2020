// Google Translate API

class TranslateApi {
    constructor(enJoke) {
        this.baseURL = "https://translation.googleapis.com",
            this.enText = enJoke
        this.axiosObj = axios.create({
            baseURL: this.baseURL,
            params: {
                target: "tr",
                key: "AIzaSyD0yJA398563ZiPyr5hAvQB_nbCo4aBEqw_",
                q: this.enText
            }
        })
    }

    async getTranslate() {
        try {
            const translation = await this.axiosObj.get("/language/translate/v2")
            console.log(translation.data.data.translations[0].translatedText)
            return translation.data.data.translations[0].translatedText
        } catch (err) {
            return err.response.data.error.message
        }

    }
}

export default function translate(enJoke) {
    const getTrans = new TranslateApi(enJoke).getTranslate()
    return getTrans;
}


/*

https://translation.googleapis.com/language/translate/v2?target=tr&key=AIzaSyD0yJA398563ZiPyr5hAvQB_nbCo4aBEqw&q=car

*/
