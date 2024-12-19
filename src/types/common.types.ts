export interface ImageType {
  id: string;
  alt_description: string;
  urls: {
    thumb: string;
    regular: string;
  };
}

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: ImageType[];
}
