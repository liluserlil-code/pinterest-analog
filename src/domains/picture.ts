export interface IPicture {
    id: number;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export type IPictureArray = IPicture[]
