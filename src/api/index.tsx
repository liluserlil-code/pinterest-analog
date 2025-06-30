import { IPictureArray } from "../domains/picture"


class API {
    public static async loadPicture():Promise<IPictureArray> {
        return fetch("https://picsum.photos/v2/list")
            .then(response => response.json())
    }
}

export default API