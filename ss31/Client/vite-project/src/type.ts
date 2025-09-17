export interface Image {
  url: string;
  alt?: string;
}
export interface Articles {
    id:number,
    title:string,
    image: Image;
    dateOfWriting:number,
    status:boolean
    content: string;
}