export interface Post {
  post: {
    title: string;
    slug: string;
    image: {
      url: string;
    };
    content: {
      document: [];
    };
  };
}
