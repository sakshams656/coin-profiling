interface NewsArticle {
    source: {
      id: string | null;
      name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;2
  }
  
  interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
  }