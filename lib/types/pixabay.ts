export type PixabayImage = {
    id: number;
    pageURL: string;
    type: string;
    tags: string; // ex: "blossom, bloom, flower"
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    fullHDURL: string;
    imageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
  };
  
export type PixabayResponse = {
    total: number;
    totalHits: number;
    hits: PixabayImage[];
  };
  