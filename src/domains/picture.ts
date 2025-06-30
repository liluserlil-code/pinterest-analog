export interface IPicture {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export type IPictureArray = IPicture[]