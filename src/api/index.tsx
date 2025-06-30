import { IPictureArray } from "../domains/picture"


class API {
    public static async loadPicture():Promise<IPictureArray> {
        return fetch("https://jsonplaceholder.typicode.com/photos")
            .then(response => response.json())
    }
}

export default API