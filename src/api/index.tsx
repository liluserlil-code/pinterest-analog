import { IPictureArray } from "../domains/picture"


class API {
    public static async loadPicture(page:number):Promise<IPictureArray> {
        return fetch(`https://picsum.photos/v2/list?page=${page}&limit=12`)
            .then(response => response.json())
    }
}

export default API