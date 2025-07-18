import { IPictureArray } from "../domains/picture"


class API {
    public static async loadPicture(page:number, limit:number = 12):Promise<IPictureArray> {
        return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then(response => response.json())
    }
}

export default API