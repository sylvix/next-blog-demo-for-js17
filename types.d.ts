export interface ApiPost {
  title: string;
  description: string;
}

export interface Post extends ApiPost {
  id: string;
}

export interface ApiPostsList {
  [id: string]: ApiPost;
}